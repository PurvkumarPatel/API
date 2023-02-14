var sid = 'ACfcbef58c13b67adc7e2bafdd313f7769';
var auth_token = '9631cbe713cdb6e671b8cbcdbc72e0b5';
const express = require('express');
const bodyParser = require('body-parser');
const collection = require("./connection")
const app = express();
app.use(bodyParser.json());
app.use(express.json())
var twilio = require("twilio")(sid, auth_token);


app.post('/report_crime', async (req, res) => {

const { type, location, details,code,phone_number} = req.body;
  // You could add code here to validate the incoming data and save it to a database

  try{
    const check = await collection.findOne({Crime_Code:req.body.code})
    
    if(check.Crime_Code===req.body.code){
      twilio.messages
    .create({
      from: "+15618165682",
      to: req.body.phone_number,
      body: "WE HELPING YOU AS SOON AS POSSIBLE",
    })
    .then(function(res) {console.log("message has sent!")})
    .catch(function(err)  {
      console.log(err);
    });
        res.json({
            STATUS : "Your Report successfully registed",
            Related_Crime_Branch_name : check.Related_Crime_Branch_name,
            Related_Crime_Officer_number : check.Related_Crime_Officer_number,
            SMS : "We also send you a sms to you check it out" 
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


//RsStkRvz8LIMequi9vxfWJp-RjCCB7_7TvBAUdiz