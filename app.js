import express from "express";
import bodyParser from "body-parser";
import mongosh from "mongoose";
import UserRouter from './routes/user.route.js';
import BrandRouter from './routes/brand.route.js';
import LaptopRouter from './routes/laptop.route.js';
import AdminRouter from './routes/admin.route.js';
//import CartRouter from './routes/cart.route.js';

const app = express();
mongosh.connect("mongodb://127.0.0.1/electric")
    .then(result => {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use("/user", UserRouter);
        app.use("/brand", BrandRouter);
        app.use("/laptop",LaptopRouter);
        app.use("/admin",AdminRouter);
  //      app.use("/cart",CartRouter);
        app.listen(3000, () => {
            console.log("server started on 3000 port");

        });
    })
    .catch(err => {
        console.log(err);
    });

export default mongosh.connection;