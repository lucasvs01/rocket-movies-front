import { Container } from "./styles";

export function Buttontext({title, icon: Icon,...rest}){

    return (
        <Container {...rest} type="button">
            
            
            {Icon && <Icon size={20}></Icon>}
            
            <span>
                {title}
            </span>
        </Container>
    )
}