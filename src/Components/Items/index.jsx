import { Container } from "./styles";
import {AiTwotoneStar} from "react-icons/ai"
import { Tag } from "../Tag";

export function Items({data, ...rest}){

    return (
        <Container {...rest}>
            
            <h2>
                {data.title}
            </h2>

            {(    data.rating === 0 ? 
                    <div className="stars">
                                         
                        <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                        <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                        <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                        <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                        <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
        
                    </div> : 
                    null)}

            {(    data.rating === 1 ? 
                
                        <div className="stars">
                                            
                            <AiTwotoneStar ></AiTwotoneStar>
                            <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                            <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                            <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                            <AiTwotoneStar className="transparent-star"></AiTwotoneStar>

                        </div> : 
                    null)}

            {(    data.rating === 2 ? 
                    <div className="stars">
                                         
                        <AiTwotoneStar ></AiTwotoneStar>
                        <AiTwotoneStar ></AiTwotoneStar>
                        <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                        <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                        <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
        
                    </div> : 
                    null)}  

            {(    data.rating === 3 ? 
                    <div className="stars">
                                         
                        <AiTwotoneStar ></AiTwotoneStar>
                        <AiTwotoneStar ></AiTwotoneStar>
                        <AiTwotoneStar ></AiTwotoneStar>
                        <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
                        <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
        
                    </div> : 
                    null)} 

            {(    data.rating === 4 ? 
                    <div className="stars">
                                         
                        <AiTwotoneStar ></AiTwotoneStar>
                        <AiTwotoneStar ></AiTwotoneStar>
                        <AiTwotoneStar ></AiTwotoneStar>
                        <AiTwotoneStar ></AiTwotoneStar>
                        <AiTwotoneStar className="transparent-star"></AiTwotoneStar>
        
                    </div> : 
                    null)} 

            {(    data.rating === 5 ? 
                    <div className="stars">
                                         
                        <AiTwotoneStar ></AiTwotoneStar>
                        <AiTwotoneStar ></AiTwotoneStar>
                        <AiTwotoneStar ></AiTwotoneStar>
                        <AiTwotoneStar ></AiTwotoneStar>
                        <AiTwotoneStar ></AiTwotoneStar>
        
                    </div> : 
                    null)}

            <p>
                {data.description}
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