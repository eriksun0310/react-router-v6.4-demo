import React, { useEffect } from "react";
import { useNavigate, useRouteError } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const error = useRouteError();

  // 進入NotFound 過一秒後導向 Home頁面
  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);
  return (
    <>
      <h1>404 Not Found</h1>
      <h2>{error.error.message}</h2>
    </>
  );
};

export default NotFound;
