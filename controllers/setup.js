var Hotels = require('../models/hotel');
var initData = require('../data');


module.exports = function(app){
    app.get('/api/setup',function(req,res){

        var startData = initData;
        
        Hotels.create(startData, function (error, results) {
            res.send(results);            
        });

    });
}