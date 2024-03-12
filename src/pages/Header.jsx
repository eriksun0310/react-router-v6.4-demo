import React from "react";
import { Link, Outlet } from "react-router-dom";
const Header = () => {
  return (
    <>
      <nav>
        <Link to="/" replace>
          Home
        </Link>{" "}
        |
        <Link to="/products" replace state={{ name: "yu yu" }}>
          Products
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Header;
