import { NavLink } from "react-router-dom";

export const Item = ({ product }) => (
  <div key={product.id} className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src="" alt=""></img>
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{product.name}</div>
      <p className="text-gray-700 text-base">{product.category}</p>
    </div>
    <NavLink to={`item/${product.id}`}><button>Apretame</button></NavLink>
  </div>
);
