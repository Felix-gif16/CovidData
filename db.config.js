const mongoose = require('mongoose');

const url = "mongodb://localhost:27017/Covid19Data";

mongoose.connect(url, {
    useUnifiedTopology:true,
    useNewUrlParser:true,
});

const schema = mongoose.Schema({
    Country_Region: String,
    Confirmed: Number,
    Active: Number,
    Deaths:Number,
    Recovered:Number,
    
    
});


const Data = mongoose.model('Data', schema);

module.exports = Data;