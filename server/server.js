const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const db = require('../database');
const faker = require('faker');
const user = require('../database/seedScript')

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

app.get('/fakes', (req, res) => {
  let fakeUsername = faker.random.word() + faker.internet.userName();
  let name = fakeUsername.replace(/ /, '');
  res.send();
});

// port assignment needs re-writing
// to adjust for deployment
const port = 1128;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
});