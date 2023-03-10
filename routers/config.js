const express = require('express');
const { cookie_add } = require('../data/cookie_data');
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
        
        //dodajemy walidacje czy taki dodatek wogole istnieje
        if ( !cookie_add[add]){
            //return res.send('nie ma takiego bicia')    
            return res.render('error', {
                descripiton : `do chaupy krowy doić - nie ma takiego adda jak ${add}`
            })
        }   
        

             
        const addons = getAddFromReq(req)
        //jezeli są jakies ciastka z dodatkami to sparsuj jak nie to stworz liste
        
        if ( addons.includes(add)){    
            return res.render('error', {
                descripiton : `już jest dodany taki składnik; ${add}`
            })
        }   
        addons.push(add)
        
        res
            .cookie('cookieAdds', JSON.stringify(addons))
        // res.send(lightordark)
            .render('config_file/added', {add})
})
// miejscu gdzie tworzone były pozycje dodane do listy dodajemy link do usuwania z listy i tutaj opcje usuwania
.get('/del/:add', (req,res)=>{
        const {add} = req.params;
        
        const addons = getAddFromReq(req).filter(x => x !== add)
        
        res
            .cookie('cookieAdds', JSON.stringify(addons))
        // res.send(lightordark)
            .render('config_file/deleted', {add})
})

module.exports = {configuratorRouter}