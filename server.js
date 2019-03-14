const express = require('express');
const app = express();
const port = process.env.PORT || 3002;

app.use('/:ticker', express.static('public'));

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});