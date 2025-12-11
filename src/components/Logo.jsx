import React from 'react';

const Logo = ({ size = 'md', className = '' }) => {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16', 
    lg: 'w-20 h-20',
    xl: 'w-24 h-24'
  };

  return (
    <div className={`${sizes[size]} ${className}`}>
      <img
        src="/Banner.jpg"
        alt="Matthews Gondwe"
        className="w-full h-full object-cover rounded-full shadow-md"
      />
    </div>
  );
};

export default Logo;