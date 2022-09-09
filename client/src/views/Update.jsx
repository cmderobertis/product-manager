import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"
import ProductForm from "../components/ProductForm"
import DeleteButton from "../components/DeleteButton"

const Update = (props) => {
  const [product, setProduct] = useState()
  const [loaded, setLoaded] = useState(false)
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/" + id).then((response) => {
      setProduct(response.data)
      setLoaded(true)
    })
  }, [])

  const updateProduct = (product) => {
    axios
      .put("http://localhost:8000/api/products/" + id, product)
      .then((response) => {
        console.log(response)
        navigate("/")
      })
  }

  return (
    <div>
      {loaded && (
        <>
          <ProductForm
            onSubmitProp={updateProduct}
            initialTitle={product.title}
            initialPrice={product.price}
            initialDescription={product.description}
            heading="Update Product"
          />
          <p></p>
          <DeleteButton
            personId={product._id}
            successCallback={() => navigate("/")}
          />
        </>
      )}
    </div>
  )
}

export default Update
