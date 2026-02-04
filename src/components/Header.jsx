import React, { useState } from 'react';
import '../styles/Header.css';
import logo from '../assets/images/porto-shop-branding.png';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    // Implementar busca
  };

  return (
    <header className="navbar-lux">
      <div className="navbar-lux-inner">
        {/* Logo minimalista */}
        <a href="/" className="navbar-lux-logo">
          <img src={logo} alt="Porto Shop" className="navbar-lux-logo-img" />
          <span className="navbar-lux-logo-text">Porto <b>Shop</b></span>
        </a>

        {/* Navegação centralizada */}
        <nav className="navbar-lux-nav">
          <a href="#lojas" className="navbar-lux-link">Lojas</a>
          <a href="#categorias" className="navbar-lux-link">Categorias</a>
          <a href="#sobre" className="navbar-lux-link">Sobre</a>
        </nav>

        {/* Busca discreta */}
        <form className="navbar-lux-search" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar marcas ou produtos..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </form>

        {/* Botão destacado */}
        <div className="navbar-lux-actions">
          <button className="navbar-lux-btn">Entrar</button>
        </div>
      </div>
    </header>
  );
}
