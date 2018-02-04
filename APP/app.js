const port = 5050;
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(express.static(__dirname + '/views'));
//Store all HTML files in view folder.
app.use(express.static(__dirname + '/public'));
//Store all JS and CSS in Scripts folder.

app.get('*', (req, res) => {
    res.sendFile('/index.html');
});

app
  .listen(port, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log('Listening on port: ' + port + '.')
    }
  });