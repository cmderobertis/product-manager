const { Product } = require("../models/Product.model")
module.exports.index = (request, response) => {
  response.json({
    message: "Hello World!",
  })
}

module.exports.getAllProducts = (request, response) => {
  Product.find()
    .then((Product) => response.json(Product))
    .catch((err) => response.json(err))
}

module.exports.createProduct = (request, response) => {
  const { title, price, description } = request.body
  Product.create({
    title,
    price,
    description,
  })
    .then((Product) => response.json(Product))
    .catch((err) => response.json(err))
}
