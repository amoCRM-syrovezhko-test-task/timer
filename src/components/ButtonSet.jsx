import React from 'react';

const ButtonSet = ({angle, keyWord, setTime}) => {

  const handleClick = (e) => {
    if (!angle) {
        setTime(time => {
          time[keyWord]++;
          return {...time};
        })
    }
    else {
      setTime(time => {
        if (time[keyWord] > 0) {
          time[keyWord]--;

        }
        return {...time};
      })
    }
  }


  return (
    <button
      onClick={handleClick}
      className='btn btn-set'
      style={{transform: `rotate(${angle})`}}
      />
  );
};

export default ButtonSet;