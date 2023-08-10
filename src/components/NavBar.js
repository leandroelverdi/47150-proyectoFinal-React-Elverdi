import cart from "../assets/cart.png";

export const NavBar = () => {
  return (
    <>
      <header className="flex justify-between px-5">
        <a href="#home" className="flex items-center gap-1">
          <img src="logo.png" alt="Logo" className="w-[80px]"></img>Tienda
        </a>
        <nav className="flex items-center justify-between w-100 h-20">
          <ul className="flex gap-4 [&>li>a]:rounded [&>li>a]:px-4 [&>li>a]:py-2">
            <li>
              <a href="#home" className="hover:bg-blue-300">
                Inicio
              </a>
            </li>
            <li>
              <a href="#products" className="hover:bg-blue-300">
                Productos
              </a>
            </li>
            <li>
              <a href="#about-us" className="hover:bg-blue-300">
                Sobre Nosotros
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center">
          <img src={cart} alt="Cart" className="w-[25px] h-[25px]" /> 0
        </div>
      </header>
    </>
  );
};
