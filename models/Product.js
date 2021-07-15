const mongoose=require('mongoose')

const productSchema=mongoose.Schema({
    nameProduct:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    img:{
        type:String
    },
    category:
        {type:mongoose.Schema.Types.ObjectId,ref:'Category'}
})

module.exports=mongoose.model('Product',productSchema)