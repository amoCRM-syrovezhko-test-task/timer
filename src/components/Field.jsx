import React from 'react';
import ButtonSet from './ButtonSet';

const Field = ({fullTime, showBtn, keyWord}) => {
  let time;
  switch(keyWord) {
    case 'h':
      time = fullTime.h;
    break
    case 'm':
      time = fullTime.m;
    break
    default:
      time = fullTime.s;
    break
  }
  console.log(time)
  if (time < 10) time = "0" +time;
  
  return (
    <div className='field'>
      {showBtn ? <ButtonSet /> : null}
      <div className="field-value">
        <h3>{time}</h3>
      </div>
      {showBtn ? <ButtonSet angle={"180deg"} /> : null}
    </div>
  );
};

export default Field;