import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavBar = () => {
  return (
    <>
      <nav className="flex items-center justify-between w-100 h-20 px-5">
        <a href="#home" className="flex items-center gap-1"><img src="logo.png" alt="Logo" className="w-[80px]"></img>Tienda</a>
        <ul className="flex gap-4 [&>li>a]:rounded [&>li>a]:px-4 [&>li>a]:py-2">
          <li>
            <a href="#home" className="hover:bg-blue-300">Inicio</a>
          </li>
          <li>
            <a href="#products" className="hover:bg-blue-300">Productos</a>
          </li>
          <li>
            <a href="#about-us" className="hover:bg-blue-300">Sobre Nosotros</a>
          </li>
        </ul>
        <a href="#cart">
          <FontAwesomeIcon icon="fa-solid fa-cart-shopping" /> 0
        </a>
      </nav>
    </>
  );
};
