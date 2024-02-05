const BaseController = require("./base.controller");
const ProductRepository = require("../repositories/product.repository");

class ProductController extends BaseController {
  constructor() {
    super(ProductRepository);
  }
}

module.exports = ProductController;
