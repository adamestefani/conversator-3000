const express = require('express');
const app = express();
const package = require('./package.json');
const sendMessageOpenAI = require('./src/sendMessageOpenAI');

app.use(express.json());

app.get('/health', (req, res) => {
  res.send({
    status: 'running',
    port: process.env.PORT,
    version: package.version,
  });
});

app.post('/sendMessageOpenAI', async (req, res) => {
  const { username, inputMessage } = req.body;
  const response = await sendMessageOpenAI(username, inputMessage);
  res.send(response);
});

app.listen(process.env.PORT);
console.log('Listening: port', process.env.PORT);
