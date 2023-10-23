import { Container } from "./styles";
import {AiTwotoneStar} from "react-icons/ai"
import { Tag } from "../Tag";

export function Items({data, ...rest}){

    return (
        <Container {...rest}>
            
            <h2>
                {data.title}
            </h2>

            <div className="stars">
                <AiTwotoneStar ></AiTwotoneStar>
                <AiTwotoneStar ></AiTwotoneStar>
                <AiTwotoneStar ></AiTwotoneStar>
                <AiTwotoneStar ></AiTwotoneStar>
                <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
            </div>

            <p>
                {data.children}
            </p>
            

                {
                    data.tags && 
                    <footer>
                        {
                            data.tags.map(tag => <Tag key={tag.id} title={tag.name}/>)
                        }
                    </footer>
                }         
        </Container>
    )
}