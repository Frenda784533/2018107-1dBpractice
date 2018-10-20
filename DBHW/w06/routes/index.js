var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { name: '朱詠琪', id: '405730101' });
});

module.exports = router;