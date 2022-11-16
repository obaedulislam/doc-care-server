const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();
const port = process.env.PORT || 4300;

const app = express();

//MiddleWare
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.ypkp6ia.mongodb.net/?retryWrites=true&w=majority`;
console.log(uri);
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const appointmentCollection = client
      .db("docCare")
      .collection("appointmentOptions");

    app.get("/appointmentoptions", async (req, res) => {
      const query = {};
      const options = await appointmentCollection.find(query).toArray();
      res.send(options);
    });
  } catch {}
}
run().catch(console.log());

app.get("/", async (req, res) => {
  res.send("Doc Care Server is Running ");
});

app.listen(port, () =>
  console.log(`Doc Care server is running on Port: ${port}`)
);
