const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
const routes=require("./Routes/jobdetails")
mongoose.connect("mongodb+srv://savitha:Savitha19@cluster0.ngd5ggy.mongodb.net/preflight?retryWrites=true&w=majority",{useNewUrlParser:true, useUnifiedTopology:true}).
then(()=>console.log("connection successfull"))
.catch((error)=>console.log(error))
app.use("/Tookan.api", routes)
app.get('/', function (req, res) {
    res.send('GET request to homepage')
  })
app.listen(5000,"127.0.0.1",()=>{
    console.log("server running")
})