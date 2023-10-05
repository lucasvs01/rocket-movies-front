import { Container } from "./styles";
import { Input } from "../../Components/Input";
import {AiOutlineSearch} from "react-icons/ai";



export function Header(){

    return(
        <Container>
           <h1>RocketMovies</h1>

           <Input placeholder="Pesquise pelo título" icon={AiOutlineSearch}/>

           <a src="/">
                <div>
                    <strong>
                        Lucas Santos
                    </strong>
                    
                    <span>
                        sair
                    </span>
                </div>

                <img src="https://github.com/lucasvs01.png" alt="Foto do Usuário" />
           </a>
        </Container>


    )
}