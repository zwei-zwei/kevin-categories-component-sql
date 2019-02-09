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

app.get('/find-video', (req, res) => {
  if (!req.body) {
    console.log('Not Found');
  } else {
    const user = req.body.user_name;
    Video.findOne({
      where: {
        user_name: user
      }
    })
    .then(entry => res.send(entry))
    .catch(err => console.log(err));
  }
});

//POST request
app.post('/add-video', (req, res) => {
  if (!req.body) {
    console.log('Not Found');
  } else {
    Video.create(req.body)
    .then(video => {
      res.send(video);
    })
    .catch(err => console.log(err));
  }
});

// UPDATE request
app.put('/update-video', (req, res) => {
  if (!req.body) {
    console.log('Not Found');
  } else {
    const user = req.body.user_name
    Video.findOne({
      where: {
        user_name: user
      }
    })
    .then(entry => {
      entry.update({
        title: req.body.title
      })
      .then(video => res.send(video))
    })
    .catch(err => console.log(err));
  }
});

// DELETE request
app.delete('/delete-video', (req, res) => {
  if (!req.body) {
    console.log('Not Found');
  } else {
    const user = req.body.user_name
    Video.destroy({
      where: {
        user_name: user
      }
    })
    .then(console.log('Entry deleted!'))
    .catch(err => console.log(err));
  }
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`)
});