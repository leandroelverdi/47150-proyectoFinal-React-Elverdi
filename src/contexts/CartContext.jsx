import { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (product, quantity) => {
    console.log(product);
    const alreadyExists = items.some((item) => item.id === product.id);

    if (!alreadyExists) {
      setItems((prev) => [...prev, { ...product, quantity }]);
    } else {
      const actualizarProductos = items.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            quantity: item.quantity + quantity,
          };
        } else return item;
      });
      setItems(actualizarProductos);
    }
    Swal.fire({
      toast: true,
      icon: "success",
      position: "bottom-end",
      title: `Se agregó ${product.name} a su carrito`,
      showConfirmButton: false,
      timer: 1300,
      timerProgressBar: true
    });
  };

  const totalWidget = items.reduce((act, val) => act + val.quantity, 0);

  const removeItem = (id) => {
    const itemsFiltered = items.filter((item) => item.id !== id);
    setItems(itemsFiltered);
  };

  const clear = () => setItems([]);

  return (
    <CartContext.Provider
      value={{ addItem, items, removeItem, clear, totalWidget }}
    >
      {children}
    </CartContext.Provider>
  );
};
