const ProductController = require("../controllers/Product.controller")

module.exports = function (app) {
  app.get("/api", ProductController.index)
  app.get("/api/products", ProductController.getAllProducts)
  app.post("/api/product/create", ProductController.createProduct)
}
