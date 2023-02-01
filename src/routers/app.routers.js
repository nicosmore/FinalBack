const { Router } = require('express');
const productsRoutes = require("./products/products.routes");
const cartsRoutes = require("./carts/carts.routes");
const usersRoutes = require("./users/users.routes");
const authRoutes = require("./auth/auth.routes");
const router = Router();

router.use("/products", productsRoutes);
router.use("/cart", cartsRoutes);
router.use("/user", usersRoutes);
router.use("/auth", authRoutes);


module.exports = router;