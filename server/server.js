const express = require(`express`);
const app = express();
const bodyParser = require(`body-parser`);

// port assignment needs re-writing
// to adjust for deployment
const port = 1128;

app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../public`));

app.get(`/catgeories`, () => {
  //fill me in
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

app.listen(port, () => {
  console.log(`listening on port ${port}`)
});