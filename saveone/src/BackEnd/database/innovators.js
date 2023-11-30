/*import express from "express";
import { ObjectId } from "mongodb";
import db from "../database/connection.mjs";

const router = express.Router();



export default router;
*/


const mongoose = require('mongoose')

const InnovatorsSchema = new mongoose.Schema({
    itemDescription: String,
    price: String,
    manufacturer: String,
    picture: String,
    quantity: String,
    serialNumber: String
})


mongoose.model("innovator", InnovatorsSchema)