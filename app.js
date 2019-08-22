const http = require('http');
const express = require('express');
const path = require('path');
const ejs = require('ejs');

// starting Express.js app
const app = express();

// setting view engine, static files
app.set('view engine', 'ejs')
app.use('/static', express.static('static'))
app.use('/js', express.static('js'))

app.listen('3000', () => {
    console.log('Server started on port 3000')
});

app.get('/', (req, res)=> {
    res.render('index');
});
