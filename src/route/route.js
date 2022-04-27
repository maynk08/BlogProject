const express = require('express');
const router = express.Router();

const blogscontroller = require("../controller/blogscontroller")

router.delete("/blogs/:blogId", blogscontroller.deleteBlogsById)

router.post("/blogs", blogscontroller.createBlogs)














module.exports = router;