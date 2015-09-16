var express = require('express');
var router = express.Router();
var crud = require("../utilities/crud.js");



router.get('/', function(req, res, next) {
	crud.handleGet(res);
});

router.put('/likes/:id/:likes', function(req, res, next){
	crud.handleUpdateLikes(req.params.id, req.params.likes, res);
});

module.exports = router;
