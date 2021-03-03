const { Schema, model } = require('mongoose');

const RunningSchema = new Schema({
  km: { type: Number },
  scenery: { type: String },
  route: { type: String },
});

module.exports = model('runningModel', RunningSchema);
