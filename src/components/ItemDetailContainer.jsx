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
        const productById = data.find((product) => product.id === parseInt(id));
        resolve(productById);
      }, 1000);
    });

    promise.then((data) => setProduct(data));
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return <ItemDetail product={product} />;
};
