import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { x } = useParams();


  fetch(`nandkjas.com/${x}`)

  return (
    <div>
      <Link to="..">Back</Link>
      <h2>{x}</h2>
      <h1>ProductDetailsPage</h1>
    </div>
  );
};

export default ProductDetailsPage;
