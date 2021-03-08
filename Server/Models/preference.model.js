const { Schema, model } = require('mongoose');

const RunningSchema = new Schema({
  km: { type: Number },
  scenery: { type: String },
  route: { type: String },
  favourite: { type: Boolean },
  routeName: { type: String },
  description: { type: String },
  coordinates: [
    {
      latitude: { type: Number },
      longitude: { type: Number },
    },
  ],
  initialRegion: {
    latitude: { type: Number },
    longitude: { type: Number },
    latitudeDelta: { type: Number },
    longitudeDelta: { type: Number },
  },
});

module.exports = model('runningModel', RunningSchema);
