import style from "./style.module.css";
import { MdControlCamera } from "react-icons/md";
import { Link } from 'react-router';

function header() {
    return (
        <header>
            <Link  className={style.logo} to="/">
                <MdControlCamera size={40}/>
                <h1>Bengo</h1>
            </Link>
            <div className={style.links}>
            <Link className={style.linkAtivado} to="/">Home</Link>
            <Link className={style.link} to="/games">Games</Link>
            <Link className={style.link} to="/destaques">Destaques</Link>
            </div>
        </header>
    );
}

export default header;
