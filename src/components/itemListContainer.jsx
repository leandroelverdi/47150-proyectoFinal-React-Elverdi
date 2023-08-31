import data from "../db/products.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";

export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 2000);
    });

    promise.then((data) => {
      if(!id) {
        setProducts(data);
      } else {
        const productsFiltered = data.filter(product => product.category === id);
        setProducts(productsFiltered);
      }
    });
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
