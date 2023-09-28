import { Link } from "react-router-dom";
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

  const categories = brand.map((item) => item.category);

  const uniqueCategories = new Set(categories);

  return (
    <header
      ref={elementRef}
      className={`flex justify-between bg-gray-100 px-4 animate-duration-500 z-10 ${
        atTop
          ? "rounded-lg mt-12 inset-x-0 mx-auto w-4/6 animate-flip-up"
          : "fixed mt-0 w-full animate-fade"
      }`}
    >
      <Link to="/" className="flex grow basis-0 gap-2 items-center">
        <img src="/logo.png" alt="Logo" className="w-24" />
        Sneakers
      </Link>
      <nav className="flex items-center">
        <ul className="flex gap-4 [&>li>a]:rounded [&>li>a]:px-4 [&>li>a]:py-2 [&>li>a:hover]:bg-cyan-300 [&>li>a:hover]:text-white">
          <li>
            <Link to="/">
              Inicio
            </Link>
          </li>
          <li className="relative group">
            <Link to="/">Categorias</Link>
            <ul className="absolute hidden mt-1.5 group-hover:block bg-gray-100 p-4 rounded [&>li:hover]:border-cyan-300 [&>li:hover]:border-b-2">
              {[...uniqueCategories].map((category) => (
                <li key={category}>
                  <Link
                    to={`/category/${category}`}
                    className="block px-4 py-2 rounded-lg capitalize"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <Link to="/about">Sobre Nosotros</Link>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};
