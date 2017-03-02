const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const passport = require('passport');
const BearerStrategy = require('passport-http-bearer').Strategy;

const PORT = process.env.PORT || 3000;
const db = require('./models');
const app = express();

const { User } = db;

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*'); // adjust to only client application IP on prod
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use(passport.initialize());
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

passport.use(new BearerStrategy(
  function (token, done) {
    User.findOne({ token: token }, function (err, user) {
      if (err) { return done(err); }
      if (!user) { return done(null, false); }
      return done(null, user, { scope: 'all' });
    });
  }
));

app.get('/api/someroute', passport.authenticate('bearer', { session: false }),
  (req, res) => {
    res.send('success!!!');
});

app.post('/api/register', (req, res) => {
  const {
    name,
    email,
    picture,
    token,
    facebook_id,
    google_id,
  } = req.body;

  const payload = {
    name,
    email,
    picture,
    token,
    facebook_id: facebook_id ? facebook_id : null,
    google_id: google_id ? google_id : null,
  };

  User.create(payload)
  .then((result) => {
    res.send(result);
  })
  .catch((err) => {
    res.send(err);
  });
});

app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`Server running at port: ${PORT}`);
});
