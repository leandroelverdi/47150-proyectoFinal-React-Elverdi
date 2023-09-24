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

  const { clear, items, removeItem } = useContext(CartContext);

  const total = () =>
    items.reduce(
      (acumulador, valorActual) =>
        acumulador + valorActual.quantity * valorActual.price,
      0
    );

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
      <Link to="/" className="rounded-full p-4 bg-gray-100">¿Vamos de compras?</Link>
    </div>
  ) : (
    <>
      <table className="table-fixed mt-40">
        <thead>
          <tr>
            <th>imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  className="w-20 h-20 rounded-full object-cover"
                  src={item.thumbail}
                  alt="Thumbail"
                />
              </td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>
                <button onClick={() => removeItem(item.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td>{total()}</td>
          </tr>
        </tfoot>
      </table>

      <h2>Ingresar datos de usuario</h2>
      <form>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formValues.name}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          onChange={handleChange}
          value={formValues.email}
          required
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          onChange={handleChange}
          value={formValues.phone}
          required
        />
      </form>
      <button onClick={sendOrder}>Comprar</button>
    </>
  );
};
