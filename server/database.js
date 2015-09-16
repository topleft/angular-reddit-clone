var mongoose = require('mongoose');
var Schema   = mongoose.Schema;
console.log("in DB")

// var userSchema = new Schema({
// 	name: String,
// 	email: String,
// 	password: String
// });

// var commentSchema = new Schema({
// 		user: [userSchema],
// 		comment: String
// 	}
// );

var articleSchema = new Schema(
  {
    title : String,
    author: String,
    category: String,
    img: String,
    text: String,
    likes: Number,
    comments: String
  }
);


// var User = mongoose.model('User', userSchema);
// var Comment = mongoose.model('Comment', commentSchema);
var Article = mongoose.model('Article', articleSchema);

module.exports = {
	Article: Article,
	// Comment: Comment,
	// User: User
}

mongoose.connect('mongodb://localhost/article-database');