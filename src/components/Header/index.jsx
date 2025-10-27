import style from "./style.module.css";
import { MdControlCamera } from "react-icons/md";
function header() {
    return (
        <header>
            <div className={style.logo}>
                <MdControlCamera size={40}/>
                <h1>Bengo</h1>
            </div>
            <div className={style.links}>
            <a className={style.linkAtivado} href="/">Home</a>
            <a className={style.link} href="/games">Games</a>
            <a className={style.link} href="/destaques">Destaques</a>
            </div>
        </header>
    );
}

export default header;
