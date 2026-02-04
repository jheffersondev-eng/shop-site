import React from 'react';
import '../styles/LoadingScreen.css';

export default function LoadingScreen({ message = 'Carregando loja...' }) {
  return (
    <div className="loading-screen">
      <div className="loading-screen__content">
        <div className="loading-screen__spinner" aria-label="Carregando" />
        <span className="loading-screen__text">{message}</span>
      </div>
    </div>
  );
}
