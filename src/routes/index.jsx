import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home";
import Games from "../pages/games";
import Destaques from "../pages/destaques";

export default function RoutesApp(){

    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games" element={<Games />} />
                <Route path="/destaques" element={<Destaques />} />
            </Routes>
        </BrowserRouter>
    );

}