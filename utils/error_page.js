function showError (res,description){
    return res.render('error', {
                descripiton : `${description} `
            }) 
}

module.exports = {
    showError
}