// IMPORTS FROM PACKAGES
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const adminRouter = require("./routes/admin");
// IMPORTS FROM OTHER FILES
const authRouter = require("./routes/auth");
const productRouter = require("./routes/product");
const jioRouter = require("./routes/jio");
const userRouter = require("./routes/user");

// INIT
const PORT = process.env.PORT || 3000;
const app = express();

const DB =
  "mongodb+srv://kunu:kunu@cluster0.cp24gd5.mongodb.net/amazonecom?retryWrites=true&w=majority";

// middleware
app.use(express.json());
app.use(cors());
// app.use(authRouter);
app.use(adminRouter);
app.use(productRouter);
app.use(jioRouter);
app.use(userRouter);

// Connections
mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(PORT, "0.0.0.0", () => {
  console.log(`connected at port ${PORT}`);
});
