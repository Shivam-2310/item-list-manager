import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props} className={`text-white font-bold py-2 px-4 rounded ${props.className}`}>
      {children}
    </button>
  );
};
