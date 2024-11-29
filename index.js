import express from "express";
import cors from "cors";
import env from "dotenv";
import route from "./routes/allRoute.js";

const port = process.env.PORT || 3500;
const app = express();
env.config();

//const db = 'mongodb://127.0.0.1:27017/name';
//const db = process.env.DB_URL;
app.listen(port, () => {
  console.log("listening !!!");
});

app.use(express.static("public"));
app.use(express.json());

app.set("view engine", "ejs");

app.use(route);

// Define an array of allowed origins

app.use(cors());

app.get("/", (req, res) => {
  res.redirect("/home");
});
