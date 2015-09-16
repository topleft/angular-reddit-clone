var express = require('express');
var router = express.Router();
var crud = require("../utilities/crud.js");



router.get('/', function(req, res, next) {
	crud.handleGet(res);
});

router.put('/likes', function(req, res, next){
	crud.handleUpdateLikes(req.body.id, req.body.likes, res);
});

router.post('/new', function(req, res, next){
	console.log(req.body);
	crud.handlePost(req.body.title, req.body.author,req.body.category, req.body.img, req.body.text, res);
});



module.exports = router;
