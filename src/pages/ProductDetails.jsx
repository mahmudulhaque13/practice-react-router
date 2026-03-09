import React from "react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Laptop", price: 1000 },
  { id: 2, name: "Phone", price: 500 },
  { id: 3, name: "Headphone", price: 200 },
];

const ProductDetails = () => {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetails;
