const express = require('express');
const configuratorRouter = express.Router();


configuratorRouter
    .get('/asd', (req,res)=>{
    res.send('router dziala')
})

module.exports = {configuratorRouter}