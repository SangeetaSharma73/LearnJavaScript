const express = require('express');
const {auth} = require('../middlewares/auth.middleware');
const {NoteModel} = require('../models/note.model');
const noteRouter = express.Router();

noteRouter.post('/',auth,async (req,res)=>{
    //logic
    // const {title,description,userId,user} = req.body; 
    try{
        // const newNote = new NoteModel({title,description,userId,user})
         const newNote = new NoteModel(req.body);
         await newNote.save();
         res.status(200).json({msg:"Note created successfully"});

    }catch(err){
        res.status(500).json({ msg: "internal server" }, err);
    }
})


noteRouter.get('/:id',auth,async(req,res)=>{
try{
    const notes = await NoteModel.find({userId:req.body.userId});
    res.status(201).json({notes});
}catch(err){
    res.json({err});
}
});




noteRouter.patch("/:noteId",(req,res)=>{
    //logic
})

noteRouter.delete(":/noteId",(req,res)=>{
    //logic
})
module.exports = {noteRouter};