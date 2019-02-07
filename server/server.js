const express = require(`express`);
const bodyParser = require(`body-parser`);
const cors = require('cors');
const Video = require('../database/index');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(express.static(`${__dirname}/../public`));

//GET requests
app.get('/recent-broadcasts', (req, res) => {
  Video.findAll({
    limit: 100,
    order: [ ['video_id', 'DESC'] ]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => console.log(err));
});

app.get('/recent-highlights', (req, res) => {
  Video.findAll({
    limit: 100,
    order: [ ['video_id', 'DESC'] ]
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => console.log(err));
});

//POST requests
app.post('/add-video', (req, res) => {
  if (!req.body) {
    console.log('Not Found');
  } else {
    Video.create()
    .then(video => res.sendStatus(201).json(video))
    .catch(err => console.log(err));
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
});