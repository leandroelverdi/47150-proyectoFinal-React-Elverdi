import Cart from "../assets/cart.png";

export const CartWidget = () => (
  <div className="flex items-center gap-2">
    <img src={Cart} alt="Cart" className="w-[25px] h-[25px]" /> <span>0</span>
  </div>
);
