const express = require('express');
//const {route} = require('express/lib/application');
const router = express.Router();

const authorController = require("../controller/authorControllers")
const blogsController = require("../controller/blogsController")
const auth = require("../middleware/authorization")

// create author
router.post("/createAuthors", authorController.createAuthor)

//create post login with jwt token as output
router.post("/login", authorController.authorLogin)

// create blogs
router.post("/blogs", auth, blogsController.createBlogs)

// get all blogs by query
router.get("/blogs", auth, blogsController.getAllBlogs)

// update blogs by query
router.put("/blogs/:blogId", auth, blogsController.updateBlogsById)

// delete by id
router.delete("/blogs/:blogId", auth, blogsController.deleteBlogsById)

// delete by query
router.delete("/blogs", auth, blogsController.deleteBlogsByQuery)






// if api is invalid OR wrong URL
router.all("/**", function (req, res) {
    res.status(404).send({
        status: false,
        msg: "The api you request is not available"
    })
})


module.exports = router;