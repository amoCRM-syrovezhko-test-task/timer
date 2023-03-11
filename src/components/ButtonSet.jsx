import React from 'react';

const ButtonSet = ({angle}) => {
  return (
    <button
      className='btn btn-set'
      style={{transform: `rotate(${angle})`}}
      />
  );
};

export default ButtonSet;