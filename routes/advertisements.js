const express = require('express');
const router = express.Router();
const blogCntrl = require ('../controllers/blog.controllers');
var adverts = [{id:4, category:'Advertisements'}]

/* GET home page. */
router.get ('/', blogCntrl.getAdd);
router.post ('/', blogCntrl.postAdd);
router.put ('/', blogCntrl.putAdd);
router.delete ('/', blogCntrl.deleteAdd);

module.exports = router;


