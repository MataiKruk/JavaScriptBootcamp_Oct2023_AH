import express from "express";
import resolutions from "./routes/resolutions";
const app = express();
const port = 3000;

// app.use(express.json())
app.use(express.urlencoded({ extended: true })) // for form data

app.use("/resolutions", resolutions);
app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}/`);
});