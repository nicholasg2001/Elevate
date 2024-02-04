import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send({
    status: "This is working!",
  });
});

const server = app.listen(3001, () => {
  console.log("listening on port 3001");
});
