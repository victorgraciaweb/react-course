import { useCounter } from '../hooks/useCounter';

export const MyCounterApp = () => {
  const { counter, handleAdd, handleRemove, handleClear } = useCounter(4);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <div>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleRemove}>Remove</button>
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  );
};
