const express = require('express');
const router = express.Router();
const blogCntrl = require ('../controllers/blog.controllers');
var myPosts = [{id:4, category:'comments'}]
/* GET home page. */

router.get ('/', blogCntrl.getPost);
router.post ('/:id', blogCntrl.postPost);
router.put ('/:id', blogCntrl.putPost);
router.delete ('/:id', blogCntrl.deletePost);

module.exports = router;

