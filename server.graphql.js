const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type Product {
    _id: ID!,
    name: String,
    createdAt: String,
    updatedAt: String,
    description: String,
    code: String,
    image: String,
    price: String,
    category: String,
    stock: Int,
  }

  input ProductInput {
    name: String,
    description: String,
    code: String,
    image: String,
    price: String,
    category: String,
    stock: Int,
  }

  type Query {
    getProduct: [Product]!,
    getProductById(id: ID!): Product
  }

  type Mutation {
    createProduct(datos: ProductInput): Product,
    updateProduct(id: ID!, datos: ProductInput): Product,
    deleteProduct(id: ID!): Product
  }
`);

const ProductsApi = require("./src/api/products.api");
const productsApi = new ProductsApi();

const getProduct = async () => {
  const products = await productsApi.getProducts();
  return products;
};

const getProductById = async ({ id }) => {
  const products = await productsApi.getProductById(id);
  return products;
};

const createProduct = async ({ datos }) => {
  const newPersona = await productsApi.createProduct(datos);
  return newPersona;
};

const updateProduct = async ({ id, datos }) => {
    const updateProduct = await productsApi.updateProduct(id, datos);
    return updateProduct;
};

const deleteProduct = async ({ id }) => {
    const deletedProduct = await productsApi.deleteProduct(id);
};

const app = express();

// Middlewares
app.use(express.static("public"));

// GraphQL Definition
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: {
      getProduct,
      getProductById,
      createProduct,
      updateProduct,
      deleteProduct,
    },
    graphiql: true,
  })
);

const config = require("./src/config/env.config");
const MongoContainer = require("./src/models/container/mongo.container");

const server = app.listen(config.PORT, async () => {
  MongoContainer.connect().then(() => {
    console.log(`Connected to ${config.DATASOURCE} DB!`);
    console.log("Server is up and running on port: ", config.PORT);
  });
});

server.on("error", (error) => {
  console.log("Error with the Server");
  console.log(error.message);
});
