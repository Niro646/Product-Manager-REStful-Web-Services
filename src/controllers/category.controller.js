const BaseController = require("./base.controller");
const CategoryRepository = require("../repositories/category.repository");

class CategoryController extends BaseController {
  constructor() {
    super(CategoryRepository);
  }
}

module.exports = CategoryController;
