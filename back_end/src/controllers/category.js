const Category = require("../models/category");
const slugify = require('slugify');


function createCategories(categories, parentId = null){
    const categoryList = [] ;
    let category;
    if(parentId == null)
    {
        category = categories.filter(cat => cat.parentId == undefined);
    }else{
        category = categories.filter(cat => cat.parentId == parentId);
    }

    for(let cate of category){
        categoryList.push({
            _id: cate._id,
            name: cate.name,
            slug: cate.slug,
            children: createCategories(categories, cate._id)
        });
    }
    return categoryList;

}
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

                const categoryList = createCategories(categories);
                res.status(200).json({ categoryList})
            }
        });
    }catch (err) { return res.status(500).json({ error: err}); }
}