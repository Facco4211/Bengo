import React, { useState } from 'react';
import styles from './style.module.css';
import Disco from '../../imgs/Carrosselmgs/discoElisium.png';
import FarCry3 from '../../imgs/Carrosselmgs/farCry3.png'
import Ninja from '../../imgs/lancamentosimgs/NinjaGaiden.png'
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';

export default function Carrossel() {
  const slides = [
        {
      titulo: 'Far Cry 3',
      descricao:
        '',
      background: FarCry3,
    },
    {
      titulo: 'Disco Elysium - The Final Cut',
      descricao:
        '',
      background: Disco,
    },
    {
      titulo: 'Ninja',
      descricao:
        '',
      background: Ninja,
    },
  ];

  const [indiceAtual, setIndiceAtual ] = useState(0);

  function irParaProximo() {
    if(indiceAtual === slides.length - 1){
      setIndiceAtual(0);
    } else {
      setIndiceAtual(indiceAtual + 1);
    }
  }

  function irParaAnterior() {
    if (indiceAtual === 0){
      setIndiceAtual(slides.length - 1);
    } else {
      setIndiceAtual(indiceAtual -1);
    }
  }

  return (
    <div className={styles.carrosselContainer}>

      <div className={styles.carrosselSlide} style={{ background: `URL(${slides[indiceAtual].background}) no-repeat center / cover ` }}>
        <div className={styles.carrosselTexto}>
          <h2>{ slides[indiceAtual].titulo}</h2>
          <p>{ slides[indiceAtual].descricao}</p>
          <a href="/games" className={styles.botaoComprar}>
            Comprar
          </a>
        </div>
      </div>
      <div className={styles.controlesCarrossel}>
        <button className={styles.btnAnterior} onClick={(irParaAnterior)} >
          <FaChevronCircleLeft color='#e8e3e3' size={60} />
        </button>
        <button className={styles.btnProximo} onClick={irParaProximo} >
          <FaChevronCircleRight color='#e8e3e3' size={60} />
        </button>
      </div>
    </div>
  );
}
