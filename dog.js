// Start by creating a variable that equals your age.
const myAge = 28;

// Then create a variable called earlyYears and save the value of 2. 
let earlyYears = 2;

// After that, use the multiplication assignment operator (*) to multiply the value of earlyYears by 10.5, because the first two years of a dog's life will count as 10.5 years each.
earlyYears *= 10.5;

// Now since you have already accounted for the first two years, you will take myAge and subtract it by 2. This will make a new variable called laterYears.
let laterYears = myAge - 2;

// To proceed, multiply laterYears by 4 to calculate the number of dog years accounted for by your later years. Use the mulitplication assignment operator to multiply and assign in one step.
laterYears *= 4;

// Check the console for the current values of earlyYears and laterYears.
console.log(earlyYears);
console.log(laterYears);

// Now, add earlyYears and laterYears together, put that in a new variable called myAgeInDogYears.

myAgeInDogYears = earlyYears + laterYears;

// Write your name as a string and then the method .toLowerCase();, put all of that into a new variable called myName.
var myName = "Maha Moazzam".toLowerCase();

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
