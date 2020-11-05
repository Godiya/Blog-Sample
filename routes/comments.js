const express = require('express');
const router = express.Router();
const blogCntrl = require ('../controllers/blog.controllers');
var myComment = [{id:4, category:'comments'}]
/* GET home page. */

router.get ('/', blogCntrl.getCom);
router.post ('/', blogCntrl.postCom);
router.put ('/', blogCntrl.putCom);
router.delete ('/', blogCntrl.deleteCom);

module.exports = router;
