//Dependencies 
var restful = require('node-restful');
var mongoose = restful.mongoose;

//Stock Schema
var stockSchema = new mongoose.Schema({
    symbol: String,
    HQLocation: String,
    open: Number,
    close: Number,
    high: Number,
    low: Number,
    bullMarket: Boolean,
    futures: String
})


//Return model
module.exports = restful.model('Products', stockSchema);