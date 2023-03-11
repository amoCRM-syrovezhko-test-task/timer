import React from 'react';

const Button = ({name, click}) => {
  return (
    <button
      className='btn btn-control'
      onClick={click}
    >
      <h2>{name}</h2>
    </button>
  );
};

export default Button;