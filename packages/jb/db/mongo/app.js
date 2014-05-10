// Generated by CoffeeScript 1.7.1
var BasicDBObject, Manager, Mongo;

Mongo = Packages.com.mongodb.Mongo;

BasicDBObject = Packages.com.mongodb.BasicDBObject;

Manager = function(name) {
  var collect, db, mg;
  mg = new Mongo();
  db = mg.getDB('temp');
  collect = db.getCollection(name);
  return {
    list: function() {
      var cur, _results;
      cur = collect.find();
      _results = [];
      while (cur.hasNext()) {
        _results.push(cur.next());
      }
      return _results;
    },
    add: function(obj) {
      var dbobj;
      dbobj = new BasicDBObject(obj);
      return collect.save(dbobj);
    },
    destory: function() {
      if (mg != null) {
        mg.close();
      }
      mg = null;
      return db = null;
    }
  };
};
