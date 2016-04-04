// Load required packages
var Poi = require('../models/poi');

// Create endpoint /api/pois for POST
exports.postPoi = function(req, res) {
  // Create a new instance of the Poi model
  var poi = new Poi();

  // Set the poi properties that came from the POST data
  poi.name = req.body.name;
  poi.type = req.body.type;
  poi.description = req.body.description;
  poi.longitude = req.body.longitude;
  poi.latitude = req.body.latitude;
  poi.altitude = req.body.altitude;
  poi.floorNumber = req.body.floorNumber;
  poi.floorPlan = req.body.floorPlan;
  poi.userId = req.user._id;

  // Save the poi and check for errors
  poi.save(function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Poi added to the map!', data: poi });
  });
};

// Create endpoint /api/pois for GET
exports.getPois = function(req, res) {
  // Use the Poi model to find all pois
  Poi.find({ userId: req.user._id }, function(err, pois) {
    if (err)
      res.send(err);

    res.json(pois);
  });
};

// Create endpoint /api/pois/:poi_id for GET
exports.getPoi = function(req, res) {
  // Use the Poi model to find a specific poi
  Poi.find({ userId: req.user._id, _id: req.params.poi_id }, function(err, poi) {
    if (err)
      res.send(err);

    res.json(poi);
  });
};

// Create endpoint /api/pois/:poi_id for PUT
exports.putPoi = function(req, res) {
  // Use the Poi model to find a specific poi
  Poi.update({ userId: req.user._id, _id: req.params.poi_id }, { quantity: req.body.quantity }, function(err, num, raw) {
    if (err)
      res.send(err);

    res.json({ message: num + ' updated' });
  });
};

// Create endpoint /api/pois/:poi_id for DELETE
exports.deletePoi = function(req, res) {
  // Use the Poi model to find a specific poi and remove it
  Poi.remove({ userId: req.user._id, _id: req.params.poi_id }, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'Poi removed from the map!' });
  });
};
