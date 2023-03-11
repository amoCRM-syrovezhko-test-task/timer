import React from 'react';
import ButtonSet from './ButtonSet';

const Field = ({time, showBtn}) => {
  console.log("show: ", showBtn)
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