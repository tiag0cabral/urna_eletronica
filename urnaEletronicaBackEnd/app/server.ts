import path = require("path");
import fs = require("fs");
import express = require("express");
import cors = require("cors");


const app = express();
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

const porta = 3001
app.listen(porta,function () {
    console.log(`Server rodando na porta ${porta}`);

})
