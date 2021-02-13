const express = require('express');
const path = require('path');
const fdRouter = require('./routers/fdRouter');
const hmRouter = require('./routers/hmRouter');
const mRouter = require('./routers/mRouter');
const adRouter = require('./routers/adRouter');

const app = express();

app.use( express.json() );
app.use( express.urlencoded( { extended: true } ));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/frontDesk', fdRouter);
app.use('/maintenance', hmRouter);
app.use('/management', mRouter);
app.use('/admin', adRouter);

app.get('/', (req, res)=>{
  res.sendFile(path.join( __dirname, build, './../client/dist/index.html' ));
});

module.exports = app;
