const express = require('express');
const  Data= require('./db.config');
const data = require('./data');



app = express();

const url = "mongodb://localhost:27017/Covid19Data"; 






app.get('/', (req, res) =>{
    const country = req.query.country;

    if( country ){
        Data.find({Country_Region:country}, (err, docs) =>{
            if (err){
                return res.send().status(400);
            }
            return res.json(docs).status(200);
        });   
    }else{
        Data.find((err, docs)=>{
            if(err){
                return res.send().status(400);
            }
            return res.json(docs).status(200);
        });
    }

    
    
});

app.listen(process.env.PORT || 4000, () => {
    console.log('Server up and running...');
});