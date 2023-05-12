import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [currentRoute, setCurrentRoute] = useState();
  useEffect(()=>{
    const path = window.location.pathname;
    setCurrentRoute(path.slice(1,path.length))
  })

  return (
    <nav className="nav bg-dark text-light d-flex">
      <ul className="d-flex list-unstyled w-100 h-100">
        <li>
          <Link
          onClick={() => setCurrentRoute("/")}
            className={
              currentRoute == ""
                ? "btn btn-info mt-3 ms-2"
                : "btn btn-secondary mt-3 ms-2"
            }
            to={"/"}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
          onClick={() => setCurrentRoute("products")}
            className={
              currentRoute == "products"
                ? "btn btn-info mt-3 ms-2"
                : "btn btn-secondary mt-3 ms-2"
            }
            to={"/products"}
          >
            Products
          </Link>
        </li>
        <li>
          <Link
          onClick={() => setCurrentRoute('newProduct')}
            className={
              currentRoute == "newProduct"
                ? "btn btn-info mt-3 ms-2"
                : "btn btn-secondary mt-3 ms-2"
            }
            to={"/newProduct"}
          >
            New Product
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
