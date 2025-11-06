import React, { useState } from 'react';
import styles from './style.module.css';
import Disco from '../../imgs/Carrosselmgs/discoElisium.png';
import FarCry3 from '../../imgs/Carrosselmgs/farCry3.png'
import Ninja from '../../imgs/Okami.png'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";


export default function Carrossel() {
  const slides = [
        {
      marcacao: 'Aventura',marcacao2: 'RPG',
      titulo: 'Disco Elysium - The Final Cut',
      descricao:
        '',
      background: Disco,
    },
    {
      marcacao: 'Ação',marcacao2: 'Aventura',
      titulo: 'Far Cry 3',
      descricao:
        '',
      background: FarCry3,
    },
    {
      marcacao: 'Aventura',marcacao2: 'Fantasia',
      titulo: 'Ninja',
      descricao:
        '',
      background: Ninja,
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
          {/* <p>{ slides[indiceAtual].descricao}</p> */}
          <a href="/games" >
            Comprar
          </a>
        </div>
      </div>
      <div className={styles.controlesCarrossel}>
        <button className={styles.btnAnterior} onClick={(irParaAnterior)} >
          <FaChevronLeft color='#ffffffff' size={60} />
        </button>
        <button className={styles.btnProximo} onClick={irParaProximo} >
          <FaChevronRight color='#ffffffff' size={60} />
        </button>
      </div>
    </div>
  );
}
