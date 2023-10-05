import { Container } from "./styles";
import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { AiOutlinePlus } from "react-icons/ai";


export function Details(){

    return (
        <Container>
            <Header>
            </Header>

            <Button icon={AiOutlinePlus} title="Adicionar filme" ></Button>      
        </Container>
    )
}