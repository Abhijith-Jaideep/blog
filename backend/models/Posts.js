const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({

    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users"
    },

    name:{
        type:String,
        required:true
    },

    title: {
        type: String,
    },
    description:{
        type: String,
        required:true
    },
  
    timestamp:{
        type:Date,
        default:Date.now
    }

})

const postmodel = mongoose.model("posts", postSchema)

module.exports = postmodel