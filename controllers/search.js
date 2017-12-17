var Hotels = require('../models/hotel');
var bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bodyParser.json());

    app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

    app.get('/api/search/:hotelName', function (req, res) {
        Hotels.find( { name: req.params.hotelName },
            function (err, hotels) {
                if (err) throw err;
                res.send(hotels);
            } 
        ); 

    });249942

    app.get('/api/search/id/:id', function (req, res) {
        Hotels.find( { id: req.params.id },
            function (err, hotels) {
                if (err) throw err;
                res.send(hotels);
            } 
        ); 

    });

    app.get('/api/search/:stars', function (req, res) {
        Hotels.find( { stars: req.params.stars },
            function (err, hotels) {
                if (err) throw err;
                res.send(hotels);
            } 
        ); 

    });

    
}