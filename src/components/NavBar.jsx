import { NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";
import { useState, useEffect } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useScroll } from "../assets/useScroll";

export const NavBar = (props) => {
  const [brand, setBrand] = useState([]);
  const [elementRef, atTop] = useScroll();

  useEffect(() => {
    const db = getFirestore();
    const refCollection = collection(db, "ItemCollection");

    getDocs(refCollection).then((snapshot) => {
      if (snapshot.size === 0) setBrand([]);
      else {
        setBrand(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }
    });
  }, []);

  const categories = brand.map((item) => item.brand);

  const uniqueCategories = new Set(categories);

  return (
    <header
      ref={elementRef}
      className={`flex justify-between bg-gray-100 px-4 animate-duration-500 z-10 ${
        atTop
          ? "rounded-lg mt-12 inset-x-0 mx-auto w-4/6 animate-fade-down"
          : "fixed mt-0 w-full animate-fade"
      }`}
    >
      <NavLink to="/" className="flex grow basis-0 gap-2 items-center">
        <img src="/logo.png" alt="Logo" className="w-24" />
        Sneakers
      </NavLink>
      <nav className="flex items-center">
        <ul className="flex gap-4 [&>li>a]:rounded [&>li>a]:px-4 [&>li>a]:py-2">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "bg-red-100" : "")}>
              Inicio
            </NavLink>
          </li>
          <li className="relative group">
            <NavLink to="/">Categorias</NavLink>
            <ul className="absolute hidden pt-2 group-hover:block ml-3">
              {[...uniqueCategories].map((category) => (
                <li key={category}>
                  <NavLink
                    to={`/category/${category}`}
                    className="block px-4 py-2 hover:bg-red-100 rounded-lg capitalize"
                  >
                    {category}
                  </NavLink>
                </li>
              ))}
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
