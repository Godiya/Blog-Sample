const express = require('express');
const router = express.Router();
const blogCntrl = require ('../controllers/blog.controllers');
var myLike = [{id:4, category:'comments'}]
/* GET home page. */

router.get ('/', blogCntrl.getLike);
router.post ('/:id', blogCntrl.postLike);
router.put ('/:id', blogCntrl.putLike);
router.delete ('/:id', blogCntrl.deleteLike);

module.exports = router;
