var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});
var db = require("../database.js");


function handleGet(res){
	db.Article.findQ()
	.then(function(data) {res.json(data)})
	.catch(function(err) {res.send(err)})
	.done();
}

function handleGetOne(){

}

function handlePost(){

}


function handleUpdateLikes(id, totalLikes, res){
	var query = {_id: id};
	var update = {likes: totalLikes}
	var option = {new: true}
	db.Article.findOneAndUpdateQ(query, update, option)
	.then(function(data) {
		console.log(data);
		res.json(data);
	}).catch(function(err) {res.json(err)})
	.done();
}

function handleDelete(){

}

module.exports = {
	handleGet: handleGet,
	handleUpdateLikes: handleUpdateLikes
}