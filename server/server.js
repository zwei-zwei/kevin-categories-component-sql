const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const db = require('../database');

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../public`));

app.get('/popular', (req, res) => {
  db.connection.query('SELECT * FROM videos', (error, results, fields) => {
    if (error) {
      res.send(error);
    } else {
      //console.log(results);
      res.send(results);
    }
  });
});

// app.get('/recent', (req, res) => {
//   db.connection.query('SELECT * FROM videos', (error, results, fields) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send(JSON.parse(JSON.stringify(results)));
//     }
//   });
// });

// app.get('/clips', (req, res) => {
//   db.connection.query('SELECT * FROM videos', (error, results, fields) => {
//     if (error) {
//       res.send(error);
//     } else {
//       res.send(JSON.parse(JSON.stringify(results)));
//     }
//   });
// });

// port assignment needs re-writing
// to adjust for deployment
const port = 1128;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
});