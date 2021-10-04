import React from 'react';

type ButtonProps = {
  name: string;
  type?: 'submit' | 'reset' | 'button';
  bgColor?: string;
  textColor?: string;
  height?: number;
  onClick?: () => void;
};

const Button = ({
  name,
  type = 'submit',
  bgColor = 'red',
  textColor = 'white',
  height = 4,
  onClick,
}: ButtonProps) => {
  return (
    <button
      type={type}
      className={`button py-${height} text-${textColor} bg-${bgColor}-600 hover:bg-${bgColor}-500 focus:bg-${bgColor}-500`}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
