const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const cors = require('cors');
const port = 4000;
const app = express();


// Right now just for testing pasting here later on will make .env file to hide this info
mongoose.connect('mongodb+srv://adicube:adicube@cluster0.1ndxv.mongodb.net/Brand?retryWrites=true&w=majority', ()=>console.log("Data connected"));


app.use(express.json())
app.use(cors())
app.use('/', router)

// mongoose schema

const brandSchema = new mongoose.Schema({
    Firstname: String,
    Lastname: String,
    Email: String,
    Number: Number,
    CompanyName: String,
    CampaignBudget: Number, 
    LaunchTiming: String,
    LoginId: String,
    Password: String
})

const brand = mongoose.model('Brand', brandSchema)


router.post('/' , (req, res)=>{
    console.log(req.body);
    const data = new brand(req.body);
    data.save().then(()=>{
        req.send("The item saved")
    }).catch(()=>{
        res.status(400).send("Data not saved")
    });
})

app.listen(port, ()=>{
    console.log(`successfull listening at ${port}`)
}) 








// app.get('/', function(req, res){
//    console.log("Hello")
//    res.send("Hello there")
// });

// app.post('/' , (req, res)=>{
//     console.log(req.body);
//     var data = new Brand(req.body);
//     data.save().then(()=>{
//         req.send("The item saved")
//     }).catch(()=>{
//         res.status(400).send("Data not saved")
//     });
// })