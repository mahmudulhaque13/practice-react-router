import { Link } from "react-router-dom";
import { useState } from "react";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphone", price: 200 },
];

function Products() {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search product"
        onChange={(e) => setSearch(e.target.value)}
      />

      <h3>Total Products: {filteredProducts.length}</h3>

      {filteredProducts.map((p) => (
        <p key={p.id}>
          <Link to={`/product/${p.id}`}>
            {p.name} - ${p.price}
          </Link>
        </p>
      ))}
    </div>
  );
}

export default Products;
