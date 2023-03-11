import React from 'react';
import Field from './Field';
import Spacer from './Spacer';

const Display = ({time, showBtn}) => {

  return (
    <main className='main'>
      <Field
        fullTime={time}
        keyWord={"h"}
        showBtn={showBtn} />
      <Spacer />
      <Field
        fullTime={time}
        keyWord={"m"}
        showBtn={showBtn} />
      
      <Spacer />
      <Field
        fullTime={time}
        keyWord={"s"}
        showBtn={showBtn} />
    </main>
  );
};

export default Display;