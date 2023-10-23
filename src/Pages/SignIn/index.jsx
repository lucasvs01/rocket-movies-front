import { Container } from "./styles";
import { Form } from "./styles"; 

import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"
import { Buttontext } from "../../Components/Buttontext"

import {AiOutlineMail} from "react-icons/ai"
import {AiOutlineLock} from "react-icons/ai"

import { Link } from "react-router-dom"


export function SignIn(){

    return (
        <Container>
            <div className="content"> 
                <Form>
                    
                    <h1>RocketMovies</h1>

                    <p>Aplicação para acompanhar tudo que assistir.</p>
                
                    <h2>Faça seu login</h2>

                    <div className="inputs">
                        <Input placeholder="E-mail" type="email" icon={AiOutlineMail}/>
                        <Input placeholder="Senha" type="password" icon={AiOutlineLock}/>
                    </div>

                    <Button title="Entrar"/>

                    <Buttontext to="/register" title="Criar conta"/>

                </Form>
            </div>

            <div className="background"/>
        </Container>
    )
}