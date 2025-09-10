import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => (
  <button
    className={`px-4 py-2 rounded bg-green-700 text-white hover:bg-green-800 transition ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
