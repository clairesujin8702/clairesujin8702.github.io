var app = require('./server.js');
var PORT = process.env.PORT || 2000;

app.listen( PORT, ()=>{ console.log(`listening on ${PORT}, visit: http://localhost:${PORT}`); });