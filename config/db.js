const db = {
  config: {
    url: 'mongodb://nono:mongodb69@ds119996.mlab.com:19996/ringside-user',
    options: {
      connectTimeoutMS: 5000,
      useNewUrlParser: true
    }
  },
  users: require('./models/users'),
  wods : require('./models/wods'),
};

module.exports = db;
