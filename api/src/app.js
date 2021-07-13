const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');
const axios = require('axios').default;

require('./db.js');

const server = express();
server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

const activities = [{
  'id': 2,
  'name': 'Dummy Activity',
  'difficulty': '🥵🥵⚫⚫⚫',
  'elapsed-time': 30,
  'season': 'All',
}];

server.use('/', routes);

// Main route (Promise style)
server.get('/countries', (req, res) => {
  axios.get('https://restcountries.eu/rest/v2/all')
    .then(response => res.json(response.data))
    .catch(error => res.status(500).json({error: 'Error 500: Cannot fetch API.'}));
})

/* This is not working...
server.get('/activities', (req, res) => {
  axios.get('https://localhost:3001/activities')
    .then(response => { res.json([...activities])})
    .catch(error => res.status(500).json({error: 'Error 500: Cannot fetch API.'}))
})
*/


//Country Detail (Async function) (NOT wORKING)
server.get('/countries/:alpha3Code', async (req, res) => {
  const country = await axios.get(`https://restcountries.eu/rest/v2/alpha/${req.params.alpha3Code}`);
    res.json(country.data);
})


// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
