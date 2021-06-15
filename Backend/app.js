const express = require("express");
const dotenv = require("dotenv")
const cors = require('cors');
const PORT = 4000;
const app = express();

dotenv.config({path:'/config.env'})
// const PORT = process.env.PORT

require('./connection') // conection to router

app.use(express.json()) // to understand the data to be in json

const Brand = require('./schema'); //link to schema

app.use(require('./router')) //link to router file

app.use(cors())

app.listen(PORT, ()=>{
    console.log(`successfull listening at ${PORT}`)
})