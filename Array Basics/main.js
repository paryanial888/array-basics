// Alexander Paryani
// 29 APR 2024
// Array Basics

// Name and School
console.log(`*** Script written by Alex Paryani of Kalkaska High School ***`);
console.log('\n'); // Adds a blank line to output for spacing

// Junk Food Array
const junkFood = ["French Fries", "Cookies", "Chips", "Hotdog", "Cake"];
console.log(`My Junk Food array: ${junkFood}`);
console.log('\n');
console.log(`Length of Junk Food array: ${junkFood.length}`);
console.log('\n');

// Adding a new item using push() method
console.log('Adding Ice Cream using the push() method:');
junkFood.push("Ice Cream");
console.log('\n');
console.log(`My updated Junk Food array: ${junkFood}`);
console.log('\n');

// Removing an element using pop() method
console.log('Removing an element using pop() method:');
console.log('\n');
junkFood.pop(); //Removes the last item from the array if left blank
console.log(`My updated Junk Food array: ${junkFood}`);

// Final Array 
console.log('\n');
console.log('My final array:');
function printWords() {
    console.log(junkFood.join(", "));
}
printWords()
console.log('\n');
console.log(`Length of final Junk Food array: ${junkFood.length}`);