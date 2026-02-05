import React, { useState } from 'react';
import '../styles/Header.css';
import logo from '../assets/images/porto-shop-branding.png';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

        {/* Menu hambúrguer (mobile) */}
        <button
          className={`navbar-lux-burger ${isMenuOpen ? 'is-open' : ''}`}
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-lux-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
        >
          <span className="navbar-lux-burger-line" />
          <span className="navbar-lux-burger-line" />
          <span className="navbar-lux-burger-line" />
        </button>

        {/* Navegação centralizada */}
        <nav
          id="navbar-lux-menu"
          className={`navbar-lux-nav ${isMenuOpen ? 'is-open' : ''}`}
        >
          <a href="#lojas" className="navbar-lux-link">Lojas</a>
          <a href="#categorias" className="navbar-lux-link">Categorias</a>
          <a href="#sobre" className="navbar-lux-link">Sobre</a>
        </nav>

        {/* Busca discreta */}
        <form className={`navbar-lux-search ${isMenuOpen ? 'is-open' : ''}`} onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Buscar marcas ou produtos..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
          />
        </form>

        {/* Botão destacado */}
        <div className={`navbar-lux-actions ${isMenuOpen ? 'is-open' : ''}`}>
          <button className="navbar-lux-btn">Entrar</button>
        </div>
      </div>
    </header>
  );
}
