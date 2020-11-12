const normClass = (symbol, type) => {
    if(symbol === "O") return type + "-" + symbol;
    else if (symbol === "X") return type + "-" + symbol;
}
const numSymbol = (num, sym1 = "X", sym2 = "O") => {
    if(num === 1) return sym1;
    else if(num === 2) return sym2
}
export {normClass, numSymbol};