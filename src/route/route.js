const express = require('express');
const router = express.Router();

const blogscontroller=require("../controller/blogscontroller")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



//router.get("/allBlogs",blogscontroller.getAllBlogs)

router.delete("/blogs/:blogId",blogscontroller.deleteBlogsById)















module.exports = router;