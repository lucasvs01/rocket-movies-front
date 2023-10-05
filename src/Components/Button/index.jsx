import { Container } from "./styles";

import {AiOutlinePlus} from "react-icons/ai"

export function Button({ icon: Icon, title, isActive, ...rest}){
    return (
        <Container {...rest}>
            {title}
            {/* ${isActive ? title="Carregando" : {title}} */}
        </Container>
    )
}