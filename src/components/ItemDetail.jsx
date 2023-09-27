import { useContext } from "react";
import { ItemCount } from "./ItemCount";
import { CartContext } from "../contexts/CartContext";

export const ItemDetail = ({ product }) => {
  const { addItem } = useContext(CartContext);
  const onAdd = (count) => addItem(product, count);

  return (
    <div className="relative flex justify-center inset-y-24 pb-32 mt-20">
      <img
        className="w-96 h-96 rounded-full"
        src={product.thumbnail}
        alt="Sneakers"
      />
      <div className="flex flex-col justify-between ml-10">
        <h2>Nombre: {product.name}</h2>
        <span>Marca: {product.brand}</span>
        <span>Stock: {product.stock}</span>
        <b>${product.price}</b>
        <ItemCount stock={product.stock} onAdd={onAdd} />
      </div>
    </div>
  );
};
