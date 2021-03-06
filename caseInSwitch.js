function caseInSwitch(val)
{
    var answer = "";
    
    // strict equal
    switch(val)
    {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case "3":
            answer = "gamma";
            break;
        case 4:
        case 5:
        case 6:
            answer = "delta";
            break;
        default:
            answer = "none";
            break;
    }
    return answer;
}

console.log(caseInSwitch(7));
console.log(caseInSwitch("3"));
console.log(caseInSwitch(4));
console.log(caseInSwitch(5));
console.log(caseInSwitch(6));