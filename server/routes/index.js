var express = require('express');
var router = express.Router();
var crud = require("../utilities/crud.js");



router.get('/', function(req, res, next) {
	crud.handleGet(res);
});

router.put('/likes', function(req, res, next){
	crud.handleUpdateLikes(req.body.id, req.body.likes, res);
});

module.exports = router;
