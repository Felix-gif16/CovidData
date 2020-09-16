const mongodb = require("mongodb").MongoClient;
const csvtojson = require("csvtojson");
const uri =' mongodb+srv://Cobbinah:qdzIm33l2FBmS6Hd@cluster0.wxnea.gcp.mongodb.net/Covid19Data?retryWrites=true&w=majority'

//let uri = "mongodb://localhost:27017/Covid19Data";

csvtojson()
  .fromFile("covid19data.csv")
  .then(csvData => {
    console.log(csvData);

    mongodb.connect(
      uri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      (err, client) => {
        if (err) throw err;

        client
          .db("Covid19Data")
          .collection("datas")
          .insertMany(csvData, (err, res) => {
            if (err) throw err;

            console.log(`Inserted: ${res.insertedCount} rows`);
            client.close();
          });
        }
        );
      });