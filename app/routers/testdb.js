// Generated by CoffeeScript 1.7.1
var Router;

load('app/services/testdb.js');

Router = function(app) {
  var svc;
  svc = new Service();
  app.get('/', function(req, res, ctrl) {
    var list;
    list = svc.list();
    return res.content(JSON.stringify(list)).end();
  });
  app.put('/{id}', function(req, res, ctrl) {
    return res.content(app.params(req).path('id')).end();
  });
  app.post('/', function(req, res, ctrl) {
    var user;
    user = {
      name: 'chf',
      age: 22
    };
    svc.add(user);
    return res.content(JSON.stringify(user)).end();
  });
  app.del('/', function(req, res, ctrl) {
    return res.content('del Hello World').end();
  });
  return app.head('/', function(req, res, ctrl) {
    return res.content('head Hello World').end();
  });
};
