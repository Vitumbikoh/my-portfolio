import React from 'react';

const Logo = ({ size = 'md', className = '', variant = 'default' }) => {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16', 
    lg: 'w-20 h-20',
    xl: 'w-24 h-24'
  };

  const variants = {
    default: 'rounded-full shadow-md',
    favicon: 'rounded-lg',
    square: 'rounded-md shadow-sm'
  };

  return (
    <div className={`${sizes[size]} ${className}`}>
      <img
        src="/Banner.jpg"
        alt="Matthews Gondwe Logo"
        className={`w-full h-full object-cover ${variants[variant]}`}
      />
    </div>
  );
};

export default Logo;