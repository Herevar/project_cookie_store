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
//wrenderowujemy home.hbs(strone głowną jakby) do main.hbs
// partiala 'previus-cookie' stworzonego z obrazka na backgroundzie pliku css wrzucamy do home.hbs
//w tym home.hbs dodajemy linki dalej do bazy i dodatków do ciastek bazując tablicy stworzonej z cookie_data
//helpersy w pliku głownym trzeba 'przezac' tj nazwe pliku helpersów




module.exports = {homeRouter}