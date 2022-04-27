const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

const authorController = require("../controller/authorControllers")
const blogscontroller = require("../controller/blogscontroller")


router.post("/blogs", blogscontroller.createBlogs)

router.post("/createAuthors",authorController.createAuthor)

router.put("/blogs/:blogId", blogscontroller.updateBlogsById)

router.delete("/blogs/:blogId", blogscontroller.deleteBlogsById)

router.delete("/blogs",blogscontroller.deleteBlogsByQuery)







router.all("/**",function(req,res){res.status(404).send({status:false,msg:"The api you request is not available"})})


module.exports = router;