const mongoose = require("mongoose");
const toDoSchema = new mongoose.Schema({
    title: {
      type: String
    },
    description:{
      type:String
    }
  });

const user = new mongoose.Schema({
    username:{
        require: true,
        type : String
    },
    password:{
        require:true,
        type: String
    },
    todos: [toDoSchema]
})

const userModel = mongoose.model("user",user);

module.exports = {
    userModel
}