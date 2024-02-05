//specific repository pattern

const BaseRepository = require("./base.repository");
const category = require("../models/category.model");

class CategoryRepository extends BaseRepository {
  // Inheritance from class BaseRepository
  constructor() {
    super(category); //calling the constructor of the class 'BaseRepository'
  }
}

module.exports = CategoryRepository;
