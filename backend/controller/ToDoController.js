const { userModel } = require("../models/user");

module.exports.getToDos = async (req, res) => {
  const username = req.body.username;
  try{
    const user = await userModel.findOne({ username });
    res.send(user.todos);
  }catch(e){
    res.json({
      mssg:"error occured finding user."
    })
  }
  
};

module.exports.saveToDo = async(req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const todo = {title, description};
  const username = req.body.username;

 try {
        // Find the user by their username
        const user = await userModel.findOne({ username });

        if (!user) {
            console.log('User not found.');
            return;
        }

        // Push the new todo onto the todos array
        user.todos.push(todo);

        // Save the updated user document
        await user.save();

        res.json({
          mssg: 'Todo added to user successfully'
        });
    } catch (error) {
      res.json({
        mssg: 'error adding a todo'
      });
    }
};

module.exports.updateToDo = async(req, res) => {
  const { id } = req.params;
  const title = req.body.title;
  const description = req.body.description;
  const username = req.body.username;
  console.log(id);
  try{
    const user = await userModel.findOne({username});
    user.todos.forEach((ele)=>{
      if(ele._id == id){
        console.log("found");
        ele.title = title;
        ele.description = description;
      }
    })
    await user.save();
    res.send("sucessfully updated")
  }
  catch(e){
    res.json({
      mssg:"error occured"
    })

  }
  
};

module.exports.deleteToDo = async(req, res) => {
  const  id  = req.params.id;
  const username = req.body.username;
  console.log(id);
  try{
    const user = await userModel.findOne({username});
    user.todos = user.todos.filter((ele)=>{
      if(ele._id != id){
        return true;
      }
      return false;
    })
    await user.save();
    res.send("sucessfully deleted")
  }
  catch(e){
    res.json({
      mssg:"error occured"
    })
  }
};
