import React, { useContext } from 'react';
import { ImArrowRight } from 'react-icons/im';
import '../styles/components/main.scss';
import searchImage from '../components/Images/ImageSearch.png';
import Logo from '../components/Images/Logo.png';
import Navbar from '../components/Navbar';
import { NewContext } from '../contexts/repositoryContext';
import chatwpp from '../components/Images/chatwpp.png';
import Load from '../components/Load';

export default function Main() {
  const {
    setValueInput, submit, setClosePage, closePage, load, setLoad,
  } = useContext(NewContext);

  return (
    <section className={closePage ? 'hide' : 'main-container'}>
      <section className="navbar">
        <Navbar />
      </section>
      <section className="chatWpp">
        <img src={chatwpp} alt="doors" />
      </section>
      <section className="content">
        <img src={searchImage} alt="Search" />
        <h1>
          A FACILIDADE EM
          {' '}
          <br />
          PESQUISAR
          {' '}
          <br />
          {' '}
          PREÇOS CHEGOU
          {' '}
          <br />
          {' '}
          EM VOCÊ!
        </h1>
        <h2>
          Está com dificuldades para formar
          {' '}
          <br />
          {' '}
          seu preço?
          <span> Contate-nos</span>
        </h2>
        <div className="first-box">
          <ImArrowRight />
          <p>Identificamos que seus produtos são: Portas e Fechaduras</p>
        </div>
        <input
          type="text"
          placeholder='Pesquise por "portas" ou "fechaduras"...'
          onKeyUp={(e) => {
            setValueInput(e.target.value);
            if (e.keyCode === 13) {
              setLoad(!load);
              setTimeout(() => {
                submit();
                setClosePage(true);
                setLoad(false);
              }, [2000]);
            }
          }}
        />
      </section>
      <section className="logo">
        <img src={Logo} alt="Logo" />
      </section>
      <section className={load ? 'loadPage' : 'hide'}>
        <Load />
      </section>
    </section>
  );
}
