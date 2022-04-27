const express = require('express');
const router = express.Router();

const authorController = require("../controller/authorControllers")
const blogscontroller = require("../controller/blogscontroller")

router.delete("/blogs/:blogId", blogscontroller.deleteBlogsById)

router.post("/blogs", blogscontroller.createBlogs)

router.post("/createAuthors",authorController.createAuthor)













module.exports = router;