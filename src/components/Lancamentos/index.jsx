import style from "./style.module.css";
import { Link } from "react-router"

function Lancamento() {
    return (
        <>
            <div className={style.gridPai}>
                <Link to="/games" className={style.item1} style={{ gridArea: "box1" }}>
                    <div>
                        <strong>EM ALTA</strong>
                        <h1>Ninja Gaiden 4</h1>
                    </div>
                    <p>O ninja mais memoravel dos games retorna</p>
                    <div className={style.preco}>
                        <Link to="/games">COMPRAR</Link> <p>R$ 299,00</p>
                    </div>
                </Link>
                <div className={style.item2} style={{ gridArea: "box2" }}>
                    <div className={style.texto}>
                        <h1>Kingdom Come: Deliverance II </h1>
                        <p>Um RPG de ação com uma história eletrizante e um vasto mundo aberto,
                            ambientado na Europa Medieval do século XV.</p>
                        <div className={style.preco}>
                            <Link to="/games">Comprar</Link> <p>R$ 299,00</p>
                        </div>
                    </div>
                    <Link to="/games" className={style.imageDeExemplo}>
                        <img src="https://external-preview.redd.it/kingdom-come-deliverance-ii-wallpaper-v0-dndzaHAxdDk4MGtkMZ8vGojIHeKjIyXRM67gZrDolrSmzOrWzOLoW23HEYK3.png?format=pjpg&auto=webp&s=d4146450b28996ee8d4cb906614866e5f68666b0" alt="" />
                    </Link>
                </div>
                <Link to="/games" className={style.item3} style={{ gridArea: "box3" }}>
                    <div>
                        <strong>EM ALTA</strong>
                        <h1>Clair Obscur: Expedition 33</h1>
                    </div>
                    <p>Uma aventura emocionate te espera</p>
                    <div className={style.preco}>
                        <Link to="/games">COMPRAR</Link> <p>R$ 199,00</p>
                    </div>
                </Link>
                <div className={style.item4} style={{ gridArea: "box4" }}>
                    <div className={style.texto}>
                        <h1>Borderlands 4</h1>
                        <p>Borderlands 4 é um looter shooter caótico,
                            com bilhões de armas, inimigos mortais e ação cooperativa de tirar o fôlego.
                        </p>
                        <div className={style.preco}>
                            <Link to="/games">Comprar</Link> <p>R$ 379,90</p>
                        </div>
                    </div>
                    <Link to="/games" className={style.imageDeExemplo}>
                        <img src="https://cdn.mos.cms.futurecdn.net/jBnABmNuhymqrouihDCwfA-1920-80.jpg" alt="" />
                    </Link>
                </div>
                <div className={style.item5} style={{ gridArea: "box5" }}>
                    <div className={style.texto}>
                        <h1>METAL GEAR SOLID Δ: SNAKE EATER</h1>
                        <p>Um remake do jogo METAL GEAR SOLID 3: SNAKE EATER, de 2004, 
                        com mesma história envolvente e o mesmo mundo cativante,
                        agora com gráficos novíssimos e áudio 3D, que aprimora a atmosfera de selva.</p>
                        <div className={style.preco}>
                            <Link to="/games">COMPRAR</Link><p>R$ 399,50</p>
                        </div>
                    </div>
                    <Link to="/games" className={style.imageDeExemplo}>
                        <img src="https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2025/08/metal-gear-solid-delta-snake-eater-4355762.jpg?tf=3840x" alt="" />
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Lancamento;
