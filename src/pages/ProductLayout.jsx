import React from "react";
import { Link, Outlet } from "react-router-dom";

const ProductLayout = () => {
  return (
    <>
      <nav>
        <span>
          <Link to="/products/1">Product 1</Link>
        </span>
        |
        <span>
          <Link to="/products/2">Product 2</Link>
        </span>
        |
        <span>
          <Link to="/products/3">Product 3</Link>
        </span>
        |
        <span>
          <Link to="/products/features">Product Features</Link>
        </span>
      </nav>
      <Outlet context={{ name: "yu" }} />
    </>
  );
};

export default ProductLayout;
