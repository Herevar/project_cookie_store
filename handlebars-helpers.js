const handlebarsHelpers ={
    priceFinder : (bases, selected) => {
        console.log('1: ', bases, '2: ',selected)
        const found = bases.find( x => x[0] === selected);
        if (!found){
            throw new Error ("cant find it, no ${selected} out there :P")   
        }
        const [, price] = found;
        return price;
    }
}

module.exports = {handlebarsHelpers}