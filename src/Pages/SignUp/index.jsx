import { Container } from "./styles";
import { Form } from "./styles"; 

import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"
import { Buttontext } from "../../Components/Buttontext"

import {AiOutlineMail} from "react-icons/ai"
import {AiOutlineLock} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {AiOutlineArrowLeft} from "react-icons/ai"

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {api} from "../../services/api"


export function SignUp(){


    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    function handleSignUp(){

        if(!name || !email || !password){
            alert("Preencha todos os campos")
    
            return
        }
    
        api.post("/users", {name, email, password}).then(
            ()=>{ alert("Usuario cadastrado com sucesso!")
                navigate("/")
                })
                .catch( error =>{
                    if(error.response){
                    alert(error.response.data.message)
            }else{
                alert("Não foi possivel cadastrar o usuário")
            }
        }
        )

    }

    return (
        <Container>
            <div className="content"> 
                <Form>
                    
                    <h1>RocketMovies</h1>

                    <p>Aplicação para acompanhar tudo que assistir.</p>
                
                    <h2>Crie sua conta</h2>

                    <div className="inputs">
                        <Input placeholder="Nome" type="text" icon={AiOutlineUser} onChange={ (e) => setName(e.target.value)}/>
                        <Input placeholder="E-mail" type="email" icon={AiOutlineMail} onChange={ (e) => setEmail(e.target.value)}/>
                        <Input placeholder="Senha" type="password" icon={AiOutlineLock} onChange={ (e) => setPassword(e.target.value)}/>
                    </div>

                    <Button title="Cadastrar" onClick={handleSignUp}/>

                    <Buttontext to="/" title="Voltar para o login" icon={AiOutlineArrowLeft}/>

                </Form>
            </div>

            <div className="background"/>
        </Container>
    )
}