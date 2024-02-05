const express = require("express");
const CategoryController = require("../controllers/category.controller");

const router = express.Router();
const categoryController = new CategoryController();

router.get("/get", categoryController.getAll);
router.get("/get/:id", categoryController.getById);
router.post("/add", categoryController.add);
router.put("/update/:id", categoryController.update);
router.delete("/delete/:id", categoryController.deleteById);

module.exports = router;
