import React from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"

const ProductList = ({ products, removeFromDom }) => {
  const navigate = useNavigate()

  const deleteProduct = (productId) => {
    axios
      .delete("http://localhost:8000/api/products/" + productId)
      .then((response) => {
        removeFromDom(productId)
        navigate("/")
      })
      .catch((error) => console.error(error))
  }

  return (
    <div className="card p-0 mt-3">
      <div className="card-body">
        <h4>Products</h4>
        <div className="card bg-light">
          <div className="card-body pt-0">
            {products.map((product) => {
              return (
                <div
                  key={product._id}
                  className="row justify-content-between mt-3"
                >
                  <div className="col-auto">
                    <Link
                      to={"./products/" + product._id}
                      className="btn btn-primary"
                    >
                      {product.title}
                    </Link>
                  </div>
                  <div className="col-auto">
                    <button
                      className="btn btn-danger"
                      onClick={(e) => {
                        deleteProduct(product._id)
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductList
