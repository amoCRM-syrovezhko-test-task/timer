import React from 'react';

const Button = ({name}) => {
  return (
    <button className='btn btn-control'>
      <h2>{name}</h2>
    </button>
  );
};

export default Button;