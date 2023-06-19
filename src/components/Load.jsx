import React from 'react';
import Logo from './Images/ImageSearch.png';
import '../styles/components/load.scss';

export default function Load() {
  return (
    <section className="loadPage">
      <img src={Logo} alt="Logo" />
      <p>Carregando...</p>
    </section>
  );
}
