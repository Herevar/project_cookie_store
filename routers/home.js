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
//w tym home.hbs dodajemy linki dalej do bazy i dodatków do ciastek bazując tablicy stworzonej z cookie_data.js
//helpersy w pliku głownym trzeba 'przekazac' tj nazwe pliku helpersów (po extname)
//helpersy robi w osobnym pliku .js jako funkcje - ktora pozniej wywołuje w hbs'ie
//uzywam funkcje w hbs'ie w {{funkcja dane}} przesyłajac dane (dane wysłane zostały renderem do hbs'a -> home)
//uzycie tej funkcji "wyrzucamy" do partials'a a pozniej tego partialsa uzywamy w hbsie po prostu

module.exports = {homeRouter}