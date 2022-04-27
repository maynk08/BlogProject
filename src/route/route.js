const express = require('express');
const router = express.Router();

const authorController = require("../controller/authorControllers")
const blogscontroller = require("../controller/blogscontroller")


router.post("/blogs", blogscontroller.createBlogs)

router.post("/createAuthors",authorController.createAuthor)

router.delete("/blogs/:blogId", blogscontroller.deleteBlogsById)

router.delete("/blogs",blogscontroller.deleteBlogsByQuery)












module.exports = router;