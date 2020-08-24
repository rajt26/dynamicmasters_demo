var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var debug = require('debug')('fileupload:server');
var http = require('http');
const port = 4200
const dynamicmasters = require('dynamicmasters')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

//MASTER CRUD OPERATION
app.post('/master/create', async (req, res) => {
    try {
        let params = {
            name: req.body.name,
            code: req.body.code,
        }
        let action = 'CREATE'
        let response = await dynamicmasters.master(action, params)
        return res.send(response)
    } catch (error) {
        console.log('error', error)
        res.send(error)

    }
})
app.post('/master/update', async (req, res) => {
    try {
        let params = {
            id: req.body.id,
            name: req.body.name,
            code: req.body.code,
        }
        let action = 'UPDATE'
        let response = await dynamicmasters.master(action, params)
        return res.send(response)
    } catch (error) {
        console.log('error', error)
        res.send(error)
    }
})
app.post('/master/softdelete', async (req, res) => {
    try {
        let params = {
            id: req.body.id,
        }
        let action = 'SOFTDELETE'
        let response = await dynamicmasters.master(action, params)
        return res.send(response)
    } catch (error) {
        console.log('error', error)
        res.send(error)
    }
})
app.post('/master/delete', async (req, res) => {
    try {
        let params = {
            id: req.body.id,
        }
        let action = 'DELETE'
        let response = await dynamicmasters.master(action, params)
        return res.send(response)
    } catch (error) {
        console.log('error', error)
        res.send(error)
    }
})
app.post('/master/view', async (req, res) => {
    try {
        let params = {
            id: req.body.id,
        }
        let action = 'VIEW'
        let response = await dynamicmasters.master(action, params)
        return res.send(response)
    } catch (error) {
        console.log('error', error)
        res.send(error)
    }
})
//COUNTRY CRUD OPERATION
app.post('/country/create', async (req, res) => {
    try {
        let params = {
            name: req.body.name,
            code: req.body.code
        }
        let action = 'CREATE'
        let response = await dynamicmasters.country(action, params)
        return res.send(response)
    } catch (error) {
        console.log('error', error)
        res.send(error)
    }
})
app.post('/country/update', async (req, res) => {
    try {
        let params = {
            id: req.body.id,
            name: req.body.name,
            code: req.body.code
        }
        let action = 'UPDATE'
        let response = await dynamicmasters.country(action, params)
        return res.send(response)
    } catch (error) {
        console.log('error', error)
        res.send(error)
    }
})
app.post('/country/softdelete', async (req, res) => {
    try {
        let params = {
            id: req.body.id,
        }
        let action = 'SOFTDELETE'
        let response = await dynamicmasters.country(action, params)
        return res.send(response)
    } catch (error) {
        console.log('error', error)
        res.send(error)
    }
})
app.post('/country/delete', async (req, res) => {
    try {
        let params = {
            id: req.body.id,
        }
        let action = 'DELETE'
        let response = await dynamicmasters.country(action, params)
        return res.send(response)
    } catch (error) {
        console.log('error', error)
        res.send(error)
    }
})
app.post('/country/view', async (req, res) => {
    try {
        let params = {
            id: req.body.id,
        }
        let action = 'VIEW'
        let response = await dynamicmasters.country(action, params)
        return res.send(response)
    } catch (error) {
        console.log('error', error)
        res.send(error)
    }
})
//STATE CRUD OPERATION
app.post('/state/create', async (req, res) => {
    try {
        let params = {
            name: req.body.name,
            countryId: req.body.countryId
        }
        let action = 'CREATE'
        let response = await dynamicmasters.state(action, params)
        return res.send(response)
    } catch (error) {
        console.log('error', error)
        res.send(error)
    }
})
app.post('/state/update', async (req, res) => {
    try {
        let params = {
            id: req.body.id,
            name: req.body.name,
            countryId: req.body.countryId
        }
        let action = 'UPDATE'
        let response = await dynamicmasters.state(action, params)
        return res.send(response)
    } catch (error) {
        console.log('error', error)
        res.send(error)
    }
})
app.post('/state/softdelete', async (req, res) => {
    try {
        let params = {
            id: req.body.id,
        }
        let action = 'SOFTDELETE'
        let response = await dynamicmasters.state(action, params)
        return res.send(response)
    } catch (error) {
        console.log('error', error)
        res.send(error)
    }
})
app.post('/state/delete', async (req, res) => {
    try {
        let params = {
            id: req.body.id,
        }
        let action = 'DELETE'
        let response = await dynamicmasters.state(action, params)
        return res.send(response)
    } catch (error) {
        console.log('error', error)
        res.send(error)
    }
})
app.post('/state/view', async (req, res) => {
    try {
        let params = {
            id: req.body.id,
        }
        let action = 'VIEW'
        let response = await dynamicmasters.state(action, params)
        return res.send(response)
    } catch (error) {
        console.log('error', error)
        res.send(error)
    }
})
//CITY CRUD OPERATION
app.post('/city/create', async (req, res) => {
    try {
        let params = {
            name: req.body.name,
            stateId: req.body.stateId,
            countryId: req.body.countryId,
        }
        let action = 'CREATE'
        let response = await dynamicmasters.city(action, params)
        return res.send(response)
    } catch (error) {
        console.log('error', error)
        res.send(error)
    }
})
app.post('/city/update', async (req, res) => {
    try {
        let params = {
            id: req.body.id,
            name: req.body.name,
            stateId: req.body.stateId,
            countryId: req.body.countryId,
        }
        let action = 'UPDATE'
        let response = await dynamicmasters.city(action, params)
        return res.send(response)
    } catch (error) {
        console.log('error', error)
        res.send(error)
    }
})
app.post('/city/softdelete', async (req, res) => {
    try {
        let params = {
            id: req.body.id,
        }
        let action = 'SOFTDELETE'
        let response = await dynamicmasters.city(action, params)
        return res.send(response)
    } catch (error) {
        console.log('error', error)
        res.send(error)
    }
})
app.post('/city/delete', async (req, res) => {
    try {
        let params = {
            id: req.body.id,
        }
        let action = 'DELETE'
        let response = await dynamicmasters.city(action, params)
        return res.send(response)
    } catch (error) {
        console.log('error', error)
        res.send(error)
    }
})
app.post('/city/view', async (req, res) => {
    try {
        let params = {
            id: req.body.id,
        }
        let action = 'VIEW'
        let response = await dynamicmasters.city(action, params)
        return res.send(response)
    } catch (error) {
        console.log('error', error)
        res.send(error)
    }
})
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
// server.on('error', onError);
server.on('listening', onListening);



module.exports = app;

function onListening() {
    var addr = server.address();
    console.log('addr', addr)
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}



// mongoURI = mongodb://localhost:27017/DYNEMICMATERS
// PORT = 3000