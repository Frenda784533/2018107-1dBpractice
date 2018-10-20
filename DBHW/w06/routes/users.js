var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send('respond with a resource');
    res.json([{
        id: 1,
        username: "朱詠琪"
    }, {
        id: 2,
        username: "李卓諺、黃家豪"
    }]);
});

module.exports = router;