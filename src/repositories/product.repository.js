//specific repository pattern

const BaseRepository = require("./base.repository");
const product = require("../models/product.model");

class ProductRepository extends BaseRepository {
  // Inheritance from class BaseRepository
  constructor() {
    super(product); //calling the constructor of the class 'BaseRepository'
  }
}

module.exports = ProductRepository;
