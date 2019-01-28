const mongoose = require("mongoose");
const dbUrl = require("./config/db");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");

const API_PORT = 3001;
const app = express();

import routes from './routes';

mongoose.connect(dbUrl.url, { useNewUrlParser: true }, function(err){
    if(err) return console.log(err);
    app.listen(3000, function(){
        console.log("Сервер ожидает подключения...");
    });
});

let db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));
app.use(routes);

app.listen(API_PORT, () => console.log(`LISTENING ON UHH PORT ${API_PORT}`));

