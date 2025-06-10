import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const onAdd = (count) => addItem(product, count);
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 my-8 md:m-auto">
      <img
        className="w-80 h-80 md:w-96 md:h-96 rounded-lg bg-cyan-200 p-2 object-cover border-1 border-cyan-200 shadow-lg"
        src={product.thumbnail}
        alt="Sneakers"
      />
      <div className="flex flex-col justify-between w-full gap-4 mt-8 md:ml-8">
        <h2 className="text-2xl font-bold">Nombre: {product.name}</h2>
        <p className="text-xl capitalize">Marca: {product.brand}</p>
        {product.quantity === 1 ? (
          <p className="text-xl text-red-600">Ultimo producto disponible</p>
        ) : (
          <p className="text-xl">Stock de productos: {product.quantity}</p>
        )}
        <b className="text-2xl">${product.price}</b>
        <ItemCount
          itemClass=""
          quantity={product.quantity}
          onAdd={onAdd}
        />
      </div>
    </div>
  );
};
