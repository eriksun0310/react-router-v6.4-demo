import { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import "./App.css";
import Header from "./pages/Header";
import Home from "./pages/Home";
import ProductLayout from "./pages/ProductLayout";
import Product, { dataLoader as ProductDataLoader } from "./pages/Product";
import Products, { dataLoader as ProductsDataLoader } from "./pages/Products";
import NotFound from "./pages/NotFound";
/*
loader: 讓載入products 畫面時, 去執行打api
*/
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Header />} errorElement={<NotFound />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<ProductLayout />}>
          <Route index element={<Products />} loader={ProductsDataLoader} />
          <Route path=":id" element={<Product />} loader={ProductDataLoader} />
        </Route>
      </Route>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
