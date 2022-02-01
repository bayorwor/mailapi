const express= require("express");
const dotenv =require("dotenv");
const connectDB= require("./config/connectDB");
const userRoute = require("./routes/userRoute");
const mailRoute = require("./routes/mailRoute");

dotenv.config();

const app = express();

connectDB();

//middlewares
app.use(express.json());

//routes
app.use(userRoute);
app.use(mailRoute);

//home 
app.get ("/", (req, res)=> {
    res.send("<h1>welcome</h1>");

})

const port =process.env.PORT || 6000

app.listen(port, ()=>
console.log (`server is running ${port}`))