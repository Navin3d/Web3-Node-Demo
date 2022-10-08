const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const { PORT } = require("./src/configs");
const { appListenHandler } = require("./src/utils/handlers")
const FrmsRouter = require("./src/controllers/frms-controller");


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use("/frms", FrmsRouter),

app.listen(PORT, appListenHandler);
