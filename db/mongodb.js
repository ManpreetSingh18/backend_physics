const mongoose = require("mongoose")

//require('dotenv').config()
//console.log(process.env)
mongoose.connect("mongodb+srv://msingh182001:12345Physics@cluster0.urbuee5.mongodb.net/physics?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    console.log("Mongo DB Connceted");
})
.catch((error)=>{
    console.log("Failed To connect:"+error)
})
