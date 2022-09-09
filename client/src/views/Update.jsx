import React, { useEffect, useState } from "react"
import axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

const Update = (props) => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:8000/api/products/" + id).then((response) => {
      setTitle(response.data.title)
      setDescription(response.data.description)
      setPrice(response.data.price)
    })
  }, [])

  const onSubmitHandler = (e) => {
    e.preventDefault()
    axios
      .put("http://localhost:8000/api/products/" + id, {
        title,
        price,
        description,
      })
      .then((response) => {
        console.log(response)
        navigate("/products/" + id)
      })
      .catch((err) => console.error(err))
  }

  return (
    <div className="card">
      <div className="card-body">
        <h3>Update Product</h3>
        <form onSubmit={onSubmitHandler}>
          <p>
            <label htmlFor="title">Title</label>
            <br />
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
          </p>
          <p>
            <label htmlFor="price">Price</label>
            <br />
            <input
              type="text"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </p>
          <p>
            <label htmlFor="description">Description</label>
            <br />
            <input
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </p>
          <input className="btn btn-success" type="submit" />
        </form>
      </div>
    </div>
  )
}

export default Update
