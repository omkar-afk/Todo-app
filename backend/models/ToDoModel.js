const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({
  title: {
    type: String
  },
  description:{
    type:String
  }
});

module.exports = mongoose.model("ToDo1", toDoSchema);
