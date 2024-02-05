const express = require("express");
const ProductController = require("../controllers/product.controller");

const router = express.Router();
const productController = new ProductController();

router.get("/get", productController.getAll);
router.get("/get/:id", productController.getById);
router.post("/add", productController.add);
router.put("/update/:id", productController.update);
router.delete("/delete/:id", productController.deleteById);

module.exports = router;
