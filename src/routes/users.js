var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('index', { content: 'Hom nay hoan thanh part 1', name: 'Ngoc Quyen', title: 'Express' });
});

module.exports = router;
