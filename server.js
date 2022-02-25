const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

const port = process.env.PORT ||3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.disable('x-powered-by');

app.set('port', port)

server.listen(port, '10.0.0.1' || 'localhost', function() {
    console.log("App " + process.pid + " Started Ok! in Port " + port);
});

app.get('/',(req, res) => {res.send('Url Backend')});
app.get('/test',(req, res) => {res.send('Url Test')});

app.use((err, req, res, next) => {console.log(err); 
    res.status(err.status || 500).send(err.stack);
});