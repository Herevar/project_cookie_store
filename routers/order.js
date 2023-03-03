const express = require('express');
const orderRouter = express.Router();


orderRouter
    .get('/asd', (req,res)=>{
    res.send('router dziala')
})

module.exports = {orderRouter}