const express = require("express");
const bodyParser = require("body-parser");
const routerProduct = require("./routes/product");
const cors = require("cors");

const app = express();
app.use(cors("*"));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

//use routerProduct for all the routes starting with product
app.use("/product", routerProduct);

app.get("/", (request, response) => {
  response.send("welcome to server application!");
});

app.listen(4000, "0.0.0.0", () => {
  console.log("sever is running on port no 4000");
});
