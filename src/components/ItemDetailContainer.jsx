import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import data from "../db/products.json";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const productById = data.find((product) => product.id === id);
        resolve(productById);
      }, 2000);
    });

    promise.then((data) => setProduct(data));
  }, []);

  if (!product) return <div>Loading...</div>;

  return (
    <main>
      <h1>Detalles</h1>
      <ItemDetail product={product} />
    </main>
  );
};
