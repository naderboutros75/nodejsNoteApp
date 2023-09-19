<<<<<<< HEAD
import "dotenv/config";
import express from "express";
import expressEjsLayouts from "express-ejs-layouts";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(expressEjsLayouts);
app.set("layout", "./lauout/main");
app.set("viewengine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(port, () => {
  console.log(`App listing on port ${port}`);
});
