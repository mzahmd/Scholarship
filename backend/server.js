import express from "express";
import cors from "cors"
const app = express();

app.use(cors())

app.get("/", function (req, res) {
  res.json({"Hello": "destip"})
});

app.listen(3000, () => console.log("Listening on Port 3000"));
