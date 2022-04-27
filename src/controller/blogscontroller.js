const blogsModule = require("../modules/blogsModule")

// const getAllBlogs = async function (req, res) {
//     try {
//         let { _id, category, tag, subcategory } = req.query
//         let query = {}
//         if (_id != null) query._id = _id
//         if (category != null) query.category = category
//         if (tag != null) query.tag = tag
//         if (subcategory != null) query.subcategory = subcategory
//         let result = await blogsModule.find({ isDeleted: false, isPublished: true, query })
//         if (result) {
//             res.status(200).send({ status: true, data: result })
//         } else {
//             res.status(404).send({ status: false, msg: "" })
//         }
//     }
//     catch (error) {
//         res.send({ status: false, msg: error.message })
//     }
// }

const deleteBlogsById = async function (req, res) {
    try {
        let blogId = req.params.blogId
        let result = await blogsModule.findOne({ _id: blogId, isDeleted: false })
        if (result) {
            let updated = await blogsModule.findByIdAndUpdate({ _id: blogId }, { isDeleted: true }, { new: true })
            res.status(200).send({ status: true, msg:"Deletion Successfull" })
        } else {
            res.status(404).send({ status: false, msg: "Not Found" })
        }
    } catch (error) {
        res.status(500).send({ status: false, msg: error.message })
    }
}






//module.exports.getAllBlogs = getAllBlogs
module.exports.deleteBlogsById = deleteBlogsById