# About
easynav is a Restful API for adding and searching POIs (Point of Interestes)

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

# Technology Choices

# Install
npm install

# Running 
node server.js

# Test 
curl -d "username=test2&password=letmein" -X POST http://localhost:3000/api/users

