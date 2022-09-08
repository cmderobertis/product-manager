import React, { useState, useEffect } from "react"
import ProductList from "./ProductList"
import ProductForm from "./ProductForm"
import axios from "axios"

const Manager = () => {
  const [products, setProducts] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    axios.get("http://localhost:8000/api/products").then((response) => {
      setProducts(response.data)
      setLoaded(true)
    })
  }, [])

  return (
    <div>
      <ProductForm setProducts={setProducts}></ProductForm>
      {loaded && <ProductList products={products}></ProductList>}
    </div>
  )
}

export default Manager
