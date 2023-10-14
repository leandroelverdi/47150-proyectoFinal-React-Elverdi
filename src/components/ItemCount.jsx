import { useState } from "react";

export const ItemCount = ({ onAdd, quantity, itemClass }) => {
  const [count, setCount] = useState(1);

  const handleDecreaseCount = () => {
    if (count > 1) {
      setCount((prev) => prev - 1);
    }
  };

  const handleIncreaseCount = () => {
    if (quantity > count) {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div className={`${itemClass} flex items-center gap-8`}>
      {quantity === 1 ? (
        <button
          onClick={() => onAdd(count)}
          className="bg-cyan-200 rounded hover:bg-cyan-300 p-3 font-bold"
        >
          Agregar al carrito
        </button>
      ) : (
        <>
          <button
            className="flex items-center justify-center text-xl rounded-full h-10 w-10 bg-cyan-200 hover:bg-cyan-300"
            onClick={handleDecreaseCount}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" />
            </svg>
          </button>
          <span className="text-2xl">{count}</span>
          <button
            className="flex items-center justify-center text-xl rounded-full h-10 w-10 bg-cyan-200 hover:bg-cyan-300"
            onClick={handleIncreaseCount}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
          </button>
          <button
            onClick={() => onAdd(count)}
            className="bg-cyan-200 rounded hover:bg-cyan-300 p-3 font-bold"
          >
            Agregar al carrito
          </button>
        </>
      )}
    </div>
  );
};
