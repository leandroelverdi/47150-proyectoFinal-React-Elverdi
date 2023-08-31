import { useState, useEffect } from "react";

import data from "../db/products.json";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data[0]), 2000);
    });

    promise.then((data) => setProduct(data));
  }, []);

  if (!product) return <div>Loading...</div>

  return (
    <main>
      <h1>Detalles</h1>
      <ItemDetail product={product} />
    </main>
  );
};
