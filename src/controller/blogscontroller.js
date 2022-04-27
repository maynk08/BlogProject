const blogsModule = require("../modules/blogsModule")
const authorModule = require('../modules/authorModule')


const createBlogs = async (req, res) => {
    try {

        // 👇 get all data from body here 🤯
        const data = req.body;

        // validate required info...
        if (Object.keys(data).length <= 0) {
            return res.status(400).send({
                status: false,
                msg: "POST Body data required"
            })
        }


        // 👇 need to check author id is valid or not 🔍🔍
        const isValidAuthor = await authorModule.findById(data.authorId)
            .catch(err => null);
        if (!isValidAuthor) { // NOT true
            return res.status(401).send({
                status: false,
                msg: "⚠️ Invalid AuthorId, please try with a valid AuthorId"
            })
        }

        // 👇 Create a blog document from request body
        const createBlogs = await blogsModule.create(data)

        res.status(201).send({
            status: true,
            data: createBlogs
        })
    } catch (err) {
        res.status(500).send({
            status: true,
            msg: err.message
        })
    }
}




const deleteBlogsById = async function (req, res) {
    try {
        let blogId = req.params.blogId
        let result = await blogsModule.findOne({
            _id: blogId,
            isDeleted: false
        })
        if (result) {
            let updated = await blogsModule.findByIdAndUpdate({
                _id: blogId
            }, {
                isDeleted: true
            }, {
                new: true
            })
            res.status(200).send({
                status: true,
                msg: "Deletion Successfull"
            })
        } else {
            res.status(404).send({
                status: false,
                msg: "Not Found"
            })
        }
    } catch (error) {
        res.status(500).send({
            status: false,
            msg: error.message
        })
    }
}


const deleteBlogsByQuery = async function (req, res) {
    try {
        let data = req.query
        if (Object.keys(data).length==0) {
        res.status(400).send({status:false,msg:"no query params available " })
        }
        data.isDeleted=false
        const available=await blogsModule.find(data).count()
        if (available==0){
            res.status(404).send({status:false,msg:"query data not found " })  
        }
        const deleteData = await blogsModule.updateMany(data, { $set: { isDeleted: true } })
        res.status(200).send({ status: true, msg: deleteData })
    } catch (error) {
        res.status(500).send({status: false, msg: error.message  })

    }

}









module.exports.createBlogs = createBlogs
module.exports.deleteBlogsById = deleteBlogsById
module.exports.deleteBlogsByQuery = deleteBlogsByQuery