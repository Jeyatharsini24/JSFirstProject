var myArray = ["John", 47];

console.log(myArray[0]);
console.log(myArray[1]);

var ourArray = [["the universe", 21],["everything", 23, "done"]];
console.log(ourArray[1][2]);
console.log(ourArray[0][1])

var oldArray = [10, 12, 100];
oldArray[2] = 28;
console.log(oldArray);

oldArray.push("cat", 12);
console.log(oldArray);

var poppedFromArray = oldArray.pop();
console.log(poppedFromArray);
console.log(oldArray);

var shiftedFromArray = oldArray.shift();
console.log(shiftedFromArray);
console.log(oldArray);

oldArray.unshift(["hayy", "Na"]);
console.log(oldArray);

var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]];
console.log(myList);