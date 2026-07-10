
import {useContext} from "react"
import { ProductContext } from "../context/ProductContext"
// to consume what is inside a provider
// 1. import a hook: const{} =   useContext(whichcontext)
const Header = () => {
    const{products} = useContext(ProductContext);

  return (
        <div className="row header">
          <div className="col text-center">
            <h1 className="mb-3">Product Inventory</h1>
            <button type="button" className="btn btn-primary">
              Count <span className="badge mine"> {products.length} </span>
            </button>
          </div>
        </div>
  )
}

export default Header