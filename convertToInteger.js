function convertToInteger(str)
{
    return parseInt(str);
}

console.log(convertToInteger("6"));

function convertToIntegerWithRadix(str, radix)
{
    return parseInt(str, radix);
}

console.log(convertToIntegerWithRadix("10011", 2));