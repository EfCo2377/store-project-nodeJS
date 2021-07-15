const mongoose=require('mongoose') 

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:6,
        maxlength:16
    },
    email:{
        type:String,
        validator:"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$",
        required:true
    }
})

module.exports=mongoose.model('User',userSchema)