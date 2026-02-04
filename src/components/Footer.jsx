import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-container">
          {/* Company Info */}
          <div className="footer-section">
            <h3>Porto Shop</h3>
            <p>
              Sua loja online confiável para os melhores produtos com os melhores
              preços. Compre com segurança e confiança.
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <FaFacebook />
              </a>
              <a href="#" className="social-link">
                <FaTwitter />
              </a>
              <a href="#" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" className="social-link">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul className="footer-links">
              <li>
                <a href="#home">Início</a>
              </li>
              <li>
                <a href="#products">Produtos</a>
              </li>
              <li>
                <a href="#about">Sobre Nós</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="footer-section">
            <h4>Categorias</h4>
            <ul className="footer-links">
              <li>
                <a href="#electronics">Eletrônicos</a>
              </li>
              <li>
                <a href="#fashion">Moda</a>
              </li>
              <li>
                <a href="#home-garden">Casa e Jardim</a>
              </li>
              <li>
                <a href="#sports">Esportes</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="footer-section">
            <h4>Suporte</h4>
            <ul className="footer-links">
              <li>
                <a href="#faq">FAQ</a>
              </li>
              <li>
                <a href="#shipping">Envio</a>
              </li>
              <li>
                <a href="#returns">Devoluções</a>
              </li>
              <li>
                <a href="#help">Central de Ajuda</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; 2026 Porto Shop — Todos os direitos reservados.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Política de Privacidade</a>
            <span>|</span>
            <a href="#terms">Termos de Serviço</a>
            <span>|</span>
            <a href="#cookies">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
