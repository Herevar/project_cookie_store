const express = require('express');
const { cookie_base, cookie_add } = require('../data/cookie_data');
const homeRouter = express.Router();


homeRouter
    .get('/', (req,res)=>{
    res.render('home_file/home' ,{
        cookie: {
            base: 'light',
            addon : ['coconut'],
        },
        bases : Object.entries(cookie_base),
        adds : Object.entries(cookie_add)
    })
})

module.exports = {homeRouter}