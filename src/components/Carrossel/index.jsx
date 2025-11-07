import React, { useState } from 'react';
import styles from './style.module.css';
import Disco from '../../imgs/Carrosselmgs/discoElisium.png';
import FarCry3 from '../../imgs/Carrosselmgs/farCry3.png';
import Ninja from '../../imgs/Okami.png';
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
      titulo: 'Battlefield 6',
      descricao:
        'Disco Elysium é um RPG onde você interpreta um detetive que precisa investigar um assassinato enquanto tenta juntar as peças de sua própria vida.',
      background: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/af7dfb2d-8cc1-45ab-9bab-6b0d0c655e58/dk7o37s-40bc1e09-2fdb-4d31-b2e4-cec3733fd211.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi9hZjdkZmIyZC04Y2MxLTQ1YWItOWJhYi02YjBkMGM2NTVlNTgvZGs3bzM3cy00MGJjMWUwOS0yZmRiLTRkMzEtYjJlNC1jZWMzNzMzZmQyMTEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.yuIpZ7j7iBbEtmmwjtLJ9pLUl-0GfbDQRgsZqfa61tc",
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
  const [animar, setAnimar] = useState(false);

  function trocarSlide(novoIndice) {
    setAnimar(true);

    // espera a animação de saída (0.5s), depois troca o slide
    setTimeout(() => {
      setIndiceAtual(novoIndice);
      setAnimar(false);
    }, 0);
  }

  function irParaProximo() {
    const novoIndice = (indiceAtual + 1) % slides.length;
    trocarSlide(novoIndice);
  }

  function irParaAnterior() {
    const novoIndice = (indiceAtual - 1 + slides.length) % slides.length;
    trocarSlide(novoIndice);
  }

  const slide = slides[indiceAtual];

  return (
    <div className={styles.carrosselContainer}>
      <div
        className={styles.carrosselSlide }
        style={{
          background: `url(${slide.background}) no-repeat center / cover`
        }}
      >
        <div className={`${styles.carrosselTexto} ${animar ? styles.textoSaindo : styles.textoEntrando}`}>
          <div className={styles.marcacoes}>
            <strong>{slide.marcacao}</strong>
            <strong>{slide.marcacao2}</strong>
          </div>
          <h2>{slide.titulo}</h2>
          <p>{slide.descricao}</p>
          <div className={styles.comprar}>
            <a href="/games">Comprar</a>
            <p>{slide.preco}</p>
          </div>
        </div>
      </div>

      <div className={styles.controlesCarrossel}>
        <button className={styles.btnAnterior} onClick={irParaAnterior}>
          <FaChevronLeft color='#4A72D8' size={30} />
        </button>
        <button className={styles.btnProximo} onClick={irParaProximo}>
          <FaChevronRight color='#4A72D8' size={30} />
        </button>
      </div>
    </div>
  );
}