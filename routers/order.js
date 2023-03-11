const express = require('express');
const { cookie_base, cookie_add } = require('../data/cookie_data');
const { getAddFromReq } = require('../utils/get_add_from_req');
const { handlebarsHelpers } = require('../utils/handlebars-helpers');
const orderRouter = express.Router();


orderRouter
    //po dopisaniu przekierowania w home.hbs do koszyka
    //w zasadzie kopia tego co w home js, bo na podstawie tego koszyk jest generowany
    .get('/summary', (req,res)=>{
    const {cookieBase} = req.cookies;
    const addons = getAddFromReq(req)
    
    const sum = (cookieBase ? handlebarsHelpers.priceFinder(Object.entries(cookie_base), cookieBase) : 0) 
    + addons.reduce((prev, curr)=> (prev+
    handlebarsHelpers.priceFinder(Object.entries(cookie_add), curr)) ,0) 
    //i do rendera przesyłamy dalej (a render wrenderowujemy do szablonu glownego)
    res.render('order/summary',{
         cookie: {
            base: cookieBase,
            addon : addons,
            },
        bases : Object.entries(cookie_base),
        adds : Object.entries(cookie_add),
        sum,
    })
})

module.exports = {orderRouter}