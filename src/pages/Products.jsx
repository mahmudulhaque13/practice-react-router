import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphone", price: 200 },
];

function Products() {
  return (
    <div>
      <h2>Total Products: {products.length}</h2>

      {products.map((p) => (
        <p key={p.id}>{p.name}</p>
      ))}
    </div>
  );
}

export default Products;
