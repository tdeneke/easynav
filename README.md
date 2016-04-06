# About
easynav is a Restful API for adding and searching POIs (Point of Interests)

# API 
|Method   |URI                  |Action                             |
|---------|---------------------|-----------------------------------|
|GET      |/pois                |Retrieve list of POIs              |
|GET      |/users               |Retrieve list of users*            |
|POST     |/pois                |Create a new POI                   |
|POST     |/users               |Create a new user                  |
|PUT      |/pois/id             |Update an existing POI             |
|DELETE   |/pois/id             |delete an existing POI             |

# Data Model
Two collections (tables in SQL sense), users and pois. A user has username 
and password as its fields. A pois has name, type, description, longitude,
latitude, altitude, floorNumber, floorPlan, userId. For a better data model 
some of the fields can be separated in to another table (collection). 

# Technology Choices
As a choice of technology we used Node as our runtime, Express as our web 
framework, Mongoose to interact with MongoDB, Passport for authentication.  

Among the many reasons one needs to consider using Node include being fast. 
This is attributed to V8 compiler which compiles JS code in to native machine 
code. It is based on event loop where a single thread is used to perform all IO 
operations asynchronously. This is good for memory than using multiple threads. 
In addition all developments from front end to back end can be done using JS.
Even the data persistence layer can be done in JS using frameworks like Mongoose.
Tools such as the node package manager npm are also another factor for using node. 


# Install
install node (https://nodejs.org/en/)
install mangodb (https://www.mongodb.org/)
npm install 

# Running 
node server.js

# Test 
curl -H "Content-Type:application/json" -X POST http://localhost:3000/api/users -d '{"username":"test", "password":"letmein"}'

curl --user test:letmein -X GET http://localhost:3000/api/users

curl --user test:letmein -H "Content-Type:application/json" -X POST http://localhost:3000/api/pois -d '{"name":"my friends current location", "type":"dynamic", "description":"my friend current location", "longitude":"60.4642327079944", "latitude":"60.4642327079944", "altitude":"", "floorNumber":"1", "floorPlan":""}'

curl --user test:letmein -H "Content-Type:application/json" -X POST http://localhost:3000/api/pois -d '{"name":"nearest elevator", "type":"static", "description":"nearest elevator", "longitude":"60.4642327079944", "latitude":"60.4642327079944", "altitude":"", "floorNumber":"1", "floorPlan":""}'

curl --user test:letmein -X GET http://localhost:3000/api/pois


