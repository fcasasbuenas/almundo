var config = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return 'mongodb://'+ config.username +':'+ config.password +'@ds245615.mlab.com:45615/almundo';
    }
    
}