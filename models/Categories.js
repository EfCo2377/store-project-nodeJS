const mongoose=require('mongoose')

const categoriesSchema=mongoose.Schema({
    nameCategory:{
        type:String
    }
})

module.exports=mongoose.model('Category',categoriesSchema)