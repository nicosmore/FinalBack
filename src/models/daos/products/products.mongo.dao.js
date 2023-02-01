const MongoContainer = require("../../container/mongo.container");
const productsSchema = require("../../schemas/mongo.schemas/products.schema");

const collection = "products";

class ProductsMongoDao extends MongoContainer {
  constructor() {
    super(collection, productsSchema);
  }
}

module.exports = ProductsMongoDao;