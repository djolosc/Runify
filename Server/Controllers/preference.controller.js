const Preference = require('../Models/preference.model');

exports.getAllRoutes = async (req, res) => {
  try {
    const events = await Preference.find();
    res.send(events);
    res.status(200);
  } catch (error) {
    console.log(error);
    res.sent(error);
    res.status(500);
  }
};

exports.postRoute = async (req, res) => {
  try {
    const { km, scenery, route } = req.body;
    const event = await Event.create({ km, scenery, route });
    res.send(event);
    res.status(200);
  } catch (error) {
    console.log(error); //eslint-disable-line no-console
    res.send(error);
    res.status(500);
  }
};
