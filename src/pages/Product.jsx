import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";

const Product = () => {
  const navigation = useNavigation();


  const products = useLoaderData();

  if(navigation.state === 'loading'){
    return <h1>Loading.....</h1>
  }


  return (
    <div>
        <h1>{products.title}</h1>
        <h3>{products.description}</h3>
        <img src={products.thumbnail} alt="" />
    </div>
  );
};

export default Product;

export const dataLoader = async ({ params }) => {
  const id = params.id;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const productsData = await res.json();
  return productsData;
};
