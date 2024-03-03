import { Container } from "./styles";
import { Input } from "../../Components/Input";
import {AiOutlineSearch} from "react-icons/ai";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import avatar_placeholder from "../../assets/avatar_placeholder.svg"
import { useState } from "react";



export function Header({children, ...rest}){

    const { logOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/Files/${user.avatar}` : avatar_placeholder;

    const navigate = useNavigate();

    function handleNavigate(){
        navigate("/profile")
    }

    function handleLogOut(){

        logOut()
        navigate("/")
    }

    return(
        <Container{...rest}>
           <h1>RocketMovies</h1>

        {children}
        
           <a src="/" onClick={handleNavigate}>
                <div>
                    <strong>
                        {user.name}
                    </strong>
                    

                    <span onClick={handleLogOut}>
                        sair
                    </span>
                </div>

                <img src={avatarUrl} alt="Foto do Usuário" />
           </a>
        </Container>


    )
}

