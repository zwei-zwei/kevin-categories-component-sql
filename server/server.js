const express = require(`express`);
const bodyParser = require(`body-parser`);
const cors = require('cors');
const db = require('../database/index');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../public`));

app.get('/recent-broadcasts', (req, res) => {
});

app.get('/recent-highlights', (req, res) => {
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
});