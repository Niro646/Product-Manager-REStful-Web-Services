//Generic Repository Pattern
class BaseRepository {
  // class used for all common functions
  constructor(_collection) {
    this.collection = _collection;
  }

  async findAll() {
    // making findAll an async function would allow the use of promises
    // resolving the promise
    var data = await this.collection.find().lean().exec(); //by default mongoose returns an instance of the Mongoose Document. using the lean function tells mongoose to give us a POJO(plain old JavaScript objects) instead of an instance of an Mongoose Document.
    console.log(data);
    return data; //returning the promise
  }

  async findById(id) {
    return this.collection.findById(id);
  }

  async create(model) {
    return this.collection.create(model);
  }

  async update(model) {
    return this.collection.findByIdAndUpdate(model._id, model);
  }

  async deleteById(id) {
    return this.collection.findByIdAndDelete(id);
  }
}

module.exports = BaseRepository;
