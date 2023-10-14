import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const onAdd = (count) => addItem(product, count);
  return (
    <div className="absolute inset-0 flex justify-center items-center">
      <img
        className="w-96 h-96 rounded bg-cyan-200 p-1 object-cover"
        src={product.thumbnail}
        alt="Sneakers"
      />
      <div className="flex flex-col justify-between ml-10 h-2/5">
        <h2 className="text-2xl font-bold">Nombre: {product.name}</h2>
        <p className="text-xl capitalize">Marca: {product.brand}</p>
        {product.quantity === 1 ? (
          <p className="text-xl text-red-600">Ultimo producto disponible</p>
        ) : (
          <p className="text-xl">Stock de productos: {product.quantity}</p>
        )}
        <b className="text-2xl self-end">${product.price}</b>
        <ItemCount
          itemClass="self-center"
          quantity={product.quantity}
          onAdd={onAdd}
        />
      </div>
    </div>
  );
};
