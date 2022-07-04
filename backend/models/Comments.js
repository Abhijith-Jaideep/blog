const mongoose = require("mongoose")

const commentSchema = new mongoose.Schema({
    
    postid:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"posts"
    },

    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"  
    },
    comment:{
        type:String,
        required:true
    },
    timestamp:{
        type:Date,
        default:Date.now
    }
})

const commentmodel = mongoose.model("comments",commentSchema)

module.exports = commentmodel