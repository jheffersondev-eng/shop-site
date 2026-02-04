import React from 'react';
import PropTypes from 'prop-types';
import './Badge.css';

/**
 * Componente Atom: Badge
 * Rótulo para destacar informações
 */
export const Badge = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  return (
    <span className={`badge badge-${variant} badge-${size} ${className}`}>
      {children}
    </span>
  );
};

Badge.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'success', 'warning', 'danger', 'info']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  className: PropTypes.string,
};

export default Badge;
