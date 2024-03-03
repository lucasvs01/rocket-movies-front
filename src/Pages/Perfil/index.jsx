import { Container } from "./styles";
import { Profile } from "./styles"
import { Form } from "./styles"

import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

import {AiOutlineArrowLeft} from "react-icons/ai"
import {AiOutlineLock} from "react-icons/ai"
import {AiOutlineCamera} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/auth";
import { useState } from "react";

import { api } from "../../services/api";

import avatar_placeholder from "../../assets/avatar_placeholder.svg"


export function Perfil({...rest}){

    const { user, updateProfile } = useAuth();
    
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/Files/${user.avatar}` : avatar_placeholder;

    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdateProfile(){

        const updated = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword,
            
            
        }

        const userUpdated = Object.assign(user, updated)
        
        await updateProfile({user: userUpdated, avatarFile})
    }

    function handleAvatarUpdate(event){
        const File = event.target.files[0]

        setAvatarFile(File)

        const imgPreview = URL.createObjectURL(File)

        setAvatar(imgPreview)
    }

    return (

        <Container {...rest}>

            <header>
                <Link to={-1}>
                    <AiOutlineArrowLeft/>

                    Voltar
                </Link>
            </header>

           <main>

                <Form>   
                    <Profile>
                        <img src={avatar} alt="Foto do usuário" />

                        <label htmlFor="avatar" onChange={handleAvatarUpdate}>
                            <AiOutlineCamera></AiOutlineCamera>
                            <input type="file" id="avatar"/>
                        </label>
                    </Profile>

                <div className="inputs_readOnly">
                    <Input placeholder="" value={name} icon={AiOutlineUser} onChange={e => setName(e.target.value)}/>
                    <Input placeholder="" value={email} readOnly icon={AiOutlineMail}/>

                
                </div>

        	    <div className="inputs_write">
                    <Input placeholder="Senha atual"  
                    type="password" icon={AiOutlineLock} 
                    autoComplete="current-password" 
                    onChange={e => setOldPassword(e.target.value)}/>

                    <Input placeholder="Nova senha" 
                    type="password" 
                    icon={AiOutlineLock} 
                    autoComplete="new-password"
                    onChange={e => setNewPassword(e.target.value)}/>

                </div>
                
                    <Button title="Salvar" onClick={handleUpdateProfile}></Button>

                </Form>
           </main>
           

        </Container>
    )
}