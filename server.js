const exp = require('constants');
const express = require('express')
const app = express()
const port = 3000

const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

const db = require('./db');

app.get('/', (req, res) => {

  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const apiRoutes = require('./routes/api');
app.use(express.json()); 
app.use('/api/usuario', apiRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})