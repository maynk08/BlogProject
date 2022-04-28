const express = require('express');
//const {route} = require('express/lib/application');
const router = express.Router();

const authorController = require("../controller/authorControllers")
const blogsController = require("../controller/blogsController")


// create author
router.post("/createAuthors", authorController.createAuthor)

//create post login with jwt token as output
router.post("/login",authorController.authorLogin)

// create blogs
router.post("/blogs", blogsController.createBlogs)

// get all blogs by query
router.get("/blogs", blogsController.getAllBlogs)

// update blogs by query
router.put("/blogs/:blogId", blogsController.updateBlogsById)

// delete by id
router.delete("/blogs/:blogId", blogsController.deleteBlogsById)

// delete by query
router.delete("/blogs", blogsController.deleteBlogsByQuery)






// if api is invalid
router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        msg: "The api you request is not available"
    })
})


module.exports = router;