const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);
const dbConnection = require('../database');

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../public`));

app.get(`/catgeories`, (req, res) => {
  dbConnection.connect();
  dbConnection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.log(`ERROR: ${err}`)
    } else {
      console.log(results);
    }
  });
  dbConnection.end();
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