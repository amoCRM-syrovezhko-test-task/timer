import React, { useState } from 'react';
import Field from './Field';

const Display = ({time, showBtn}) => {

  return (
    <main className='main'>
      <Field time={time.m} showBtn={showBtn} />
      <Field time={time.h} showBtn={showBtn} />
      <Field time={time.s} showBtn={showBtn} />
    </main>
  );
};

export default Display;