import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import style from './style.module.css';
import teste from '../../imgs/Okami.png';
import teste2 from '../../imgs/Carrosselmgs/farCry3.png'
import { useState } from "react";
import { Link } from 'react-router'
import { jogos } from '../../data/jogos';

import { } from 'react-icons';
export default function Carrossel3() {

  const series = [
    {
      src: teste,
      title: "Ōkami",
      preco: "R$84,00",
      genero: "Aventura",
      genero2: "Fantasia",
      descricao: "Digital"
    },
    {
      src: teste2,
      title: "Far Cry 3",
      preco: "R$129,00",
      genero: "Ação",
      genero2: "Aventura",
      descricao: "Digital",
    },
    {
      src: teste,
      title: "Jogo 3",
      preco: "R$84,00",
      genero: "Aventura",
      genero2: "Fantasia",
      descricao: "Digital",
    },
    {
      src: teste,
      title: "Jogo 4",
      preco: "R$84,00",
      genero: "Aventura",
      genero2: "Fantasia",
      descricao: "Digital",
    },
    {
      src: teste,
      title: "Jogo 5",
      preco: "R$84,00",
      genero: "Aventura",
      genero2: "Fantasia",
      descricao: "Digital",
    },
    {
      src: teste,
      title: "Jogo 6",
      preco: "R$84,00",
      genero: "Aventura",
      genero2: "Fantasia",
      descricao: "Digital",
    },
  ];

  const [indice, setIndice] = useState(0);

  function proximaImagem() {
    var novoIndice = indice + 1
    if (novoIndice >= series.length) {
      novoIndice = 0
    }
    setIndice(novoIndice)
  }
  function imagemAnterior() {
    var novoIndice = indice - 1
    if (novoIndice < 0) {
      novoIndice = series.length - 1
    }
    setIndice(novoIndice)
  }

  function ajustarindice(valor) {
    if (valor >= series.length) {
      return valor - series.length
    }
    return valor;
  }

  const item1 = series[ajustarindice(indice)]
  const item2 = series[ajustarindice(indice + 1)]
  const item3 = series[ajustarindice(indice + 2)]

  return (
    <div className={style.secaoCarrossel}>
      <h1>Populares</h1>
      <div className={style.carrossel}>
        <button onClick={imagemAnterior}>
          <IoIosArrowBack color="#4A72D8" size={40} />
        </button>
        <div className={style.carrosselItens}>
          <Link to="/games" className={style.item}>
            <div className={style.imgdoitem}>
              <img src={item1.src} alt="" />
            </div>
            <div className={style.informacaoCarrossel}>
              <div className={style.custo}>
                <h3>{item1.title}</h3><h3>{item1.preco}</h3>
              </div>
              <div className={style.descricao}>
                <div className={style.tipo}>
                  <p>{item1.genero}</p><p>•</p><p>{item1.genero2}</p>
                </div>
                <div className={style.plataforma}>
                  <p>{item1.descricao}</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/games" className={style.item}>
            <div className={style.imgdoitem}>
              <img src={item2.src} alt="" /></div>
            <div className={style.informacaoCarrossel}>
              <div className={style.custo}>
                <h3>{item2.title}</h3><h3>{item2.preco}</h3>
              </div>
              <div className={style.descricao}>
                <div className={style.tipo}>
                  <p>{item2.genero}</p><p>•</p><p>{item2.genero2}</p>
                </div>
                <div className={style.plataforma}>
                  <p>{item2.descricao}</p>
                </div>
              </div>
            </div>
          </Link>
          <Link to="/games" className={style.item}>
            <div className={style.imgdoitem}>
              <img src={item3.src} alt="" /></div>
            <div className={style.informacaoCarrossel}>
              <div className={style.custo}>
                <h3>{item3.title}</h3><h3>{item3.preco}</h3>
              </div>
              <div className={style.descricao}>
                <div className={style.tipo}>
                  <p>{item3.genero}</p><p>•</p><p>{item3.genero2}</p>
                </div>
                <div className={style.plataforma}>
                  <p>{item3.descricao}</p>
                </div>
              </div>
            </div>
          </Link>

        </div>
        <button onClick={proximaImagem}>
          <IoIosArrowForward color="#4A72D8" size={40} />
        </button>
      </div>
    </div>
  )
}