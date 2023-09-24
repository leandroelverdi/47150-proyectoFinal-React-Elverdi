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

  if (loading) return <div>Loading...</div>;

  return <ItemDetail product={product} />;
};
