import React, { useState, useEffect } from "react"
import ProductList from "../components/ProductList"
import ProductForm from "../components/ProductForm"
import axios from "axios"

const Manager = () => {
  const [products, setProducts] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((response) => {
        setProducts(response.data)
        setLoaded(true)
      })
      .catch((error) => console.error(error))
  }, [])

  const removeFromDom = (productId) => {
    setProducts(products.filter((p) => p._id != productId))
  }

  return (
    <div>
      <ProductForm setProducts={setProducts} products={products}></ProductForm>
      {loaded && (
        <ProductList
          removeFromDom={removeFromDom}
          products={products}
        ></ProductList>
      )}
    </div>
  )
}

export default Manager
