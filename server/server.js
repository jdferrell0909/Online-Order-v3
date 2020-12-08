const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 5000;

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './src/template.html'));
});

app.get('/api', (req, res) => {
  res.send('RESPONSE SENT');
});

app.listen(PORT, () => {
  console.log('server running.... 5000');
})