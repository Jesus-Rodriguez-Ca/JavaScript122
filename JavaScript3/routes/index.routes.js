const {Router} = require('express');
const router = Router();
const {renderIndex, renderAbout, renderDetail, renderAdd, renderDelete} = require('../controllers/index.controller')
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/', renderIndex);

router.get('/about', renderAbout);

router.get('/detail',urlencodedParser, renderDetail);

// router.get('/delete', renderDelete);

// router.get('/add', renderAdd);

module.exports = router;