import React, { useContext } from 'react';
import { IoArrowForwardCircle } from 'react-icons/io5';
import { GoAlert } from 'react-icons/go';
import Navbar from '../components/Navbar';
import '../styles/components/main.scss';
import Image from '../Images/photo-1600368126026-2e996e686f92 1.png';
import { NewContext } from '../contexts/repositoryContext';

export default function Main() {
  const {
    submit, handleInputValue, isAvailable, dragScreen,
  } = useContext(NewContext);

  return (

    <section className="container">
      <section className="main">
        <Navbar />

        <section className="main-title">
          <h1>
            os melhores produtos com os melhores
            <span> preços</span>
            !
          </h1>
        </section>

        <section className="main-btn-paragraph">
          <div className="btn-search">
            <input type="text" className="input" placeholder="Digite o Produto..." onKeyUp={handleInputValue} />
            <button
              type="button"
              aria-label="Botão de pesquisar"
              className={isAvailable ? 'activeButton' : 'second-button'}
              onClick={() => {
                submit();
                dragScreen();
              }}
            >
              <IoArrowForwardCircle />

            </button>

          </div>

          <section className={isAvailable ? 'hide' : 'isAvailable'}>
            <p>
              <GoAlert />
              <br />
              Tente novamente com &quot;Portas&quot;
              ou &quot;Fechaduras&quot;.
            </p>
          </section>

          <div className={isAvailable ? 'paragraph' : 'hide'}>
            {/* eslint-disable-next-line max-len */}
            <p>Você pode pesquisar por &quot;Portas&quot; ou &quot;Fechaduras&quot; </p>
          </div>

          <section className="animation">
            <div />
            <div />
            <div />
            <div />
          </section>
        </section>

      </section>
      <aside className="image">
        <img src={Image} alt="Imagem de uma porta" />
      </aside>

    </section>

  );
}
