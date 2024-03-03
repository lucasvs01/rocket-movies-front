import { Container } from "./styles";

import { Header } from "../../Components/Header";
import { Buttontext } from "../../Components/Buttontext"
import { Input } from "../../Components/Input"
import { Textarea } from "../../Components/Textarea"
import { Section } from "../../Components/Section"
import { Button } from "../../Components/Button"
import { Movieitem } from "../../Components/Movieitem"

import { AiOutlineArrowLeft } from "react-icons/ai"

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";




export function New(){

    const [title, setTitle] = useState();
    const [rating, setRating] = useState();
    const [observation, setObservation] = useState();


    const [tags, setTags] = useState([]);
    const [newTags, setNewTags] = useState("");

    const navigate = useNavigate();

    function handleBack(){
        navigate(-1)
    }

    async function handleNewMovie(){


        if(!title){
            return alert("Digite o titulo do filme")
        }

        if(!rating){
            return alert("Digite uma nota de 0 a 5 para o filme")
        }

        if(!observation){
            return alert("Digite as observações do filme")
        }

        if(newTags){
            return alert("Você deixou um marcador sem ser adicionado no campo de marcadores, clique no botão vermelho ao lado para adicionar o marcador ou apague caso não deseje adiciona-lo.")
        }

        try {

            await api.post("/notes", {
                title,
                rating: Math.round(rating),
                description: observation,
                tags
            })

            alert("Filme criado com sucesso.")

            handleBack()
            
        } catch (error) {

            if(error.response){
                alert(error.response.data.message)
            }else(
                alert("Não foi possivel criar nota")
            )
            
        }

    }

    function handleAddTags(){

        setTags(prevState => [...prevState, newTags])

        setNewTags("")

    }

    function handleRemoveTags(tagDeleted){

       setTags( prevState => prevState.filter(
        tag => tag !== tagDeleted
       ))

    }


    return (
        <Container>
            <Header>
            </Header>

            <main>
                <Buttontext onClick={handleBack} title="Voltar" icon={AiOutlineArrowLeft} className="back"></Buttontext>

                <h1>
                    Novo filme
                </h1>

                <div className="inputs">
                    <Input placeholder="Título"
                        onChange={e => setTitle(e.target.value)}
                    />

                    <Input placeholder="Sua nota (de 0 a 5)"
                        onChange={e => setRating(e.target.value)}
                    />
                </div>

                <Textarea placeholder="Observações"
                    onChange={e => setObservation(e.target.value)}
                >
        
                </Textarea>


    	              
                

                    <Section title="Marcadores" >
                        <div className="markers">
                            {
                                tags.map(
                                    (tag, index) => (<Movieitem 
                                        value={tag} 
                                        onClick={() => {handleRemoveTags(tag)}} 
                                        key={String(index)}/>
                                    ))
                            }

                            <Movieitem placeholder="Novo marcador" onChange={e => setNewTags(e.target.value)} onClick={handleAddTags} isNew/>
                        </div>

                    </Section>
                

                <footer>
                    <Button title="Adicionar filme" onClick={handleNewMovie}></Button>                    
                </footer>

            </main>

        </Container>
    )
}