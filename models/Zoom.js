
const mongoose = require('mongoose')
const zoomSchema = new mongoose.Schema({
title:{
    type: String,
    required: true,
    min:1
}
,
link:{
    type: String,
    required: true,
    min:2
},
 
dateRegistered:{
    type: String,
    default: Date.now
}
})
module.exports=mongoose.model('Zoom',zoomSchema)
  
 


 

