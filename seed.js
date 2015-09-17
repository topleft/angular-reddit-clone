var mongoose = require("mongoose");
var mongoose = require('mongoose-q')(require('mongoose'), {spread:true});

var db = require("./server/database");
var Article = db.Article;

function createArticle(title, author, img, category, likes){
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
				    img: img,
				    text: "Fashion axe before they sold out sartorial occupy, gastropub Blue Bottle photo booth hoodie 90's fap. Before they sold out slow-carb keffiyeh Intelligentsia letterpress, seitan cronut put a bird on it swag. Bitters narwhal single-origin coffee iPhone. Irony migas flannel gastropub pour-over. Lomo Portland four loko, sartorial Pinterest McSweeney's freegan. Master cleanse Austin street art hella cardigan, yr meggings umami lumbersexual ugh Intelligentsia readymade Helvetica normcore wayfarers. Tumblr plaid kale chips quinoa polaroid.",
				    likes: likes,
				    comments: [{user: "John", comment: "Great stuff here. Unctuous story."}],
				  });
				article.save(function(data){console.log("created user in Seed")});
			}
		});
}


createArticle('More Than Enough', 
							'Bo Jackson',
							'http://www.bagofchipps.com/wp-content/uploads/2013/07/bo-jackson-nike.jpg', 
							'Sports', 
							10);
createArticle('Cooking with Polly', 
							'Polly Pantalones', 
							'http://g01.a.alicdn.com/kf/HTB1ojfMIpXXXXcCXpXXq6xXFXXXx/Women-Men-Restaurant-Uniforms-font-b-pants-b-font-font-b-Kitchen-b-font-Trouser-Chef.jpg',
							'Food', 
							4);
createArticle('Money Makes Cents', 
							'Jack Eatabutte',
							'http://robertkaplinsky.com/wp-content/uploads/2013/04/money_1_large.jpg', 
							'Money', 
							8);
createArticle('Baseball and Diamonds', 
							'Rickey Henderson',
							'http://cdn.rsvlts.com/wp-content/uploads/2013/10/U.S.-Cellular-Field.jpg', 
							'Sports', 
							7);
createArticle('Top Ten Food Trucks', 
							'Hillary Clinton', 
							'http://auxiliary.georgetown.edu/sites/auxiliary/files/styles/hero_image/public/food%20trucks.jpg?itok=frQR6GdV',
							'Food', 
							3);

// module.exports = articles;

