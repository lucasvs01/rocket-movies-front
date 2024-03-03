import { Container } from "./styles";
import { Header } from "../../Components/Header";
import { Button } from "../../Components/Button";
import { Items } from "../../Components/Items";
import { Input } from "../../Components/Input";

import { AiOutlinePlus } from "react-icons/ai";
import {AiOutlineSearch} from "react-icons/ai";


import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";





export function Home(){

    const {user} = useAuth();
    const navigate = useNavigate();

    const [search, setSearch] = useState();
    const [notes, setNote] = useState([]);



    async function handleShowDetailsMovieNotes(note_id){
        navigate(`details/${note_id}`)
    }

    useEffect(()=>{
        async function fetchMoviesNotes(){

         if(search === undefined){

            const response = await api.get(`notes?user_id=${user.id}`);
            setNote(response.data)

        }else{

            const response = await api.get(`notes?user_id=${user.id}&title=${search}`);
            setNote(response.data)

        }}

        fetchMoviesNotes()
    }, [search])


    return (


        <Container>
            <Header >
                {<Input placeholder="Pesquise pelo título" icon={AiOutlineSearch} onChange={e => setSearch(e.target.value)}/>}
            </Header>

            <main> 
                <header>
                    <h1>Meu filmes</h1>
                    <Button title="Adicionar filme" to="/new" icon={AiOutlinePlus}/>
                          
                </header>
                
                <div className="content">

                    {   
                        notes && notes.map( note =>                          
                            <li key={String(note.id)} onClick={()=> handleShowDetailsMovieNotes(note.id)}>
                                <Items data={note}/>

                    </li>
)                 
                    }
                                       
                </div>
            </main>

        </Container>
    )
}