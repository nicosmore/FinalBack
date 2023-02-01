const express = require("express");
const config = require("./env.config");
const cors = require('cors');
const apiRoutes = require("./src/routers/app.routers");
const errorMiddleware = require("./src/middlewares/error.middleware");

const session = require("express-session");
const MongoStore = require("connect-mongo");

const dbConfig = require("./src/config/db.config");
const passport = require("./src/middlewares/passport");


const app = express();

//App Midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use(
  session({
    name: "proyectoFinalSession",
    secret: config.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: dbConfig.mongodb.connectTo(config.DB_NAME),
    }),
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Api routes
app.use("/api", apiRoutes);
app.use(errorMiddleware);

module.exports = app;
