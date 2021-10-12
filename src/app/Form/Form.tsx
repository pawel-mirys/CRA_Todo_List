import { useState } from 'react';

export const arr: string[] = [];

export const Form = () => {
  const [value, setValue] = useState('');
  const submitHandler = (e: any) => {
    e.preventDefault();
    setValue(e.target[0].value);
    if (e.target[0].value === '') {
      console.log('y');
    } else {
      arr.push(value);
      e.target[0].value = '';
    }
    console.log(arr);
  };

  return (
    <form onSubmit={submitHandler}>
      <input type="text" />
      <button type="submit">Submit</button>
    </form>
  );
};
