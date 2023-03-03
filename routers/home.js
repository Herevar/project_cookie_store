const express = require('express');
const homeRouter = express.Router();


homeRouter
    .get('/', (req,res)=>{
    res.render('home_file/home' ,{
        cookie: {
            base: 'light',
            addon : ['coconut'],
        }
        
        
    })
})

module.exports = {homeRouter}