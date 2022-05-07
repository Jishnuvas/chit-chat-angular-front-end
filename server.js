
//imports
const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');
const proxy = require('express-http-proxy');
const path = require('path');

const app = express();

//parses for post data
app.use(bodyParser.json({limit:'20mb'})); 
app.use(bodyParser.urlencoded({limit:'20mb', extended: true}));

//cors
app.use(cors());

//point static path to dist
app.use(express.static(path.join(__dirname, 'dist/chit-chat')));

// set our api route proxy to point to a spring boot server
app.use('/server',proxy('http://localhost:8080'))

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/chit-chat/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
 const port = '8000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on ${port}`));