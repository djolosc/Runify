const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/running_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});
