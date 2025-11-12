import style from "../styles/games.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router';
import { jogos } from '../data/jogos';

function Games() {
  return (
    <>
      <Header />
      {/* <div className="categorias">
        <div className="categoria">
          <img src="https://pixelz.cc/wp-content/uploads/2017/11/wolfenstein-the-new-order-blazkowicz-uhd-8k-wallpaper.jpg" alt="" />
        </div>
        <div className="categoria">
          <img src="https://4kwallpapers.com/images/wallpapers/the-elder-scrolls-v-3840x2160-14935.jpg" alt="" />
        </div>
        <div className="categoria">
          <img src="https://wallpapers.com/images/hd/overcooked-first-version-bfun3zkhfx8i2izs.jpg" alt="" />
        </div>
        <div className="categoria">
          <img src="https://i.pinimg.com/736x/9f/ba/57/9fba5706f112232d63197598835a7f02.jpg" alt="" />
        </div>
        <div className="categoria">
          <img src="https://tm.ibxk.com.br/2025/07/16/16133127711083.jpg?ims=1200x1200" alt="" />
        </div>
        <div className="categoria">
          <img src="https://www.gamewallpapers.com/wallpapers_slechte_compressie/wallpaper_dying_light_01_1920x1080.jpg" alt="" />
        </div>
      </div> */}
      <div className="conteudo">
        <div className="buscador">
          <div className="filtro"><input type="checkbox" /></div>
          <div className="buscar"><input type="text" /></div>
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
