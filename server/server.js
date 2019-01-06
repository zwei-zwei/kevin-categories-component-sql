const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const db = require('../database');

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../public`));

app.get('/categories-module/users', (req, res) => {
  db.connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      res.send(error);
    } else {
      console.log(JSON.parse(JSON.stringify(results)));
      res.send(JSON.parse(JSON.stringify(results)));
    }
  });
});

app.get('/categories-module/games', (req, res) => {
  db.connection.query('SELECT * FROM games', (error, results, fields) => {
    if (error) {
      res.send(error);
    } else {
      res.send(JSON.parse(JSON.stringify(results)));
    }
  });
});

app.get('/categories-module/videos', (req, res) => {
  db.connection.query('SELECT * FROM videos', (error, results, fields) => {
    if (error) {
      res.send(error);
    } else {
      res.send(JSON.parse(JSON.stringify(results)));
    }
  });
});

app.get('/categories-module/clips', (req, res) => {
  db.connection.query('SELECT * FROM clips', (error, results, fields) => {
    if (error) {
      res.send(error);
    } else {
      res.send(JSON.parse(JSON.stringify(results)));
    }
  });
});

// port assignment needs re-writing
// to adjust for deployment
const port = 1128;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
});