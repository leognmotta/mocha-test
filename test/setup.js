const mongoose = require('mongoose');

function clearCollections(func) {
  for (let key in mongoose.connection.collections) {
    mongoose.connection.collections[key].deleteOne(function() {});
  }
  return func();
}

function closeDB() {
  mongoose.connection.close();
}

beforeEach(function(done) {
  if (mongoose.connection.readyState === 0) {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost:27017/testdb', { useNewUrlParser: true }, err => {
      if (err) throw err;
      return clearCollections(done);
    });
  } else {
    return clearCollections(done);
  }
});

after(done => {
  clearCollections(closeDB);
  done();
});
