const Category = require("../models/category");
const slugify = require('slugify');

exports.addCategory = (req, res) => {
    try {
        const categoryObj = {
            name: req.body.name,
            slug: slugify(req.body.name)
        }
        console.log(req.body.parentId);
        if (req.body.parentId) {
            categoryObj.parentId = req.body.parentId;
        }
        const cat = new Category(categoryObj);
        cat.save((error, category) => {
            if (error) return res.status(400).json({ error });
            if (category) {
                return res.status(200).json({ category });
            }
        });
    } catch (error) {
        console.log(error);
    }
};

exports.getCategories = (req, res) => {
    try {
        Category.find({})
        .exec((err, categories)=>{
            if (err) return res.status(400).json({ error: err });

            if( categories){
                res.status(200).json({ categories})
            }
        });
    }catch (err) { return res.status(500).json({ error: err}); }
}