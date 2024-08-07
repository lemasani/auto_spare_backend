const { Category } = require('./../models');

exports.PostCategory = async (req, res) =>{
    try {
        const { name} = req.body

        const newCategory = await Category.create({
            name
        })

        res.status(201).json(newCategory)
    } catch (error) {
        console.log('error creating a category', error)
        res.status(500).json({message: 'failded to create category'})
    }
}

exports.GetCategories = async (req, res)=>{
    try {
        const categories = await Category.findAll()

        res.status(200).json(categories)
    } catch (error) {
        console.log('error getting categories', error)
        res.status(500).json({message: 'failded to get categories'})
    }
}