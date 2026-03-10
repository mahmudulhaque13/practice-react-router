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

  const totalPrice = filteredProducts.reduce((sum, p) => sum + p.price, 0);

  return (
    <div>
      <input
        type="text"
        placeholder="Search product"
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredProducts.map((p) => (
        <p key={p.id}>
          <Link to={`/product/${p.id}`}>
            {p.name} - ${p.price}
          </Link>
        </p>
      ))}

      <h3>Total Price: ${totalPrice}</h3>
    </div>
  );
}

export default Products;
