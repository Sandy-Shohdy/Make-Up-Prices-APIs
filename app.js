const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/makeup-tracker")
  .then(() => console.log("MongoDB connected with Mongoose"))
  .catch((err) => console.error(err));

app.use(express.json());

app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Makeup Price Tracker API is running");
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
