const express = require('express');
const app = express();
const fs = require('fs');
const bodyParser = require('body-parser');
const port = 8080;

const databaseFile = './resources/laposte_hexasmal.json';

/*
    Unsolved issue:
    When database is modified if you restart server.js, databaseFile is unparsable by JSON.
*/

// Encoding UTF-8 avoid me some problems.
var database = JSON.parse(fs.readFileSync(databaseFile, {encoding: 'UTF-8'}));

function getCitiesByCodePostal(code) {
    result = [];

    for (i in database) {
        if (database[i].fields.code_postal == code) {
            result.push(database[i]);
        }
    }
    return result;
}

// Maybe log if modification is not a success ?
function modifyCity(recordid, key, value) {
    for (item in database) {
        if (database[item].recordid == recordid) {
            database[item]['fields'][key] = value;
            fs.writeFile(databaseFile, JSON.stringify(database), {encoding: 'UTF-8'}, function writeJSON(err) {
                if (err) return console.log(err);
            });
            return;
        }
    }
}

function deleteCity(recordid) {
    for (item in database) {
        if (database[item].recordid == recordid) {
            delete database[item];
            fs.writeFile(databaseFile, JSON.stringify(database), {encoding: 'UTF-8'}, function writeJSON(err) {
                if (err) return console.log(err);
            });
            return;
        }
    }
}

// Needed to get data from request.body.
app.use(express.urlencoded())

// Gestion des vues par EJS.
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('pages/index');
});

app.get('/cities', (req, res) => {
    res.render('pages/cities', {
        // Give database here is probably risky.
        cities: database
    })
});

app.get('/search', (req, res) => {
    res.render('pages/search', {
        // No result by default. It's probably a bad practice ?
        result: []
    });
});

app.post('/search', (req, res) => {
    // Maybe treat invalide format here.
    var code = req.body.code_postal;

    res.render('pages/search', {
        result: getCitiesByCodePostal(code)
    });
});

app.get('/modify', (req, res) => {
    res.render('pages/modify', {
        result: []
    });
});

app.post('/modify', (req, res) => {
    var code = req.body.code_postal;

    // Need to change only field where button is pressed.
    Object.entries(req.body).forEach(([key, value]) => {
        // Searching modified data from input.
        if (value != "" && key != "code_postal") {
            var info = key.split('-');
            modifyCity(info[1], info[0], value);
        }
    });

    res.render('pages/modify', {
        result: getCitiesByCodePostal(code)
    });
});

app.get('/delete', (req, res) => {
    res.render('pages/delete', {
        result: []
    });
});

app.post('/delete', (req, res) => {
    var code = req.body.code_postal;

    Object.entries(req.body).forEach(([key, value]) => {
        // Delete checked box.
        if (key.split('-')[0] == 'recordid' && value == 'on') {
            var info = key.split('-');
            deleteCity(info[1]);
        }
    });

    res.render('pages/delete', {
        result: getCitiesByCodePostal(code)
    });
});

app.listen(port, () => console.log("Listening on port: %d!", port));
