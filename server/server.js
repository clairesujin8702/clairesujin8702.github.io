const express = require('express');
const path = require('path');
const postRouter = require('./routers/postRouter');
const projectRouter = require('./routers/projectRouter');

const app = express();
app.use( express.json() );
app.use( express.urlencoded( { extended: true } ));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/post', postRouter);
app.use('/project', projectRouter);

app.get('/', (req, res)=>{
  res.sendFile(path.join( __dirname, build, './../client/dist/index.html' ));
});

module.exports = app;
