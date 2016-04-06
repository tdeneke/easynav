// Load required packages
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var poiController = require('./controllers/poi');
var userController = require('./controllers/user');
var authController = require('./controllers/auth');

// Connect to the easynav MongoDB
mongoose.connect('mongodb://localhost:27017/easynav');

// Create our Express application
var app = express();

// Use the body-parser package in our application
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse application/json
app.use(bodyParser.json())

// Use the passport package in our application
app.use(passport.initialize());

// Create our Express router
var router = express.Router();

// Create endpoint handlers for /pois
router.route('/pois')
  .post(authController.isAuthenticated, poiController.postPois)
  .get(authController.isAuthenticated, poiController.getPois);

// Create endpoint handlers for /pois/:poi_id
router.route('/pois/:poi_id')
  .get(authController.isAuthenticated, poiController.getPoi)
  .put(authController.isAuthenticated, poiController.putPoi)
  .delete(authController.isAuthenticated, poiController.deletePoi);

// Create endpoint handlers for /users
router.route('/users')
  .post(userController.postUsers)
  .get(authController.isAuthenticated, userController.getUsers);

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(3000);
