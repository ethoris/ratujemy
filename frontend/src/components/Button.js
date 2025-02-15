import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, onClick, type = 'button', variant = 'primary' }) => {
  const baseStyle = "px-6 py-3 rounded-full font-semibold transition";
  const variants = {
    primary: "bg-brand-blue text-white hover:bg-blue-400",
    secondary: "bg-brand-purple text-white hover:bg-purple-400",
    outline: "border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white",
  };

  return (
    <button type={type} onClick={onClick} className={`${baseStyle} ${variants[variant]}`}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
};

export default Button;
