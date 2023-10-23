import { Container } from "./styles";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai"


export function Movieitem({onClick, value, isNew, isActive, ...rest}){
    return (
        <Container isNew={isNew} className="addMarker">
            <input type="text" 
                value={value}
                readOnly={!isNew}
                {...rest}
            />

            <button type="button"
                onClick={onClick}
                

                
            >
                { !isNew ? <AiOutlineClose/> : <AiOutlinePlus/>}
                
            </button>
        </Container>
    )

}