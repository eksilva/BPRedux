const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

require('dotenv').config();

app.use('/', express.static(path.join(__dirname, '/../client/dist')));
app.use('/assets', express.static(path.join(__dirname, '/../client/src/assets')));

app.listen(port, () => {
  console.log(`BPRedux listening at http://localhost:${port}`)
})