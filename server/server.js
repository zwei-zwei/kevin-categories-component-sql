const express = require(`express`);
const bodyParser = require(`body-parser`);
const cors = require('cors');
const Video = require('../database/index');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../public`));

app.get('/recent-broadcasts', (req, res) => {
  Video.findAll({ limit: 50 })
    .then(data => {
      res.send(data);
    })
    .catch(err => console.log(err));
});

app.get('/recent-highlights', (req, res) => {
  Video.findAll({ limit: 50 })
    .then(data => {
      res.send(data);
    })
    .catch(err => console.log(err));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
});