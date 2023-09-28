import { Link } from "react-router-dom";

export const Item = ({ product }) => (
  <div key={product.id} className="flex flex-col rounded-lg overflow-hidden w-80 min-w-full shadow-lg shadow-slate-400 hover:scale-105">
    <img className="object-cover w-full h-80" src={product.thumbnail} alt="Sneaker" />
    <div className="px-6 py-4 h-full">
      <div className="font-bold text-lg mb-2">{product.name}</div>
      <p className="text-gray-700 text-base">{product.brand}</p>
    </div>
    <Link to={`/item/${product.id}`} className="w-2/4 self-center font-bold text-center p-2 bg-cyan-300 rounded-lg my-4">Ver Mas</Link>
  </div>
);
