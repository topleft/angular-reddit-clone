var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var userSchema = new Schema({
	name: String,
	email: String,
	password: String
});

var commentSchema = new Schema({
		user: [userSchema],
		comment: String
	}
);

var articleSchema = new Schema(
  {
    title : String,
    author: String,
    category: String,
    img: String,
    text: String,
    likes: Number,
    comments: [commentSchema]
    // any other key value pairs
  }
);


var Article = mongoose.model('Article', articleSchema);

module.exports = Article;

mongoose.connect('mongodb://localhost/article-database');