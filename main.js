//Array for Days !!

// For any methods that we didn't cover, please refer to the Array Documentation.
// Discovering new things is fun and a great way to learn!!
// Please console.log("Question#") followed by console.log(yourAnswer) after each question.
// If you would like, practice using document.write() as well. Use any elements you like!
// ==========================================================================

// 1. Declare a variable whose value is an empty Array. Use any method you choose to add at least 4 items to it.
var resorts = [];
var resorts = ['Jackson Hole', 'Aspen', 'CB', 'A-basin'];


//console.log("Question 1");
//console.log(yourAnswer);
console.log(resorts);
//["Jackson Hole", "Aspen", "CB", "A-basin"]


// 2. Add an additional item to the beginning of your Array.

resorts.unshift('Copper');
//5
console.log(resorts);
//["Copper", "Jackson Hole", "Aspen", "CB", "A-basin"]

// 3. Remove the second and third items.
resorts.splice(1, 2);
//["Jackson Hole", "Aspen"]
console.log(resorts);
//["Copper", "CB" "A-basin"]

// 4. Add two new items after the second item.
resorts.splice(3, 0, "Winter-Park", "Steamboat");
//[]
console.log(resorts);
//["Copper", "CB", "Abasin", "WinterPark", "Steamboat"]

// 5. Write 'The current length of the array is....' using the .length method  
resorts.length
//5
document.write("<p>The current length of the array is "+ resorts.length +" </p>"); 
//The current length of an array is 0

// Use the following Array for questions 6-11:
var things = ['mug', 'book', 'mouse', 'plant', 'sunglasses'];
console.log(things);
//["mug", "book", "mouse", "plant", "sunglasses"]

// 6. Change 'mouse' to 'keyboard'
things[2] = "keyboard";
console.log(things);
//["mug", "book", "keyboard", "plant", "sunglasses"]

// 7. Combine all of the elements of the array into a string.
things.toString();
//"mug,book,keyboard,plant,sunglasses"

// 8. Declare a variable called lastItem whose using .pop() Add two new items to lastItem, on at the beginning and one at the end.
console.log(things);
//["mug", "book", "keyboard", "plant", "sunglasses"]
var lastItem = things.pop();
lastItem = things;
//["mug", "book", "keyboard", "plant"]

lastItem.unshift('front');
console.log(lastItem);
//["front", "mug", "book", "keyboard", "plant"]
lastItem.push('end');
console.log(lastItem);
//["front", "mug", "book", "keyboard", "plant", "end"]

// 9. Create a new Array called itemLast. The items should be the same as lastItem, only in reverse order.
var itemLast = lastItem.slice();
console.log(itemLast);
//["mug", "book", "keyboard", "plant"]
itemLast.reverse();
//["plant", "keyboard", "book", "mug"]

// 10. Remove the first item of itemLast.
itemLast.shift();
console.log(itemLast);
//["keyboard", "book", "mug"]

// 11. Remove all items from itemLast (No need to write to the document. Just console.log to test your results)
itemLast.splice(0, 3);
//["keyboard", "book", "mug"]
console.log(itemLast);
//[]

// 12. Using the Arrays below, create a single Array called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];
        //The concat() method creates a new array by concatenating two arrays:
var numberPets = firstArray.concat(secondArray);
console.log(numberPets);
//[12, 5, 9, 27, "fish", "dog"]
// Use the following array for questions 13-16:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 13. Add two new people after 'Doug'
people.push('Alex', 'Caleb');
console.log(people);
//["Bill", "Ted", "Emily", "Andrea", "Doug", "Alex", "Caleb"]

// 14. Remove everybody except 'Andrea' and 'Ted'
people.splice(0, 1);
//["Bill"]
people.splice(1, 1);
//["Emily"]
people.splice(2,3);
//["Doug", "Alex", "Caleb"]
console.log(people);
//["Ted", "Andrea"]

// 15. Add a new person to the beginning of the Array
people.unshift('Sara');
//3
console.log(people);
//["Sara", "Ted", "Andrea"]

// 16. Arrange the items alphabetically. Store this Array as orderedPeople
people.sort();
//["Andrea", "Sara", "Ted"]

// 17. Create an array of arrays with the following three arrays:
var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]

var array4 = [array1, array2, array3];
console.log(array4);

// Goal:
var array4 = [
                ["Fido", "Spot", "Rex", "Sparky"],
                ["Bulldog", "Lab", "Dalmation", "Beagle"],
                ["White", "Black", "Spotted", "Tri-color"]
              ]

// 18. Remove "Sparky" and "White" from the above array of arrays.
array4[0].pop();
//sparky
array4[2].shift();
//white
console.log(array4);
["Fido", "Spot", "Rex"],
["Bulldog", "Lab", "Dalmation", "Beagle"].
["Black", "Spotted", "Tri-Color"],

// BONUS 1: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55, 77, 300]
// Explain why it doesn't sort as expected.
sortingNumbers.sort();
//[2, 300, 5, 55, 77, 98]
//It sorted least to greatest after the second number...
// BONUS 2: Transform array1 into array2 using as few lines of code as you can without directly changing the value of an item (ie array1[0] = item)
var array1 = [2, 'dog', 34, 'Bill', 'plant', 'mug', 17];

var array2 = array1.slice();
array2.splice(2, 1), array2.splice(4,1),array2.reverse();
console.log(array2);
//[17, "plant", "Bill", "dog", 2]
array2.unshift("plant"),array2.push("Bill","dog");
array2.splice(2,3);
//["plant", "Bill", "dog"]
console.log(array2);
//["plant", 17, 2, "Bill", "dog"]


//Goal
var array2 = ['plant', 17, 2, 'Bill', 'dog'];
