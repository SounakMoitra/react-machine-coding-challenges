import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import ProductListing from "./pages/productListing";
import Product from "./pages/product";
import Breadcrumbs from "./components/Breadcrumbs";

function App() {
  return (
    <>
      <BrowserRouter>
        <h1>The Fashion Store</h1>

        <Breadcrumbs />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductListing />} />
          <Route path="/products/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
