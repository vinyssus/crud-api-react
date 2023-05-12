import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Products from "./Components/Products";
import NewProduct from "./Components/NewProduct";
import Navbar from "./Structure/Navbar";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/newProduct" element={<NewProduct />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
