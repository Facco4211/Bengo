import style from "../styles/games.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router';
import { jogos } from '../data/jogos';
import { LuSwords } from "react-icons/lu";
import { FaExplosion } from "react-icons/fa6";

function Games() {
  return (
    <>
      <Header />
      <div className="conteudo">
        <div className="categorias">
          <h1>Categorias</h1>
          <div className="categoria"><LuSwords color="#4A72D8" size="18px"/><h2>Aventura</h2><p>12</p></div>
          <div className="categoria"><FaExplosion color="#4A72D8" size="18px"/><h2>Aventura</h2></div>
          <div className="categoria"><LuSwords color="#4A72D8" size="18px"/><h2>Aventura</h2></div>
          <div className="categoria"><LuSwords color="#4A72D8" size="18px"/><h2>Aventura</h2></div>
          <div className="categoria"><LuSwords color="#4A72D8" size="18px"/><h2>Aventura</h2></div>
          <div className="categoria"><LuSwords color="#4A72D8" size="18px"/><h2>Aventura</h2></div>
          <div className="categoria"><LuSwords color="#4A72D8" size="18px"/><h2>Aventura</h2></div>
        </div>
        <div className="Items">
          {jogos.map((jogo) => {
            return (
              <>
                <Link Key={jogo.id} to="/paginadojogo" className="item">
                  <div className="imgdoitem">
                    <img src={jogo.image} alt="" />
                  </div>
                  <div className="informacaoCarrossel">
                    <div className="custo">
                      <h3>{jogo.nome}</h3><h3>R${jogo.precoCentavos / 100}</h3>
                    </div>
                    <div className="descricao">
                      <div className="tipo">
                        {/* <p>{item1.genero}</p><p>•</p><p>{item1.genero2}</p> */}
                      </div>
                      <div className="plataforma">
                        {/* <p>{item1.descricao}</p> */}
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Games;
