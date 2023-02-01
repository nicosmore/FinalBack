const mongoose = require('mongoose');
const dbConfig = require('../../config/db.config');
const envConfig = require('../../../env.config');
const { HttpError, HTTP_STATUS } = require('../../utils/api.utils');

class MongoContainer {
  
  constructor(collection, schema) {
    this.model = mongoose.model(collection, schema);
  }

  static async connect() {
    await mongoose.connect(dbConfig.mongodb.connectTo(envConfig.DB_NAME));
  }

  static async disconnect() {
    await mongoose.disconnect();
  }

  async getAll(filter = {}) {
    const documents = await this.model.find(filter, { __v: 0 }).lean();
    return documents;
  }

  async getById(id) {
    const document = await this.model.findOne({ _id: id }, { __v: 0 });
    if (!document) {
      const message = `Resource with id ${id} does not exist in our records`;
      throw new HttpError(HTTP_STATUS.NOT_FOUND, message);
    }
    return document;
  }

  async save(item) {
    const newDocument = new this.model(item);
    return await newDocument.save();
  }

  async update(id, item) {
    const updatedDocument = await this.model.updateOne(
      { _id: id },
      { $set: { ...item } }
    );
    if (!updatedDocument.matchedCount) {
      const message = `Resource with id ${id} does not exist in our records`;
      throw new HttpError(HTTP_STATUS.NOT_FOUND, message);
    }
    return updatedDocument;
  }

  async delete(id) {
    const deleteForId = await this.model.deleteOne({ _id: id });
    if(!deleteForId.deletedCount) {
      const message = `Resource with id ${id} does not exist in our records`;
      throw new HttpError(HTTP_STATUS.NOT_FOUND, message);
    }
    return deleteForId
  }
}

module.exports = MongoContainer;