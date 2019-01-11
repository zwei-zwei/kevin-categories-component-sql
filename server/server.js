const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const db = require('../database');

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../public`));

app.get('/recent-broadcasts', (req, res) => {
  new Promise (function(resolve, reject) {
    db.connection.query('SELECT * FROM videos', (error, results, fields) => {
      if (error) {
        res.send(error);
      } else {
        resolve(results);
      }
    });
  })
    .then((results) => JSON.parse(JSON.stringify(results)))
    .then((data) => {
      data.sort((a, b) => { return a.created_at - b.created_at; });
      let recentBroadcasts = data.slice(0, 15);
      return res.send(recentBroadcasts);
    });
});

app.get('/recent-highlights', (req, res) => {
  new Promise(function (resolve, reject) {
    db.connection.query('SELECT * FROM videos', (error, results, fields) => {
      if (error) {
        res.send(error);
      } else {
        resolve(results);
      }
    });
  })
    .then((results) => JSON.parse(JSON.stringify(results)))
    .then((data) => {
      data.sort((a, b) => { return a.created_at - b.created_at; });
      let temp = data.slice(0, 50);
      temp.sort((a, b) => { return b.view_count - a.view_count; });
      let recentHighlights = temp.slice(0, 15);
      return res.send(recentHighlights);
    });
});

app.get('/popular-clips', (req, res) => {
  new Promise(function (resolve, reject) {
    db.connection.query('SELECT * FROM clips', (error, results, fields) => {
      if (error) {
        res.send(error);
      } else {
        resolve(results);
      }
    });
  })
    .then((results) => JSON.parse(JSON.stringify(results)))
    .then((data) => {
      data.sort((a, b) => { return b.view_count - a.view_count; });
      let popularClips = data.slice(0, 15);
      return res.send(popularClips);
    });
});

// port assignment needs re-writing
// to adjust for deployment
const port = 1128;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
});