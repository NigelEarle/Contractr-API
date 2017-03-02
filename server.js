const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const PORT = process.env.PORT || 3000;
const db = require('./models');
const app = express();

// const { User } = db;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/api/register', (req, res) => {
  // create new user
  // User.create()
});

app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`Server running at port: ${PORT}`);
});
