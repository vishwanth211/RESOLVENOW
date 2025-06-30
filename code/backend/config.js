const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://anji_1434:ERt2Drj0MAzR5pit@cluster0.xlufjmc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
   console.log("connected to mongodb")
})