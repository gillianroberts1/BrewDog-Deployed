const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

const MongoClient = require("mongodb").MongoClient;
const createRouter = require("./helpers/create_router.js");

MongoClient.connect(
  process.env.MONGODB_URL,

  {
    useUnifiedTopology: true,
  }
)
  .then((client) => {
    const db = client.db("brewdog");
    const basketCollection = db.collection("basket");
    const basketRouter = createRouter(basketCollection);
    app.use("/api/basket", basketRouter);
  })
  .catch(console.err);

app.use("/louise", (req, res) => {
  res.send("Hello");
});

const hostname = "0.0.0.0";
const port = process.env.port || 3000;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
