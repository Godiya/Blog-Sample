const express = require('express');
const router = express.Router();
const blogCntrl = require ('../controllers/blog.controllers');
var mySub = [{id:4, category:'comments'}]
/* GET home page. */

router.get ('/', blogCntrl.getSub);
router.post ('/:id', blogCntrl.postSub);
router.put ('/:id', blogCntrl.putSub);
router.delete ('/:id', blogCntrl.deleteSub);

module.exports = router;
