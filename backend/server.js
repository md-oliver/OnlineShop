import express from "express";
import products from "./data/products.js";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res, next) => {
    res.send("Hello World");
});

app.get("/api/products", (req, res, next) => {
    res.json(products);
});

app.get("/api/products/:id", (req, res, next) => {
    const product = products.find((prod) => prod._id === req.params.id);
    res.json(product);
});

// app.use((req, res, next) => {
//     res.status(404).send("<h1>Page not found</h1>");
// });

app.listen(PORT, () => {
    console.log("Server listening on PORT: ", PORT);
});
