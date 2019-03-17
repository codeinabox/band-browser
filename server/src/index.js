'use strict';

const express = require('express');
const searchArtists = require('./queries/searchArtists');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/artists', (req, res) => {
  searchArtists(req.query.name).then(artists => res.json(artists));
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
