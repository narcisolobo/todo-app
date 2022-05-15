const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/todoDb', {
  useNewUrlParser: true,
  useUnifiedTopology: true

})
  .then(() => console.log(`Connected to database: ${mongoose.connection.name}`))
  .catch(err => console.log('Could not connect to database.', err));