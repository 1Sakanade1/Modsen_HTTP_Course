const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('OK');
});

app.get('/error', (req, res) => {
  res.status(500).send('Internal Server Error');
});

app.get('/notfound', (req, res) => {
  res.status(404).send('Not Found');
});

app.get('/redirect', (req, res) => {
  res.status(302).redirect('/');
});

app.get('/badrequest', (req, res) => {
  res.status(400).send('Bad Request');
});

app.get('/unauthorized', (req, res) => {
  res.status(401).send('Unauthorized');
});

app.get('/forbidden', (req, res) => {
  res.status(403).send('Forbidden');
});

app.get('/notallowed', (req, res) => {
  res.status(405).send('Method Not Allowed');
});

app.get('/continue', (req, res) => {
  res.status(100).send('Continue');
});

app.listen(3000, () => {
  console.log('Server is listening on 3000');
});



//чтобы получить все статусы в постмане набирай http://localhost:3000/{путь}