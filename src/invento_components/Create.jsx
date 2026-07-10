

import { useState, useContext } from 'react';
import {ProductContext} from "../context/ProductContext";
const Create = () => {
  const {products, setProducts } = useContext(ProductContext);
  const [data, setData] = useState({
    id: '',
    productname: '',
    qty: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    var ideeee = Math.floor(Math.random() * 10000000000);
    setData({...data, id : ideeee });

    if (!data.productname.trim() || !data.qty.trim()) {
      alert('Please fill in all fields');
      return;
    }
    // call an api endpoint that collects the data from  and give it the data
    // update your state to reflect the new product
    setProducts([data, ...products]);
    console.log('Form submitted', data);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="row text-center formy">
      <div className="col-md-6 offset-md-3">
        <h3>Add Product</h3>
      </div>
      <div className="col-md-8 offset-md-2">
        <form onSubmit={handleSubmit} className="py-3 px-5 brr">
          <div className="row my-4">
            <div className="col-md-7">
              <input
                type="text"
                name="productname"
                className="form-control"
                placeholder="product name"
                value={data.productname}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-3">
              <input
                type="number"
                name="qty"
                className="form-control"
                placeholder=" Qty"
                value={data.qty}
                onChange={handleChange}
              />
            </div>
            <div className="col-md-2 text-end">
              <input
                type="submit"
                value="Add Product"
                className="btn btn-primary mine"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create