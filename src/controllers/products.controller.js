const ProductsApi = require("../api/products.api");
const { ProductsDao } = require("../models/daos/daos.factory");
const { successResponse, HTTP_STATUS } = require("../utils/api.utils");


class ProductsController {
  constructor() {
    this.api = new ProductsApi();
  }
  
  getProducts = async (req, res,next) => { 
    try {
      const products = await this.api.getProducts();
      const response = successResponse(products)
      res.status(HTTP_STATUS.OK).json(response)
    }
    catch(error){
      next(error);
    }     
  };

  getProductById = async (req, res, next) => {   
    const { Id } =  req.params;
    try{
      const products = await this.api.getProductById(Id);
      const response = successResponse(products);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error){
      next(error)
    }
  };

  createProduct = async (req, res, next) => {
    const productPayload = req.body
    try {
      const newProduct = await this.api.createProduct(productPayload);
      const response = successResponse(newProduct);
      res.status(HTTP_STATUS.CREATED).json(response);
    }
    catch(error) {
      next(error);
    }
  };

  updateProduct = async (req, res,next) => {
    const { Id } = req.params;
    const productPayload = req.body
    try {
      const updateProduct = await this.api.updateProduct(Id, productPayload);
      const response = successResponse(updateProduct);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    }
  };

  deleteProduct = async (req, res, next) => {
    const { Id } = req.params;
    try {
      const deletedProduct = await this.api.deleteProduct(Id);
      const response = successResponse(deletedProduct);
      res.status(HTTP_STATUS.OK).json(response);
    }
    catch(error) {
      next(error);
    };      
  };
}  
  module.exports = ProductsController;
  