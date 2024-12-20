const mongoose = require('mongoose')
const taskSchema = new mongoose.Schema({
title:{
type:mongoose.Schema.Types.String,
required:true,
},
body:{
type:mongoose.Schema.Types.String,
//required:true,
},
active:{
type:Boolean,
default:false
}
},{
timestamps:true
})
module.exports = mongoose.model('Article', taskSchema)