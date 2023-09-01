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
      setTimeout(() => resolve(data), 1000);
    });

    promise.then((data) => {
      if (!id) {
        setProducts(data);
      } else {
        const productsFiltered = data.filter(
          (product) => product.brand === id
        );
        setProducts(productsFiltered);
      }
    });
  }, [id]);

  return (
    <>
      <h1 className="text-6xl text-center my-20">{props.greeting}</h1>
      <div className="container mx-auto grid grid-cols-3 justify-items-center gap-8">
        <ItemList products={products} />
      </div>
    </>
  );
};
