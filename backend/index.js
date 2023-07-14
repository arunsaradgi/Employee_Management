const express = require("express");
const { connection } = require("./db.js");
const { userRouter } = require("./routes/users.routes.js");

require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log(`server is ON : ${process.env.port}`);
  } catch (error) {
    console.log(error.message);
  }
});
