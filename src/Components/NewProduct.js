import React, { useState } from "react";
import { saveProduct } from "../app/context";

function NewProduct() {
  const [name, setName] = useState("");
  const [prix, setPrix] = useState(0);
  const [checked, setChecked] = useState(false);

  const handlerSaveProduct = (event) => {
    event.preventDefault();
    let product = {
      name,
      prix,
      checked,
    };
    saveProduct(product).then((resp) => {
      alert(JSON.stringify(resp.data));
    });
  };

  return (
    <>
      <div className="container p-3">
        <div className="card">
          <div className="card-body">
            <h3 className="text-center">New Product</h3>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <form onSubmit={handlerSaveProduct}>
                  <div className="mb-3">
                    <label className="form-label">Name :</label>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      className="form-control"
                    ></input>
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Price :</label>
                    <input
                      onChange={(e) => setPrix(e.target.value)}
                      value={prix}
                      className="form-control"
                    ></input>
                  </div>
                  <div class="form-check">
                    <input
                      onChange={(e) => setChecked(e.target.value)}
                      checked={checked}
                      class="form-check-input"
                      type="checkbox"
                    />
                    <label class="form-check-label" for="flexCheckChecked">
                      Checked
                    </label>
                  </div>
                  <button className="btn btn-success">Save</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewProduct;
