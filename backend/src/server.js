const express = require("express");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const userRoute = require("./routes/userRoute.js");
const authRoute = require("./routes/authRoute.js");
const externalApiRoute = require("./routes/externalApiRoute.js");
const dailyWorkoutsRoute = require("./routes/dailyWorkoutsRoute.js");
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/external", externalApiRoute);
app.use("/api/dailyWorkouts", dailyWorkoutsRoute);


app.listen(3001, () => {
  console.log(`Server is running on port ${3001}`);
});
