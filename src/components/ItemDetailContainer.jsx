import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    const db = getFirestore();

    const refCollection = doc(db, "ItemCollection", id);

    getDoc(refCollection)
      .then((snapshot) => {
        setProduct({ id: snapshot.id, ...snapshot.data() });
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return (
      <div className="flex items-center justify-center absolute inset-0">
        <div className="inline-block h-10 w-10 rounded-full border-4 border-solid border-black border-r-transparent animate-spin"></div>
      </div>
    );

  return <ItemDetail product={product} />;
};
