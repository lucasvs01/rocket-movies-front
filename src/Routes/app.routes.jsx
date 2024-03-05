import { Routes, Route, Navigate } from "react-router-dom";

import { Home } from "../Pages/Home"
import { Perfil } from "../Pages/Perfil"
import { New } from "../Pages/new";
import { Details } from "../Pages/Details"

export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/profile" element={<Perfil/>}/>
            <Route path="/new" element={<New/>}/>
            <Route path="/details/:id" element={<Details/>}/>

            <Route path="*" element={<Navigate to={"/"}></Navigate>} ></Route>
        </Routes>
    )
}