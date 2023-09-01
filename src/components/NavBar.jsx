import { NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";

const styleNavLink = ({ isActive }) => (isActive ? "bg-red-100" : "");

// ${
//   isIntersecting
//     ? "mt-0 w-full animate-fade"
//     : "rounded-lg mt-12 inset-x-0 mx-auto w-4/6 animate-fade-down"
// }
export const NavBar = (props) => {
  return (
    <header className="flex justify-between bg-gray-100 px-4 fixed animate-duration-500 w-4/6 rounded-lg mt-12 inset-x-0 mx-auto z-10">
      <NavLink to="/" className="flex grow basis-0 gap-2 items-center">
        <img src="/logo.png" alt="Logo" className="w-24" />
        Sneakers
      </NavLink>
      <nav className="flex items-center">
        <ul className="flex gap-4 [&>li>a]:rounded [&>li>a]:px-4 [&>li>a]:py-2">
          <li>
            <NavLink to="/" className={styleNavLink}>
              Inicio
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink to="/">Categorias</NavLink>
            <ul className="absolute hidden pt-2 group-hover:block ml-3">
              <li>
                <NavLink
                  to="/category/nike"
                  className="block px-4 py-2 hover:bg-red-100 rounded-lg"
                >
                  Nike
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/category/adidas"
                  className="block px-4 py-2 hover:bg-red-100 rounded-lg"
                >
                  Adidas
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/">Sobre Nosotros</NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};
