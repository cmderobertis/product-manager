import React from "react"

const ProductList = ({ products }) => {
  return (
    <div className="card">
      {products.map((product) => {
        return (
          <a key={product._id} href={"./" + product._id}>
            <p>{product.title}</p>
          </a>
        )
      })}
    </div>
  )
}

export default ProductList
