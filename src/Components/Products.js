import React, { useState } from "react";

function Products() {
  const [products, setProducts] = useState([
    { id: 1, name: "patate", prix: 1200, checked: false },
    { id: 2, name: "tomate", prix: 2000, checked: true },
    { id: 3, name: "avocat", prix: 4000, checked: false },
  ]);

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
            </tr>
          </thead>
          <tbody className="text-center">
            {products.map((product) => {
                 return (
                    <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.prix}</td>
                    <td>{product.checked}</td>
                  </tr>
                 )}
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Products;
