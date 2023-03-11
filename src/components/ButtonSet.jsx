import React from 'react';

const ButtonSet = ({angle, keyWord, setTime}) => {

  const handleClick = (e) => {
    if (!angle) {
      
        setTime(time => {
          if((time.s < 59 && keyWord === "s") || (time.m < 59 && keyWord === "m")) {
            time[keyWord]++;
            return {...time};
          } else if(time.h < 23 && keyWord === "h"){
            time[keyWord]++;
            return {...time};
          }
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