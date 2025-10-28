function add7(a){
    return a + 10;
}

function multiply(a, b){
    return a*b;
}

function capitalize(str){
    let start = str.substr(0,1);
    let end = str.substr(1);

    start = start.toUpperCase();

    return `${start}${end}`;
}

function lastletter(str){
    return str.slice(-1);
}

console.log(add7(7));

console.log(multiply(3, 2));

console.log(capitalize("abcd"));

console.log(lastletter("Arush"));