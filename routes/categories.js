const express = require('express');
const router = express.Router();
const blogCntrl = require ('../controllers/blog.controllers');
var myArray = [{id:3, category:'home'}]

/* GET home page. */
router.get ('/', blogCntrl.getCat);
router.post ('/:id', blogCntrl.postCat);
router.put ('/:id', blogCntrl.putCat);
router.delete ('/:id', blogCntrl.deleteCat);

module.exports = router;

