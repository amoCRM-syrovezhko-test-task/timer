import React from 'react';
import ButtonSet from './ButtonSet';

const Field = ({time, showBtn, keyWord, setTime}) => {
  
  let timeRender = time[keyWord]
  if (timeRender < 10) timeRender = "0" + timeRender;
  
  return (
    <div className='field'>
      {showBtn
        ? <ButtonSet
            setTime={setTime}
            keyWord={keyWord}/>
        : null}
      <div className="field-value">
        <h3>{timeRender}</h3>
      </div>
      {showBtn
        ? <ButtonSet
            setTime={setTime}
            keyWord={keyWord}
            angle={"180deg"} />
        : null}
    </div>
  );
};

export default Field;