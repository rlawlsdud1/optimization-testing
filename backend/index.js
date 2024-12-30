const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const insertInitialData = require("./services/insertProducts");
const productRoutes = require("./routes/products");

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from backend!");
});

app.use("/api/products", productRoutes);

app.listen(port, async () => {
  console.log(`Server is running on port ${port}`);
  await insertInitialData();
});
