import { createContext, useContext, useState, useEffect } from "react";
import {api} from "../services/api"
import { useNavigate } from "react-router-dom";



export const AuthContext = createContext({});



function AuthProvider({ children }){
    const [data, setData] = useState({});


    async function signIn({ email, password }){
        

        try {
            const response = await api.post("/sessions", {email, password})
            
            const {user, token} = response.data

            localStorage.setItem("@rocketMovies:user", JSON.stringify(user))
            localStorage.setItem("@rocketMovies:token", token)

            api.defaults.headers.common['Authorization'] = `Bearer ${token}`

            setData({user, token})



        } catch (error) {
            if(error.response){
                alert(error.response.data.message) //Joga na tela o erro capturado no back-end
            }else{
                alert("Nào foi possivel entrar!")
            }
        }
 
    }

    async function updateProfile({user, avatarFile}){

        if(avatarFile){
            const FileUploadForm = new FormData()

            FileUploadForm.append("avatar", avatarFile);

            const response = await api.patch("users/avatar", FileUploadForm);

            user.avatar = response.data.avatar;

        }

        try {

            await api.put(`/users`, user)

            localStorage.setItem("@rocketMovies:user", JSON.stringify(user))

            setData({user, token: data.token, avatarFile})

            alert("Perfil Atualizado com sucesso!")
        } catch (error) {
            if(error.response){
                alert(error.response.data.message)
            }else{
                alert("Não foi possivel atualizar o perfil")
            }
        }
    }


    useEffect(() => 
        	{
                const user = localStorage.getItem("@rocketMovies:user");
                const token = localStorage.getItem("@rocketMovies:token");

                if(token && user) {

                    api.defaults.headers.common['Authorization'] = `Bearer ${token}`

                    setData({
                        token,
                        user: JSON.parse(user)
                    })

                }
        }, []
    );

    function logOut(){
        localStorage.removeItem("@rocketMovies:token")
        localStorage.removeItem("@rocketMovies:user")

        setData({})

        
        
    }

    return (
        <AuthContext.Provider value={{signIn, user: data.user, logOut, updateProfile}}>
            {children}
        </AuthContext.Provider>
        )

}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}



export {AuthProvider, useAuth}