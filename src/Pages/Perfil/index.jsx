import { Container } from "./styles";
import { Profile } from "./styles"
import { Form } from "./styles"

import { Buttontext } from "../../Components/Buttontext";
import { Input } from "../../Components/Input";
import { Button } from "../../Components/Button";

import {AiOutlineArrowLeft} from "react-icons/ai"
import {AiOutlineLock} from "react-icons/ai"
import {AiOutlineCamera} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import { Link } from "react-router-dom";

export function Perfil({...rest}){
    return (
        <Container {...rest}>

            <header>
                <Link to="/">
                    <AiOutlineArrowLeft/>

                    Voltar
                </Link>
            </header>

           <main>

                <Form>   
                    <Profile>
                        <img src="https://github.com/lucasvs01.png" alt="Foto do usuário" />

                        <label htmlFor="avatar">
                            <AiOutlineCamera></AiOutlineCamera>
                            <input type="file" id="avatar"/>
                        </label>
                    </Profile>

                <div className="inputs_readOnly">
                    <Input placeholder="" value="Lucas Vilaça" readOnly icon={AiOutlineUser}/>
                    <Input placeholder="" value="lucasvs01@outlook.com" readOnly icon={AiOutlineMail}/>

                
                </div>

        	    <div className="inputs_write">
                    <Input placeholder="Senha atual"  type="password" icon={AiOutlineLock} autoComplete="current-password"/>
                    <Input placeholder="Nova senha" type="password" icon={AiOutlineLock} autoComplete="new-password"/>
                </div>
                
                    <Button title="Salvar"></Button>

                </Form>
           </main>
           

        </Container>
    )
}