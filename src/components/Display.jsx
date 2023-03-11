import React from 'react';
import Field from './Field';
import Spacer from './Spacer';

const Display = ({time, showBtn, setTime}) => {

  return (
    <main className='main'>
      <Field
        time={time}
        setTime={setTime}
        keyWord={"h"}
        showBtn={showBtn} />
      <Spacer />
      <Field
        time={time}
        setTime={setTime}
        keyWord={"m"}
        showBtn={showBtn} />
      
      <Spacer />
      <Field
        time={time}
        setTime={setTime}
        keyWord={"s"}
        showBtn={showBtn} />
    </main>
  );
};

export default Display;