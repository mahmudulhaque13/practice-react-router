import { Link } from "react-router-dom";

import { useState } from "react";

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Headphone" },
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

      {filteredProducts.map((p) => (
        <p key={p.id}>{p.name}</p>
      ))}
    </div>
  );
}

export default Products;
