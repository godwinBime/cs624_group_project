
const mongoose = require('mongoose')

const SaveOneSchema = new mongoose.Schema({
    itemDescription: String,
    price: String,
    manufacturer: String,
    picture: String,
    quantity: String,
    serialNumber: String
})


mongoose.model("saveone", SaveOneSchema)