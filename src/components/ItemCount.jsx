import { useState } from "react";

const stock = 4;

export const ItemCount = () => {
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

  const onAdd = ()=> {
    alert(count);
  }

  return (
    <div className="[&>span]:px-4">
      <span onClick={handleDecreaseCount}>-</span>
      <span>{count}</span>
      <span onClick={handleIncreaseCount}>+</span>
      <button onClick={onAdd} className="bg-red-100 p-2">
        Agregar al carrito
      </button>
    </div>
  );
};
