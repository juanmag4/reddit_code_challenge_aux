import React from 'react';
import { ButtonProps } from '../Constants/interfaces';

export const ArrowButton = ({ title, direction, handleClick, style }: ButtonProps) => {
  const buttonClassName = `ui ${direction} labeled icon button`;
  const iconClassName = `${direction} arrow icon`;

  return (
    <button
      className={buttonClassName}
      style={style}
      onClick={() => {handleClick()}}>
      <i className={iconClassName}></i>
      {title}
    </button>
  );
};
