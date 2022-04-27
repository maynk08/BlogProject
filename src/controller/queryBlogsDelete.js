const blogsModule = require("../modules/blogsModule")
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
module.exports.deleteBlogsByQuery = deleteBlogsByQuery