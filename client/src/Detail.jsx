import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"

const Detail = (props) => {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products/" + id)
      .then((response) => setProduct(response.data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      <div className="col">
        <div className="card">
          <div className="card-title">
            <h4>{product.title}</h4>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Detail
