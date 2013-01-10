

module.exports.setup = function (app) {
  var soft = require(app.root+"/web/controllers/soft")
  app.get('/', soft.category);
  app.get('/:cate_1',soft.category)
  app.get('/:cate_1/',soft.category)
  app.get('/:cate_1/:cate_2',soft.category)
  
  app.post('/search',soft.search)
  app.get('/search',soft.category)
  
  app.post('/download',soft.download)
  app.get('/download',soft.category)
}