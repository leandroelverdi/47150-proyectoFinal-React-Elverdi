import { useState, useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { getFirestore, addDoc, collection } from "firebase/firestore";
import { Link } from "react-router-dom";

export const Cart = () => {
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const { clear, items, removeItem, totalWidget } = useContext(CartContext);

  const total = () =>
    items
      .reduce(
        (acumulador, valorActual) =>
          acumulador + valorActual.quantity * valorActual.price,
        0
      )
      .toFixed(2);

  const handleChange = (ev) => {
    setFormValues((prev) => ({
      ...prev,
      [ev.target.name]: ev.target.value,
    }));
  };

  const sendOrder = () => {
    const order = {
      buyer: formValues,
      items,
      total: total(),
    };

    const db = getFirestore();
    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order).then(({ id }) => {
      if (id) {
        setFormValues({
          name: "",
          phone: "",
          email: "",
        });
        clear();
        alert("Su orden: " + id + " Ha sido completada!");
      }
    });
  };

  return items.length === 0 ? (
    <div className="flex flex-col items-center justify-center inset-0 absolute gap-4">
      <img className="w-72 mb-10" src="images/emptyCart.png" alt="Cart" />
      <p className="text-xl font-bold">Su carrito se encuentra vacio</p>
      <Link to="/" className="rounded-full p-4 bg-gray-100">
        ¿Vamos de compras?
      </Link>
    </div>
  ) : (
    <>
      <h2 className="text-4xl font-semibold uppercase text-center mt-10 mb-20">
        Carrito
      </h2>
      <div className="grid grid-cols-3 w-5/6 mx-auto gap-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col w-full items-center bg-gray-100 rounded mx-4 mt-4 p-4"
          >
            <img
              className="w-20 h-20 rounded-full object-cover"
              src={item.thumbnail}
              alt="Sneaker"
            />
            <h3 className="text-xl">{item.name}</h3>
            <div className="flex flex-col">
              <p className="font-bold">${item.price}</p>
              <span>Cantidad: {item.quantity}</span>
            </div>
            <button
              className="bg-cyan-200 p-2 rounded w-1/2"
              onClick={() => removeItem(item.id)}
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
      <div className="flex flex-col w-1/2 items-center mx-auto gap-4 my-8">
        <b className="font-bold">Total: ${total()}</b>
        <span className="font-bold">Total de productos: {totalWidget}</span>
        <button
          className="bg-cyan-100 h-12 w-1/2 mx-auto hover:bg-cyan-200"
          onClick={() => clear()}
        >
          Vaciar carrito
        </button>
      </div>
      <div className="bg-gray-200 w-2/4 mx-auto rounded p-6 flex flex-col items-center mb-10">
        <h2 className="text-2xl font-bold text-center underline">
          Ingresar datos de usuario
        </h2>
        <form className="flex flex-col gap-6 p-6 [&>input]:bg-slate-100 [&>input]:text-black [&>input]:outline-none [&>input]:px-2 [&>input]:bg-transparent [&>input]:border-b [&>input]:border-zinc-400 w-4/6">
          <input
            className="placeholder:text-black placeholder:font-bold focus:placeholder:text-zinc-600"
            type="text"
            name="name"
            placeholder="Nombre:"
            onChange={handleChange}
            value={formValues.name}
            required
          />

          <input
            className="placeholder:text-black placeholder:font-bold focus:placeholder:text-zinc-600"
            type="email"
            name="email"
            placeholder="Correo:"
            onChange={handleChange}
            value={formValues.email}
            required
          />

          <input
            className="placeholder:text-black placeholder:font-bold focus:placeholder:text-zinc-600"
            type="text"
            name="phone"
            placeholder="Celular:"
            onChange={handleChange}
            value={formValues.phone}
            required
          />
        </form>
        <button
          className="bg-cyan-200 w-1/3 h-12 rounded hover:bg-cyan-300 font-semibold"
          onClick={sendOrder}
        >
          Comprar
        </button>
      </div>
    </>
  );
};
