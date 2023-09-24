import { useState } from "react";

export const ItemCount = ({ onAdd, stock }) => {
  const [count, setCount] = useState(1);

  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleIncreaseCount = () => {
    if (stock > count) {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div className="[&>button]:px-4">
      <button onClick={handleDecreaseCount}>-</button>
      <span>{count}</span>
      <button onClick={handleIncreaseCount}>+</button>
      <button onClick={() => onAdd(count)} className="bg-red-100 p-2">
        Agregar al carrito
      </button>
    </div>
  );
};
