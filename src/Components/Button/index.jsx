import { Container } from "./styles";

import {AiOutlinePlus} from "react-icons/ai"

export function Button({ icon: Icon, title, isActive, ...rest}){
    return (
        <Container {...rest} 
        type="button"
        $isActive={isActive}
        >

            {Icon && <Icon size={20}></Icon>}

            <p>
                {isActive ? title="Carregando..." : title}     
            </p>


        </Container>
    )
}