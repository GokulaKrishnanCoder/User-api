import express from "express";
import { router } from "./Routes/app.router.js";
import  connector  from "./connectToDataBase.js";

const app  = express();
const port = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connector();
app.use('/home',router);

app.listen(port,() => {
    console.log(`Server is running on port http://localhost/${port}`);
});