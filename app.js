// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

function fromEuroToDollar(ammount){
    return (ammount * oneEuroIs["USD"])
}

function fromDollarToYen(ammount){
    euro = ammount / oneEuroIs["USD"];
    return (euro * oneEuroIs["JPY"])
}

function fromYenToPound (ammount){
    euro = ammount / oneEuroIs["JPY"];
    return (euro * oneEuroIs["GBP"])
}

module.exports= {fromDollarToYen, fromEuroToDollar, fromYenToPound}