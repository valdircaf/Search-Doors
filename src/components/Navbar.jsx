import React from 'react';
import '../styles/components/navbar.scss';
import Logo from '../Images/Logo.png';

export default function Navbar() {
  return (
    <section className="main-section">
      <img src={Logo} alt="Logo" />
    </section>
  );
}
