import style from "../styles/games.css";
import Header from "../components/Header";
import { Link } from 'react-router';
import { jogos } from '../data/jogos';

function Games() {
  return (
    <>
      <Header />
      <h1>Games</h1>
      <div className="Items">
        {jogos.map((jogo) => {
          return (
            <>
              <Link Key={jogo.id} to="/games" className="item">
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
    </>
  );
}

export default Games;
