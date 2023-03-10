const express = require('express');
const { getAddFromReq } = require('../utils/get_add_from_req');
const configuratorRouter = express.Router();


configuratorRouter
    .get('/base-select/:lightordark', (req,res)=>{
        const {lightordark} = req.params;
        
        res
            .cookie('cookieBase', lightordark)
        // res.send(lightordark)
            .render('config_file/base_select', {lightordark})
})
    .get('/aditions/:add', (req,res)=>{
        const {add} = req.params;
        
        const addons = getAddFromReq(req)
        //jezeli są jakies ciastka z dodatkami to sparsuj jak nie to stworz liste
        addons.push(add)
        
        res
            .cookie('cookieAdds', JSON.stringify(addons))
        // res.send(lightordark)
            .render('config_file/added', {add})
})

module.exports = {configuratorRouter}