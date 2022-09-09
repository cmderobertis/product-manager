import axios from "axios"

import React, { useState } from "react"

const PersonForm = ({ products, setProducts }) => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const onSubmitHandler = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:8000/api/products", {
        title,
        price,
        description,
      })
      .then((res) => {
        console.log(res)
        setProducts([...products, res.data])
        setTitle("")
        setPrice("")
        setDescription("")
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="card">
      <div className="card-body">
        <h4>Create Product</h4>
        <div className="card bg-light">
          <div className="card-body">
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
              <input className="btn btn-success" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonForm
