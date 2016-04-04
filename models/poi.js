// Load required packages
var mongoose = require('mongoose');

// Define our poi schema
var PoiSchema   = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  //TODO: independent schema for geocoordinates   
  longitude: String,
  latitude: String, 
  altitude: String, 
  //TODO: independent schema for floor   
  floorNumber: Number, 
  floorPlan: String,  
  userId: String
});

// Export the Mongoose model
module.exports = mongoose.model('Poi', PoiSchema);
