import express from "express";

import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productsRouter from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res, next) => {
    res.send("Hello World");
});

app.use("/api/products", productsRouter);

// app.use((req, res, next) => {
//     res.status(404).send("<h1>Page not found</h1>");
// });

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log("Server listening on PORT: ", PORT);
});
