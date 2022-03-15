const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

// const mysql = require('mysql2/promise');
// const dbConfig = require('./dbConfig');

const PORT = process.env.SERVER_PORT || 3000;

const app = express();

// set engine, defaul directory /views
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  // const keliasIIndex = path.join(__dirname, 'views', 'index.html');
  // // res.send('<h1>Hello express  </h1> ');
  // res.sendFile(keliasIIndex);
  res.render('index');
});

app.get('/about', (req, res) => {
  // const keliasIIndex = path.join(__dirname, 'views', 'about.html');
  // // res.send('<h1>Hello express  </h1> ');
  // res.sendFile(keliasIIndex);
  res.render('about');
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
