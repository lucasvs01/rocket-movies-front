import { Container } from "./styles";

import { Header } from "../../Components/Header";
import { Buttontext } from "../../Components/Buttontext"
import { Input } from "../../Components/Input"
import { Textarea } from "../../Components/Textarea"
import { Section } from "../../Components/Section"
import { Button } from "../../Components/Button"
import { Movieitem } from "../../Components/Movieitem"

import { AiOutlineArrowLeft } from "react-icons/ai"

export function New(){

    return (
        <Container>
            <Header>
                sair
            </Header>

            <main>
                <Buttontext to="/" title="Voltar" icon={AiOutlineArrowLeft} className="back"></Buttontext>

                <h1>
                    Novo filme
                </h1>

                <div className="inputs">
                    <Input placeholder="Título"/>
                    <Input placeholder="Sua nota (de 0 a 5)"/>
                </div>

                <Textarea placeholder="Observações">

                </Textarea>


                <Section title="Marcadores" >

                    <div className="markers">
                        <Movieitem value="React" />
                        <Movieitem placeholder="Novo marcador" isNew/>
                    </div>

                </Section>

                <footer>
                    <Button title="Excluir filme"></Button>
                    <Button title="Salvar alterações"></Button>                    
                </footer>

            </main>

        </Container>
    )
}