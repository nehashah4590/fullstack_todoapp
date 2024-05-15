const mongoose = require("mongoose");

//Schema
const registerTask = new mongoose.Schema({
    task:{
      type:String,
      required:true,
    },
  },{timestamps:true});
  
  const Task = mongoose.model("task", registerTask);

  module.exports = Task; 