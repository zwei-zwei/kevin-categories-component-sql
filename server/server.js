const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const db = require('../database');

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../public`));

app.get('/categories', (req, res) => {
  db.connection.query('SELECT * FROM users', (error, results, fields) => {
    if (error) {
      console.log(error);
    } else {
      console.log(results);
    }
  });
  res.end();
});

app.get(`/categories/getFromMain`, () => {
  //fill me in
});

app.post(`categories/writeToCats`, () => {
  //fill me in
});

app.put(`categories/writeToCats`, () => {
  //fill me in
});


// port assignment needs re-writing
// to adjust for deployment
const port = 1128;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
});