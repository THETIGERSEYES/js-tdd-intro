function capitalizeFirstLetters(input) {

    if (typeof input === 'string'){
        return input.toLowerCase().split(" ").map(output => output.slice(0,1).toUpperCase() + output.slice(1)).join(" ") ;
    } else {
        return ""; 
    }
}

module.exports = capitalizeFirstLetters;