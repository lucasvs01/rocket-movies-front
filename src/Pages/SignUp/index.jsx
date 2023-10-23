import { Container } from "./styles";
import { Form } from "./styles"; 

import { Input } from "../../Components/Input"
import { Button } from "../../Components/Button"
import { Buttontext } from "../../Components/Buttontext"

import {AiOutlineMail} from "react-icons/ai"
import {AiOutlineLock} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {AiOutlineArrowLeft} from "react-icons/ai"


export function SignUp(){

    return (
        <Container>
            <div className="content"> 
                <Form>
                    
                    <h1>RocketMovies</h1>

                    <p>Aplicação para acompanhar tudo que assistir.</p>
                
                    <h2>Crie sua conta</h2>

                    <div className="inputs">
                        <Input placeholder="Nome" type="text" icon={AiOutlineUser}/>
                        <Input placeholder="E-mail" type="email" icon={AiOutlineMail}/>
                        <Input placeholder="Senha" type="password" icon={AiOutlineLock}/>
                    </div>

                    <Button title="Cadastrar"/>

                    <Buttontext to="/" title="Voltar para o login" icon={AiOutlineArrowLeft}/>

                </Form>
            </div>

            <div className="background"/>
        </Container>
    )
}