import data from "../db/products.json";
import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    promise.then((data) => setProducts(data));
  }, []);
  return (
    <main>
      <div>{props.greeting}</div>
      <div>
        <ItemList products={products} />
      </div>
    </main>
  );
};
