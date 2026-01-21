import { useState } from 'react';

export const useCounter = (initialValue: number = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const handleAdd = () => {
    setCounter(counter + 1);
  };

  const handleRemove = () => {
    setCounter((prevState) => prevState - 1);
  };

  const handleClear = () => {
    setCounter(initialValue);
  };

  return {
    counter,
    handleAdd,
    handleRemove,
    handleClear,
  };
};
