export const ItemDetail = ({ product }) => (
  <div>
    <h1>{product.name}</h1>
    <div>
      <p>{product.category}</p>
      <p>{product.stock}</p>
      <p>{product.price}</p>
    </div>
  </div>
);
