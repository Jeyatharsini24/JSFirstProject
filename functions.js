function noArgNoReturn()
{
    console.log("hey, you");
}

noArgNoReturn();
noArgNoReturn();

function withArgsNoReturn(a, b)
{
    console.log(a - b);
}

withArgsNoReturn(49,47);
var global = "my global";

function havingOopsGlobal()
{
    oopsGlobal = 5;// since no var it will be considered as global
    // var oopsGlobal = 5; will not be global
}

function accessingGlobal()
{
    if(typeof global != undefined)
    {
        console.log("global is defined: " + global);
    }
    if(typeof oopsGlobal != undefined)
    {
        console.log("oopsGlobal is defined: " + oopsGlobal);
    }
}
havingOopsGlobal();
accessingGlobal();

function havingLocalVar()
{
    var localVar = "test";
    console.log(localVar);
}
havingLocalVar();
//console.log(localVar); // will not work

var outWear = "T-shirt";

function toOverrideGlobal()
{
    var outWear = "Sweater";
    return outWear;
}
console.log(toOverrideGlobal());
console.log(outWear);

function withReturnAndParam(num)
{
    return num - 6;
}
console.log(withReturnAndParam(9));

var sum = 0;
function addThree()
{
    sum += 3;
}
addThree()
console.log(sum);

var changed = 0;

function change(num)
{
    return num + 5 * 3;
}
changed = change(2);
console.log(changed);