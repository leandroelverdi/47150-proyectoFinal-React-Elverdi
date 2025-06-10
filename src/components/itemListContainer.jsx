import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";

export const ItemListContainer = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const refCollection = id
      ? query(collection(db, "ItemCollection"), where("category", "==", id))
      : collection(db, "ItemCollection");

    getDocs(refCollection)
      .then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("No products");
        } else {
          setProducts(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center absolute inset-0">
        <div className="inline-block h-10 w-10 rounded-full border-4 border-solid border-black border-r-transparent animate-spin"></div>
      </div>
    );

  return (
    <>
      <h1 className="text-4xl font-semibold uppercase text-center mt-10 mb-20">{props.greeting}</h1>
      <div className="container-lg mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-8 mb-10">
        <ItemList products={products} />
      </div>
    </>
  );
};
