const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
require('./saveone.js')

app.use(bodyParser.json())
const SaveOne = mongoose.model("saveone")

ATLAS_URI = "mongodb+srv://godwin:19CS624Gp89@saveonecluster.plfgghg.mongodb.net/innovators?retryWrites=true&w=majority"

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

//Data entry route
app.post("/send-item", (req, res) => {
    const saveone = new SaveOne({
        itemDescription: req.body.itemDescription,
        price: req.body.price,
        manufacturer: req.body.manufacturer,
        picture: req.body.picture,
        quantity: req.body.quantity,
        serialNumber: req.body.serialNumber
    })
    saveone.save()
    .then(data => {
        console.log(data)
    }).catch(err => {
        console.log("Post Error::", err)
    })
    res.send("Successfully posted")
})

//Delete route
app.delete('/delete-item', (req, res) => {
    SaveOne.findOneAndDelete(req.body.id)
    .then(data => {
        res.send("Deleted successfully.")
        console.log("Data delete is below: \n", data)
    }).catch(err => {
        console.log("Delete Error::", err)
    })
})

//Update Route
app.patch('/update-item', (req, res) => {
    SaveOne.findByIdAndUpdate(req.body._id, {
        itemDescription: req.body.itemDescription,
        price: req.body.price,
        manufacturer: req.body.manufacturer,
        picture: req.body.picture,
        quantity: req.body.quantity,
        serialNumber: req.body.serialNumber
    }).then(data => {
        res.send("Data updated successfully")
        console.log(data)
    }).catch(err => {
        console.log("Delete Error::", err)
    })
})

app.listen(3000, () => {
    console.log("Server is running...")
})