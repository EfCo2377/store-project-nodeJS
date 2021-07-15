const mongoose=require('mongoose')

const categoriesSchema=mongoose.Schema({
    nameCategory:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('Category',categoriesSchema)