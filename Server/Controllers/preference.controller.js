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
    console.log(req.params);
  } catch (error) {
    console.log(error);
    res.send(error);
    res.status(500);
  }
};

exports.getRoute = async (req, res) => {
  try {
    const { km, scenery } = req.params;
    const route = await Preference.findOne({ km: km, scenery: scenery });
    const routeName = route.route;
    res.send({ routeName });
    res.status(200);
  } catch (error) {
    console.log(error);
    res.send(error);
    res.status(500);
  }
};
