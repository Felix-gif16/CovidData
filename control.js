/*const db = require("./model");
const Data = db.data;

exports.findAll = (req, res) => {
    const Country_Region = req.query.Country_Region;
    var condition = Country_Region ? { 
        Country_Region: { 
            $regex: new RegExp(Country_Region), 
            $options: "i" } } : 
            {};

Data.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving data."
      });
    });
};*/