import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import motiveRoutes from "./routes/motives.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/motives", motiveRoutes);

const PORT = process.env.PORT;

mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`🌎🌎🌎  Server running on port: ${PORT} 🌎🌎🌎 `)
    )
  )
  .catch((error) => console.log(error.message));
mongoose.set("useFindAndModify", false);
