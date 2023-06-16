import {
  faCheckCircle,
  faCircle,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { checkProduct, deleteProduct, getProducts } from "../app/context";

function Products() {
  const [products, setProducts] = useState([]);

  const handlerDeleteProduct = (product) => {
    deleteProduct(product).then(resp => {
      const newProducts = products.filter((p)=> p.id !== product.id);
      setProducts(newProducts);
    })
  }

  useEffect(()=>{
    handlerGetProducts();
  },[]);

  const handlerGetProducts = () => {
   getProducts().then((resp) => {
    setProducts(resp.data);
   }).catch(err => {
    console.log(err);
   })
  }

 const handlerChecked = (product) => {
    checkProduct(product).then(resp => {
     const newProducts = products.map((p) => {
      if(p.id === product.id) {
        p.checked = !product.checked;
      }
      return p;
     })
     setProducts(newProducts);
    })
 }

  return (
    <>
      <div className="container p-3">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center">Products</h3>
          </div>
        </div>
      </div>
      <div className="card d-flex justity-contend-center p-2 container">
        <table className="table w-100 h-100 mx-auto">
          <thead className="bg-dark text-light text-center">
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Prix</td>
              <td>Checked</td>
              <td>Delete</td>
            </tr>
          </thead>
          <tbody className="text-center">
            {products.map((product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.prix}</td>
                  <td>
                    <button onClick={() => handlerChecked(product)} className="btn btn-outline-success">
                      <FontAwesomeIcon
                        icon={product.checked ? faCheckCircle : faCircle}
                      ></FontAwesomeIcon>
                    </button>
                  </td>
                  <td>
                    <button onClick={()=>handlerDeleteProduct(product)} className="btn btn-outline-danger">
                      <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Products;
