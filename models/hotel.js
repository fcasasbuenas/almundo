var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hotelSchema = new Schema({
    
    "id": Number,
    "name": String,
    "stars": Number,
    "price": Number,
    "image": String,
    "amenities": [String] 
});

var Hotels = mongoose.model('Hotels', hotelSchema);

module.exports = Hotels;