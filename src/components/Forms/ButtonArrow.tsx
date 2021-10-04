import React from 'react';
import { FaAngleRight } from 'react-icons/fa';

type ButtonArrowProps = {
  name: string;
  bgColor?: string;
  textColor?: string;
  height?: number;
  handleClick?: () => void;
};

const ButtonArrow = ({
  name,
  bgColor = 'red',
  textColor = 'white',
  height = 4,
  handleClick,
}: ButtonArrowProps) => {
  return (
    <button
      className={`button py-${height} text-${textColor} bg-${bgColor}-600 hover:bg-${bgColor}-500 focus:bg-${bgColor}-500 `}
      onClick={handleClick}
    >
      {name}
      <div className="button-icon">
        <FaAngleRight />
      </div>
    </button>
  );
};

export default ButtonArrow;
