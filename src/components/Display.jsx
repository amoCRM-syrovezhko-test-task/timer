import React, { useState } from 'react';
import Field from './Field';
import Spacer from './Spacer';

const Display = ({time, showBtn}) => {

  return (
    <main className='main'>
      <Field
        time={
            (time.h >= 10)
            ? time.h 
            : "0" + time.h
          }
          showBtn={showBtn} />
      <Spacer />
      <Field
        time={
            (time.m >= 10)
            ? time.m 
            : "0" + time.m
          }
          showBtn={showBtn} />
      
      <Spacer />
      <Field
        time={
            (time.s >= 10)
            ? time.s 
            : "0" + time.s
          }
          showBtn={showBtn} />
    </main>
  );
};

export default Display;