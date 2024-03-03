import { Container } from "./styles";
import { Form } from "./styles"; 

import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"
import { Buttontext } from "../../Components/Buttontext"

import {AiOutlineMail} from "react-icons/ai"
import {AiOutlineLock} from "react-icons/ai"

import { useAuth } from "../../hooks/auth";
import { useState } from "react";



export function SignIn(){
    
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    
    const {signIn} = useAuth();
    
    function handleSignIn(){
        signIn({email, password})
    }
    
    return (
        <Container>
            <div className="content"> 
                <Form>
                    
                    <h1>RocketMovies</h1>

                    <p>Aplicação para acompanhar tudo que assistir.</p>
                
                    <h2>Faça seu login</h2>

                    <div className="inputs">
                        <Input placeholder="E-mail" type="email" icon={AiOutlineMail} onChange={ e => setEmail(e.target.value)}/>
                        <Input placeholder="Senha" type="password" icon={AiOutlineLock} onChange={ e => setPassword(e.target.value)}/>
                    </div>

                    <Button title="Entrar" onClick={handleSignIn}/>

                    <Buttontext to="/register" title="Criar conta"/>

                </Form>
            </div>

            <div className="background"/>
        </Container>
    )
}