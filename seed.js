var mongoose = require("mongoose");
var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});

var db = require("./server/database");
var Article = db.Article;

function createArticle(title, author, category, likes){
	Article.findQ()
		.then(function(data){
			if(data.length){
				return;
			} else {
				article = new Article(
					{
				    title : title,
				    author: author,
				    category: category,
				    img: 'path/to/img/pic.img',
				    text: "Fashion axe before they sold out sartorial occupy, gastropub Blue Bottle photo booth hoodie 90's fap. Before they sold out slow-carb keffiyeh Intelligentsia letterpress, seitan cronut put a bird on it swag. Bitters narwhal single-origin coffee iPhone. Irony migas flannel gastropub pour-over. Lomo Portland four loko, sartorial Pinterest McSweeney's freegan. Master cleanse Austin street art hella cardigan, yr meggings umami lumbersexual ugh Intelligentsia readymade Helvetica normcore wayfarers. Tumblr plaid kale chips quinoa polaroid.",
				    likes: likes,
				    comments: "Another functional tool which permits control over elements and words. The result can be copied or downloaded in plain text or HTML."
				  });
				article.save(function(data){console.log("created user in Seed")})
			}
		});
};


createArticle('More Than Enough', 'Bo Jackson', 'Sports', 10);
createArticle('Cooking with Polly', 'Polly Pantalones', 'Food', 4);
createArticle('Money Makes Cents', 'Jack Eatabutte', 'Money', 8);
createArticle('Baseball and Diamonds', 'Rickey Henderson', 'Sports', 7);
createArticle('Top Ten Food Trucks', 'Don Juan', 'Food', 3);

// module.exports = articles;

