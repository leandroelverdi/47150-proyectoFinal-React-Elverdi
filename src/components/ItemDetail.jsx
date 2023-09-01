import { ItemCount } from "./ItemCount";
export const ItemDetail = ({ product }) => (
  <>
    <div className="relative flex justify-center inset-y-24 pb-32">
      <img className="w-96 h-96 rounded-lg" src={product.url} alt="Sneakers" />
      <div className="flex flex-col justify-between ml-10">
        <h2>Nombre: {product.name}</h2>
        <span>Marca: {product.brand}</span>
        <span>Color: {product.color}</span>
        <span>Precio: ${product.price}</span>
        <ItemCount />
      </div>
    </div>
  </>
);
