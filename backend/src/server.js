const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", userRoute);

const server = app.listen(3001, () => {
  console.log("listening on port 3001");
});
