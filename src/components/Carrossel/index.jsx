import React, { useState } from 'react';
import styles from './style.module.css';
import Disco from '../../imgs/Carrosselmgs/discoElisium.png';
import FarCry3 from '../../imgs/Carrosselmgs/farCry3.png'
import Ninja from '../../imgs/Okami.png'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";


export default function Carrossel() {
  const slides = [
    {
      marcacao: 'Aventura', marcacao2: 'RPG',
      titulo: 'Disco Elysium',
      descricao:
        'Disco Elysium é um RPG onde você interpreta um detetive que precisa investigar um assassinato enquanto tenta juntar as peças de sua própria vida.',
      background: Disco,
      preco: "R$165,00",
    },
    {
      marcacao: 'Ação', marcacao2: 'Aventura',
      titulo: 'Far Cry 3',
      descricao:
        'Disco Elysium é um RPG onde você interpreta um detetive que precisa investigar um assassinato enquanto tenta juntar as peças de sua própria vida.',
      background: FarCry3,
      preco: "R$90,00",
    },
    {
      marcacao: 'Aventura', marcacao2: 'Fantasia',
      titulo: 'Ninja',
      descricao:
        'Disco Elysium é um RPG onde você interpreta um detetive que precisa investigar um assassinato enquanto tenta juntar as peças de sua própria vida.',
      background: Ninja,
      preco: "R$75,00",
    },
  ];

  const [indiceAtual, setIndiceAtual] = useState(0);

  function irParaProximo() {
    if (indiceAtual === slides.length - 1) {
      setIndiceAtual(0);
    } else {
      setIndiceAtual(indiceAtual + 1);
    }
  }

  function irParaAnterior() {
    if (indiceAtual === 0) {
      setIndiceAtual(slides.length - 1);
    } else {
      setIndiceAtual(indiceAtual - 1);
    }
  }

  return (
    <div className={styles.carrosselContainer}>

      <div className={styles.carrosselSlide} style={{ background: `URL(${slides[indiceAtual].background}) no-repeat center / cover ` }}>
        <div className={styles.carrosselTexto}>
          <div className={styles.marcacoes}>
            <strong>{slides[indiceAtual].marcacao}</strong>
            <strong>{slides[indiceAtual].marcacao2}</strong>
          </div>
          <h2>{slides[indiceAtual].titulo}</h2>
          <p>{slides[indiceAtual].descricao}</p>
          <div className={styles.comprar}>
            <a href="/games" >Comprar</a>
            <p>{slides[indiceAtual].preco}</p>
          </div>
        </div>
      </div>
      <div className={styles.controlesCarrossel}>
        <button className={styles.btnAnterior} onClick={(irParaAnterior)} >
          <FaChevronLeft color='#4A72D8' size={30} />
        </button>
        <button className={styles.btnProximo} onClick={irParaProximo} >
          <FaChevronRight color='#4A72D8' size={30} />
        </button>
      </div>
    </div>
  );
}
