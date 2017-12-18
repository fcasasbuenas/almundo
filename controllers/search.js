var Hotels = require('../models/hotel');
var bodyParser = require('body-parser');

module.exports = function(app){
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true })); 

    app.get('/api/search/hotel', function (req, res) {
        Hotels.find( {} ,function (err, hotels) {
                if (err) throw err;
                res.send(hotels);
            } 
        );  

    });

    app.get('/api/search/hotel/name/:hotelName', function (req, res) {
        
        Hotels.find( { name: { $regex: req.params.hotelName} },
            function (err, hotels) {
                if (err) throw err;
                res.send(hotels);
            } 
        ); 
    });

    app.get('/api/search/hotel/stars/:stars', function (req, res) {
        Hotels.find( { stars: req.params.stars },
            function (err, hotels) {
                if (err) throw err;
                res.send(hotels);
            } 
        ); 
    });

    app.post('/api/search/hotel/', function (req, res) {           
        Hotels.find({ 
                name : { $regex: req.body.name }, 
                stars: req.body.stars 
            },
            function (err, hotels) {
                if (err) throw err;
                res.send(hotels);
            } 
        );
    });
    
}