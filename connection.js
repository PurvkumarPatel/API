const mongoose = require("mongoose") 
mongoose.connect("mongodb://127.0.0.1:27017/API")

.then(()=>{
console.log("mongodb connected");
})

.catch(()=>{
    console.log("failed to connect");
})

const CrimeSchema = new mongoose.Schema({
    Crime_Code:{
        type:Number,
        required:true
    },
    Related_Crime_Branch_name :{
        type:String,
        required:true
    },
    Related_Crime_Officer_number : {
        type:Number,
        required:true
    }
})

const collection = new mongoose.model("Collection",CrimeSchema)
// module.exports = collection
module.exports = collection
