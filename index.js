const express = require("express");
const cors = require("cors");

const port = process.env.PORT || 4300;

const app = express();

//MiddleWare
app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Doc Care Server is Running ");
});

app.listen(port, () =>
  console.log(`Doc Care server is running on Port: ${port}`)
);
