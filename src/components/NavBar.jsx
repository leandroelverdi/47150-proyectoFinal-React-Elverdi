import { Link } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useScroll } from "../assets/useScroll";

export const NavBar = () => {
  const [brand, setBrand] = useState([]);
  const [elementRef, atTop] = useScroll();
  const [menuOpen, setMenuOpen] = useState(false);
  const [catMenuOpen, setCatMenuOpen] = useState(false); // <- Submenú

  useEffect(() => {
    const db = getFirestore();
    const refCollection = collection(db, "ItemCollection");
    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) setBrand([]);
      else setBrand(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  const categories = brand.map((item) => item.category);
  const uniqueCategories = Array.from(new Set(categories));

  // Función para cerrar ambos menús en mobile tras selección
  const closeMenus = () => {
    setMenuOpen(false);
    setCatMenuOpen(false);
  };

  return (
    <header
      ref={elementRef}
      className={`bg-gray-100 z-10 px-2 sm:px-4 flex items-center justify-between h-20
    ${atTop ? "rounded-lg mt-6 sm:mt-12 animate-flip-up w-5/6 mx-auto"
          : "fixed top-0 left-0 right-0 animate-fade"}
  `}
    >
      {/* Hamburguesa + Logo */}
      <div className="flex items-center flex-shrink-0">
        {/* Hamburger */}
        <button
          className="flex flex-col items-center justify-center h-8 w-8 mr-2 sm:hidden"
          onClick={() => {
            setMenuOpen((open) => !open);
            setCatMenuOpen(false);
          }}
          aria-label="Abrir menú"
        >
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black mb-1"></span>
          <span className="block w-6 h-0.5 bg-black"></span>
        </button>
        {/* Logo */}
        <Link to="/" className="flex gap-2 items-center">
          <img src="/logo.png" alt="Logo" className="w-14 sm:w-24" />
          <span className="font-bold text-lg sm:text-2xl">Sneakers</span>
        </Link>
      </div>

      {/* Menú principal */}
      <nav
        className={`
          ${menuOpen ? "block absolute top-20 left-0 right-0 bg-gray-100 border-b z-20" : "hidden"}
          sm:static sm:block sm:bg-transparent sm:border-0
        `}
      >
        <ul className="flex flex-col sm:flex-row gap-2 sm:gap-4 p-4 sm:px-0 [&>li>a]:rounded [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a:hover]:bg-cyan-300 [&>li>a:hover]:text-white">
          <li>
            <Link to="/" onClick={closeMenus}>
              Inicio
            </Link>
          </li>
          {/* Categorias */}
          <li className="relative group w-full sm:w-auto">
            {/* MOBILE: click para abrir submenú */}
            <Link
              to="#"
              className="w-full text-center sm:hidden px-4 py-2"
              onClick={() => setCatMenuOpen((open) => !open)}
            >
              Categorias
            </Link>
            {/* DESKTOP: hover para abrir submenú */}
            <Link
              to="#"
              className="hidden sm:inline px-4 py-2"
              tabIndex={-1}
              onClick={(e) => e.preventDefault()}
            >
              Categorias
            </Link>
            {/* Submenú mobile */}
            <ul
              className={`sm:hidden flex-col transition-all duration-200 overflow-hidden ${catMenuOpen ? "max-h-96" : "max-h-0"
                }`}
            >
              {uniqueCategories.map((category) => (
                <li key={category}>
                  <Link
                    to={`/category/${category}`}
                    className="block px-8 py-2 capitalize"
                    onClick={closeMenus}
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Submenú desktop */}
            <ul className="hidden sm:absolute sm:mt-1.5 sm:group-hover:block bg-gray-100 p-4 rounded [&>li:hover]:border-cyan-300 [&>li:hover]:border-b-2 z-10">
              {uniqueCategories.map((category) => (
                <li key={category}>
                  <Link
                    to={`/category/${category}`}
                    className="block px-4 py-2 rounded-lg capitalize"
                    onClick={closeMenus}
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/about" onClick={closeMenus}>
              Sobre Nosotros
            </Link>
          </li>
        </ul>
      </nav>

      {/* Carrito siempre a la derecha */}
      <div className="flex-shrink-0">
        <CartWidget />
      </div>
    </header>
  );
};