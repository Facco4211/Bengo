import style from "./style.module.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


function Lancamento() {
    return (
        <>
            <div className={style.gridPai}>
                <a href="/games" className={style.item1} style={{ gridArea: "box1" }}>
                    <div>
                        <strong>EM ALTA</strong>
                        <h1>Ninja Gaiden 4</h1>
                    </div>
                    <p>O ninja mais memoravel retorna</p>
                    <div className={style.preco}>
                        <a href="/games">COMPRAR</a> <p>R$ 299,00</p>
                    </div>
                </a>
                <div className={style.item2} style={{ gridArea: "box2" }}>
                    <div className={style.texto}>
                        <h1>Kingdom Come: Deliverance II </h1>
                        <p>Um RPG de ação com uma história eletrizante e um vasto mundo aberto,
                            ambientado na Europa Medieval do século XV.</p>
                        <div className={style.preco}>
                            <a href="/games">Comprar</a> <p>R$ 299,00</p>
                        </div>
                    </div>
                    <a href="/games" className={style.imageDeExemplo}>
                        <img src="https://external-preview.redd.it/kingdom-come-deliverance-ii-wallpaper-v0-dndzaHAxdDk4MGtkMZ8vGojIHeKjIyXRM67gZrDolrSmzOrWzOLoW23HEYK3.png?format=pjpg&auto=webp&s=d4146450b28996ee8d4cb906614866e5f68666b0" alt="" />
                    </a>
                </div>
                <a href="/games" className={style.item3} style={{ gridArea: "box3" }}>
                    <div>
                        <strong>EM ALTA</strong>
                        <h1>Clair Obscur: Expedition 33</h1>
                    </div>
                    <p>Uma aventura emocionate te espera</p>
                    <div className={style.preco}>
                        <a href="/games">COMPRAR</a> <p>R$ 199,00</p>
                    </div>
                </a>
                <div className={style.item4} style={{ gridArea: "box4" }}>
                    <div className={style.texto}>
                        <h1>Borderlands 4</h1>
                        <p>Borderlands 4 é um looter shooter caótico,
                            com bilhões de armas, inimigos mortais e ação cooperativa de tirar o fôlego.
                        </p>
                        <div className={style.preco}>
                            <a href="/games">Comprar</a> <p>R$ 379,90</p>
                        </div>
                    </div>
                    <a href="/games" className={style.imageDeExemplo}>
                        <img src="https://cdn.mos.cms.futurecdn.net/jBnABmNuhymqrouihDCwfA-1920-80.jpg" alt="" />
                    </a>
                </div>
                <div className={style.item5} style={{ gridArea: "box5" }}>

                </div>
            </div>
        </>
    );
}

export default Lancamento;
