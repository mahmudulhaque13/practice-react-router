import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Headphone" },
];

function Products() {
  return (
    <div>
      <h1>Products</h1>

      {products.map((p) => (
        <div key={p.id}>
          <Link to={`/products/${p.id}`}>{p.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default Products;
