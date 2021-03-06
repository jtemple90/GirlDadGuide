import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/api/posts.js";

const app = express();

app.use("/posts", postRoutes);

// BODY-PARSER MIDDLEWARE

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://jdtemple90:GirlDad@gdd-cluster.v6y1i.mongodb.net/girlDad?retryWrites=true&w=majority";
const PORT = process.env.PORT || 3600;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port ${PORT} and connected to database`)
    )
  );
