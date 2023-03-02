const express = require('express');
const homeRouter = express.Router();


homeRouter
    .get('/', (req,res)=>{
    res.render('home_file/home')
})

module.exports = {homeRouter}