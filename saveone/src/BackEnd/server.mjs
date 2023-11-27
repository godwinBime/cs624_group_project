import express from "express";
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
})
