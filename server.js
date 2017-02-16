const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const db = require('./models');

app.listen(PORT, () => {
  db.sequelize.sync();
  console.log(`Server running at port: ${PORT}`);
});
