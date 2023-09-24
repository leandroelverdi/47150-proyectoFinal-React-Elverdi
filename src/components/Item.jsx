import { Link } from "react-router-dom";

export const Item = ({ product }) => (
  <div key={product.id} className="flex flex-col rounded-lg shadow-lg overflow-hidden w-80 min-w-full">
    <img className="object-cover w-full h-80" src={product.thumbail} alt="Sneaker" />
    <div className="px-6 py-4">
      <div className="font-bold text-lg mb-2">{product.name}</div>
      <p className="text-gray-700 text-base">{product.brand}</p>
    </div>
    <Link to={`/item/${product.id}`} className="w-2/4 self-center text-center p-2 bg-gray-100 rounded-lg my-4">Ver Mas</Link>
  </div>
);
