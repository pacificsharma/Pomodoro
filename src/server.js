const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.get('/', function(req, res) {
  const pathToHtmlFile = path.resolve(__dirname, '../dist/index.html');
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, 'utf-8');
  res.send(contentFromHtmlFile);
});

app.use('/', express.static(path.resolve(__dirname, '../dist')));

app.listen(14000, function() {
  console.log('Application is running on http://localhost:14000');
});