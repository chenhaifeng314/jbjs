// Generated by CoffeeScript 1.7.1
var Service;

load('packages/jb/db/mongo/app.js');

Service = function() {
  var mgr;
  mgr = new Manager('users');
  return {
    add: function(obj) {
      return mgr.add(obj);
    },
    list: function() {
      return mgr.list();
    }
  };
};
