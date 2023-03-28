function showError (res,description){
    return res.render('errors/error', {
                descripiton : `${description} `
            }) 
}

module.exports = {
    showError
}