const User=require('../models/User')
const jwt=require('jsonwebtoken')

//create user
const createUser=async(req,res)=>{
    try {
        let user=await User.findOne({userName:req.body.userName,password:req.body.password})
        if(user){
            res.send(`user ${req.body.userName} already exsist`)
        }
        else{
            //יצירת שם המשתמש החדש
            let newuser=new User(req.body)
            await newuser.save()
            res.status(200).json(newuser)    
        } 
    }catch (error) {
        res.status(400).send(error)
    }
}

//login
const login=async(req,res)=>{
    try {
        let user=await User.findOne({userName:req.params.userName,password:req.params.password})
        if(user){
            res.status(200).json(user)
        }
        else{
            res.send(`user ${req.body.userName} not exist`)
        }
    } catch (error) {
        res.status(400).send(error)
    }
}

//update user
const updateUser=async(req,res)=>{
    try {
        let user=await User.findByIdAndUpdate(req.params.idUser,req.body,{new:true})
        res.status(200).json(user)
    } catch (error) {
        res.status(505).send(error)
    }
}

module.exports={createUser,login,updateUser}

