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
  const data = {
    title: 'Homepage 1',
    age: 25,
    jsFileName: 'main.js'
  };
  res.render('index', data);
});

app.get('/about', (req, res) => {
  const data = {
    title: 'About us',
    techArr: ['HTML', 'CSS', 'JS', 'Node'],
  };
  res.render('about', data);
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
