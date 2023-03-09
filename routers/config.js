const express = require('express');
const configuratorRouter = express.Router();


configuratorRouter
    .get('/base-select/:lightordark', (req,res)=>{
        const {lightordark} = req.params;
        console.log(lightordark)
        res.cookie('cookieBase', lightordark)
        // res.send(lightordark)
        res.render('config_file/base_select', {lightordark})
})

module.exports = {configuratorRouter}