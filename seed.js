var mongoose = require("mongoose");
var db = require("./server/database");
var Article = db.Article;


article = new Article(
	{
    title : 'More Than Enough',
    author: 'Bo Jackson',
    category: 'Sports',
    img: 'path/to/img/pic.img',
    text: "Fashion axe before they sold out sartorial occupy, gastropub Blue Bottle photo booth hoodie 90's fap. Before they sold out slow-carb keffiyeh Intelligentsia letterpress, seitan cronut put a bird on it swag. Bitters narwhal single-origin coffee iPhone. Irony migas flannel gastropub pour-over. Lomo Portland four loko, sartorial Pinterest McSweeney's freegan. Master cleanse Austin street art hella cardigan, yr meggings umami lumbersexual ugh Intelligentsia readymade Helvetica normcore wayfarers. Tumblr plaid kale chips quinoa polaroid.",
    likes: 10,
    comments: "Comment Comment Comment, Comment Comment Comment. Comment Comment Comment, Comment Comment Comment, Comment Comment Comment."
  });
article.save(function(data){console.log("created user in Seed")})

console.log(article);
module.exports = article;