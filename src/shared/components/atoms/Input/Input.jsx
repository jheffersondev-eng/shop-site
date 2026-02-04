import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

/**
 * Componente Atom: Input
 * Campo de entrada reutilizável
 */
export const Input = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  onBlur,
  onFocus,
  disabled = false,
  error = null,
  label = '',
  name,
  className = '',
  ...props
}) => {
  return (
    <div className={`input-wrapper ${error ? 'error' : ''}`}>
      {label && (
        <label htmlFor={name} className="input-label">
          {label}
        </label>
      )}
      <input
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        disabled={disabled}
        className={`input ${className}`}
        {...props}
      />
      {error && <span className="input-error">{error}</span>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
