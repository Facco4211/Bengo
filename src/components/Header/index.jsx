import style from "./style.module.css";
import { MdControlCamera } from "react-icons/md";
import { NavLink } from 'react-router-dom';
import React, { useState } from "react"

function Header() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("Categorias⬇️");

    const options = ["Ação", "Aventura", "RPG", "Fantasia", "Terro", "Casual"];

    const handleSelect = (option) => {
        setSelected(option);
        setOpen(false);
    }
    return (

        <header>
            <div className={style.parteCima}>
                <NavLink className={style.logo} to="/">
                    <MdControlCamera size={40} />
                    <h1>Bengo</h1>
                </NavLink>
                <div className={style.links}>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? `${style.link} ${style.active}` : style.link} end>Home
                    </NavLink>
                    <NavLink
                        to="/games"
                        className={({ isActive }) =>
                            isActive ? `${style.link} ${style.active}` : style.link}>Games
                    </NavLink>
                    <NavLink
                        to="/destaques"
                        className={({ isActive }) =>
                            isActive ? `${style.link} ${style.active}` : style.link}>Destaques
                    </NavLink>
                </div>
            </div>
            <div className={style.parteBaixo}>
                <div className={style.dropdown}>
                    <button className={style.dropdownBtn} onClick={() => setOpen(!open)}>
                        {selected} <span className={`arrow ${open ? "up" : "down"}`} />
                    </button>

                    {open && (
                        <ul className={style.dropdownMenu}>
                            {options.map((option, i) => (
                                <li key={i} onClick={() => handleSelect(option)}>
                                    {option}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div>
                    <input type="search" />
                </div>
            </div>
        </header>
    );
}

export default Header;
