// Generated by CoffeeScript 1.7.1
var Router;

Router = function(app) {
  app.get('/a', function(req, res, ctrl) {
    print(req.queryParam('name'));
    return res.content(app.params(req).query('name')).end();
  });
  app.put('/{id}', function(req, res, ctrl) {
    return res.content(app.params(req).path('id')).end();
  });
  app.post('/', function(req, res, ctrl) {
    print(req.queryParam('name'));
    print(req.postParam('age'));
    return res.content(app.params(req).form('age')).end();
  });
  app.del('/', function(req, res, ctrl) {
    return res.content('del Hello World').end();
  });
  return app.head('/', function(req, res, ctrl) {
    return res.content('head Hello World').end();
  });
};
