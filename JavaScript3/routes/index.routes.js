const {Router} = require('express');
const router = Router();
const {renderIndex, renderAbout, renderDetail, renderAdd, renderDelete} = require('../controllers/index.controller')


router.get('/', renderIndex);

router.get('/about', renderAbout);

router.get('/detail', renderDetail);

router.get('/delete', renderDelete);

// router.get('/add', renderAdd);

module.exports = router;