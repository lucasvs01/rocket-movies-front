import { Container } from "./styles";
import { Profile } from "./styles";

import { Header } from "../../Components/Header";
import { Buttontext } from "../../Components/Buttontext";
import {Tag} from "../../Components/Tag";
import { Button } from "../../Components/Button";

import { AiOutlineArrowLeft } from "react-icons/ai";
import {AiTwotoneStar} from "react-icons/ai";
import {AiOutlineClockCircle} from "react-icons/ai";

import { api } from "../../services/api";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

export function Details({data, ...rest}){

    const [movie, setMovie] = useState(null);
    const [tags, setTags] = useState({});
    const params =  useParams();
    const { user } = useAuth();
    

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/Files/${user.avatar}` : avatar_placeholder;
    const navigate = useNavigate()
    
    function handleBack(){
        navigate(-1)
    }

    async function handleMovieDelete(){

        const confirmationForDeleteMovie = window.confirm("Deseja realmente excluir o filme?")

        if(confirmationForDeleteMovie){
            
            await api.delete(`/notes/${params.id}`)
    
            handleBack()
        }
        
    }

    useEffect(() => {
        async function handleDetails(){


           const response = await api.get(`/notes/${params.id}`)
    
           setMovie(response.data)
           setTags(response.data.tags)
            
    
        }
        
        handleDetails()
    },
    [])

    

    return (
        <Container {...rest}>
            <Header/>
        {   movie &&     
            <main>
                <Buttontext title="Voltar" onClick={handleBack} icon={AiOutlineArrowLeft}/>


                <header>
                    <div className="title">
                        <h1>
                           {movie.title} 
                        </h1>

                        <div className="stars">
                            {(    movie.rating === 0 ? 
                                    <div className="stars">
                                                    
                                    <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                                    <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                                    <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                                    <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                                    <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                    
                                    </div> : 
                                    null)}

                            {(    movie.rating === 1 ? 
                                
                                        <div className="stars">
                                                            
                                            <AiTwotoneStar ></AiTwotoneStar>
                                            <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                                            <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                                            <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                                            <AiTwotoneStar className="transparent-star"></AiTwotoneStar>

                                        </div> : 
                                    null)}

                            {(    movie.rating === 2 ? 
                                    <div className="stars">
                                                        
                                        <AiTwotoneStar ></AiTwotoneStar>
                                        <AiTwotoneStar ></AiTwotoneStar>
                                        <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                                        <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                                        <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                        
                                    </div> : 
                                    null)}  

                            {(    movie.rating === 3 ? 
                                    <div className="stars">
                                                        
                                        <AiTwotoneStar ></AiTwotoneStar>
                                        <AiTwotoneStar ></AiTwotoneStar>
                                        <AiTwotoneStar ></AiTwotoneStar>
                                        <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                                        <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                        
                                    </div> : 
                                    null)} 

                            {(    movie.rating === 4 ? 
                                    <div className="stars">
                                                        
                                        <AiTwotoneStar ></AiTwotoneStar>
                                        <AiTwotoneStar ></AiTwotoneStar>
                                        <AiTwotoneStar ></AiTwotoneStar>
                                        <AiTwotoneStar ></AiTwotoneStar>
                                        <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                        
                                    </div> : 
                                    null)} 

                            {(    movie.rating === 5 ? 
                    <div className="stars">
                                         
                        <AiTwotoneStar ></AiTwotoneStar>
                        <AiTwotoneStar ></AiTwotoneStar>
                        <AiTwotoneStar ></AiTwotoneStar>
                        <AiTwotoneStar ></AiTwotoneStar>
                        <AiTwotoneStar ></AiTwotoneStar>
        
                    </div> : 
                    null)}
                        </div>
                    </div>


                        <Profile>
                            <img src={avatarUrl} alt="Foto usuário"/>

                            <span>
                                {`Por ${user.name}`} 
                            </span>

                            <AiOutlineClockCircle/>

                            <span>
                                {movie.created_at}
                            </span>
                        </Profile>
                </header>


                <div className="tags" > 
                 {
                    tags && tags.map(tag => <Tag title={tag.name} key={String(tag.id)}/>)
                 }
                </div>

                

                <p>
                    {movie.description}
                </p>


            </main>
        }

                <footer>
                    <Button title="Excluir filme" onClick={handleMovieDelete}></Button>
                </footer>
        </Container>
    )
}