const express = require('express');
const router = express.Router();
const blogCntrl = require ('../controllers/blog.controllers');
var myUse = [{id:4, category:'comments'}]
/* GET home page. */

router.get ('/', blogCntrl.getUse);
router.post ('/:id', blogCntrl.postUse);
router.put ('/:id', blogCntrl.putUse);
router.delete ('/:id', blogCntrl.deleteUse);

module.exports = router;
