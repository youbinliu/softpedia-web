

module.exports.setup = function (app) {
  var feed = require(app.root+"/web/controllers/feed")
  app.get('/', feed.menu);
  
  app.get('/feed/:cate_1/:cate_2',feed.category)
}