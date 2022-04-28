const express = require('express');
const {
    route
} = require('express/lib/application');
const router = express.Router();

const authorController = require("../controller/authorControllers")
const blogscontroller = require("../controller/blogscontroller")


// create author
router.post("/createAuthors", authorController.createAuthor)

// create blogs
router.post("/blogs", blogscontroller.createBlogs)

// get all blogs by query
router.get("/blogs", blogscontroller.getAllBlogs)

// update blogs by query
router.put("/blogs/:blogId", blogscontroller.updateBlogsById)

// delete by id
router.delete("/blogs/:blogId", blogscontroller.deleteBlogsById)

// delete by query
router.delete("/blogs", blogscontroller.deleteBlogsByQuery)






// if api is invalid OR wrong URL
router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        msg: "The api you request is not available"
    })
})


module.exports = router;