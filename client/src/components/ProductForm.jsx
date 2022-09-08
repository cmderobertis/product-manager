import axios from "axios"

import React, { useState } from "react"

const PersonForm = () => {
  const [title, setTitle] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")

  const onSubmitHandler = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:8000/api/product/create", {
        title,
        price,
        description,
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err))
  }

  return (
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
      <input type="submit" />
    </form>
  )
}

export default PersonForm
