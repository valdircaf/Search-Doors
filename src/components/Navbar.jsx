import React from 'react';
// import { NavLink } from 'react-router-dom';
import Logo from './Images/LogoProject.svg';

export default function Navbar() {
  return (
    <section className="main-section">
      <img src={Logo} alt="Logo" />
    </section>
  );
}
