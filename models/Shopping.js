const mongoose=require('mongoose')

const shoppingSchema=mongoose.Schema({
    userName:{
        type:mongoose.Schema.Types.ObjectId,ref:'User'
    },
    sum:{
        type:Number
    },
    date:{
        type:new Date().getDate()
    },
    products:[
        {type:mongoose.Schema.Types.ObjectId,ref:'Product'}
    ]  
})

module.exports=mongoose.model('Shopping',shoppingSchema)