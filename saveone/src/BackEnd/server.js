/*import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import innovators from "./routes/innovators.mjs"

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/innovator", innovators);

//Start the express server
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
})*/

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./routes/innovators.js')

app.use(bodyParser.json())
const Innovator = mongoose.model("innovator")

ATLAS_URI = "mongodb+srv://godwin:19CS624Gp89@mscs-projects-cluster.dzzyyrw.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(ATLAS_URI, {
    useNewUrlParser: true
})

mongoose.connection.on("connected", () => {
    console.log("Connected to mongodb...")
})

mongoose.connection.on("Error", (err) => {
    console.log("Error", err)
})

app.get('/', (req, res) => {
    res.send("Hello world")
})

app.post("/sendItem", (req, res) => {
    const innovator = new Innovator({
        itemDescription: req.body.itemDescription,
        price: req.body.price,
        manufacturer: req.body.manufacturer,
        picture: req.body.picture,
        quantity: req.body.quantity,
        serialNumber: req.body.serialNumber
    })
    innovator.save()
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log("Error::", err)
    })
    res.send("Successfully posted")
})

app.listen(3000, () => {
    console.log("Server is running...")
})