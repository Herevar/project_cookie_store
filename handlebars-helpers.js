const handlebarsHelpers ={
    priceFinder : (base, selected) => {
        base.filter( x => x[0] === selected)
    }
}

module.exports = {handlebarsHelpers}