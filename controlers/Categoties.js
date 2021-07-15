const Category=require('../models/Categories')

//get All categories

const getAllCategories=async(req,res)=>{
    let category=await Category.find()
    try {
        res.status(200).json(category)
    } catch (error) {
        res.status(400).send(error)
    }
}

//add category
const addCategory=async(req,res)=>{
    try {
        let category=new Category(req.body)
        await category.save()
        res.status(200).json(category)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports={getAllCategories,addCategory}