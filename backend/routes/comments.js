const express = require("express")
const fetchUser = require("../middleware/fetchUser")
const commentmodel = require("../models/Comments")
const router = express.Router()

router.get("/fetchComments/:id",async(req,res)=>{
    const postid= req.params.id

    const comments = await commentmodel.find({postid})

    if(!comments) return res.status(400).json({msg:"no comments for this post"})

    return res.json(comments)
})

router.post("/postComment/:id",fetchUser,async (req, res) => {
    const postid = req.params.id
    const userid = req.id
    const {comment} = req.body

    const completed = await commentmodel.create({
        postid,userid,comment
    })

    if(!completed) return res.status(400).json({msg:"comment could not be posted"})

    res.json({msg:"comment posted"})

})

router.put("/updateComment/:commentid",fetchUser,async (req, res) => {
    const commentid = req.params.commentid
    const userid = req.id
    const {comment} = req.body

    const foundComment = await commentmodel.findOne({commentid})

    if(foundComment.userid != userid) return res.status(401).json({msg:"illegal operation"})

    const updated = await commentmodel.updateOne({commentid},{
        comment
    })

    if(!updated) return res.status(500).json({msg:"could not update comment"})

    res.json({msg:"comment updated"})

})

router.delete("/deleteComment/:commentid",fetchUser,async (req, res) => {
    const userid = req.id
    const commentid = req.params.commentid

    const foundComment = await commentmodel.findOne({commentid})

    if(foundComment.userid != userid) return res.status(401).json({msg:"illegal operation"})

    const deleted = await commentmodel.deleteOne({commentid})

    if(!deleted) return res.status(500).json({msg:"could not delete comment"})

    res.json({msg:"comment deleted"})

})


module.exports = router