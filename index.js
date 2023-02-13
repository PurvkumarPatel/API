const express = require('express');
const bodyParser = require('body-parser');
const collection = require("./connection")
const app = express();
app.use(bodyParser.json());
app.use(express.json())



app.post('/report_crime', async (req, res) => {

const { type, location, details,code} = req.body;
  // You could add code here to validate the incoming data and save it to a database

  try{
    const check = await collection.findOne({Crime_Code:req.body.code})
    
    if(check.Crime_Code===req.body.code){
        res.json({
            STATUS : "Your Report successfully registed",
            Related_Crime_Branch_name : check.Related_Crime_Branch_name,
            Related_Crime_Officer_number : check.Related_Crime_Officer_number
        });
    }
        }
        catch{
    res.json({ERROR : "wrong details but no worrry we try to help you"})
        }
    
  
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
