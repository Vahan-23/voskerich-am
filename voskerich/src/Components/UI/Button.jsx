import React from 'react';
import './Button.css';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  disabled = false, 
  loading = false,
  onClick,
  className = '',
  ...props 
}) => {
  const buttonClass = `
    btn 
    btn-${variant} 
    btn-${size} 
    ${disabled ? 'btn-disabled' : ''} 
    ${loading ? 'btn-loading' : ''} 
    ${className}
  `.trim();

  return (
    <button 
      className={buttonClass}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading && <span className="btn-spinner"></span>}
      <span className={loading ? 'btn-text-hidden' : ''}>{children}</span>
    </button>
  );
};

export default Button;