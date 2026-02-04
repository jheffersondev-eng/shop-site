import React from 'react';
import PropTypes from 'prop-types';
import './Spinner.css';

/**
 * Componente Atom: Spinner
 * Indicador de carregamento
 */
export const Spinner = ({ size = 'md', className = '' }) => {
  return <div className={`spinner spinner-${size} ${className}`} />;
};

Spinner.propTypes = {
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default Spinner;
