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
    <header
      ref={props.elementRef}
      className={
        "flex justify-between bg-white px-4 fixed animate-duration-500 w-4/6 rounded-lg mt-12 inset-x-0 mx-auto"
      }
    >
      <NavLink to="/" className="flex grow basis-0 gap-2 items-center">
        <img src="logo.png" alt="Logo" className="w-[80px]"></img>
        DulcineaCakes
      </NavLink>
      <nav className="hidden xl:flex items-center">
        <ul className="flex gap-4 [&>li>a]:rounded [&>li>a]:px-4 [&>li>a]:py-2">
          <li>
            <NavLink to="/" className={styleNavLink}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/:1" className={styleNavLink}>
              Productos
            </NavLink>
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
