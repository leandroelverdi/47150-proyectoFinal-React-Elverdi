export const ItemDetail = ({ product }) => (
  <div>
    <h1>{product.name}</h1>
    <p>{product.categoria}</p>
    <div>{product.stock}</div>
  </div>
);
