require("dotenv").config();
const { userModel } = require("../models/user");
const jwt = require("jsonwebtoken");
check_user = async(req,res)=>{
    const user = req.body;
    const check = await userModel.findOne({username:user.username, password :user.password})
    if(check){
        const token = jwt.sign({username :user.username},process.env.ACCESS_TOKEN_SECRET);
        res.json({
            mssg:"exist",
            jwt:token

        })
    }else{
        res.json({
            mssg:"does not exist"
        })
    }
}
save_user = async(req,res)=>{
    const user = req.body;
    
    const check = await userModel.findOne({username:user.username})
    if(check){
        res.json({
            mssg:"exist"
        })
    }else{
        const token = jwt.sign({username :user.username},process.env.ACCESS_TOKEN_SECRET);
        res.json({
            mssg:"does not exist",
            jwt:token
        })
        userModel.insertMany(user);
    }
}

module.exports = {
    save_user,
    check_user
}
