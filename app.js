import "dotenv/config";
import express from "express";
import expressEjsLayouts from "express-ejs-layouts";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
