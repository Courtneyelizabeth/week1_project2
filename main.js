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
var resorts = ['Jackson Hole', 'Aspen', 'CB', 'A-basin'];
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
resorts.splice(2, 0, "Winter-Park", "Steamboat");
//[]
console.log(resorts);
//["Copper", "CB", "Winter-Park", "Steamboat", "A-Basin"]

// 5. Write 'The current length of the array is....' using the .length method  (?)
resorts.length
//5
document.write("<p>The current length of the array is "+ length +" </p>"); 
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

// 9. Create a new Array called itemLast. The items should be the same as lastItem, only in reverse order.

// 10. Remove the first item of itemLast.

// 11. Remove all items from itemLast (No need to write to the document. Just console.log to test your results)

// 12. Using the Arrays below, create a single Array called numberPets whose value is [12, 5, 9, 27, 'fish', 'dog']
var firstArray = [12, 5, 9, 27];
var secondArray = ['fish', 'dog'];

// Use the following array for questions 13-16:
var people = ['Bill', 'Ted', 'Emily', 'Andrea', 'Doug'];

// 13. Add two new people after 'Doug'

// 14. Remove everybody except 'Andrea' and 'Ted'

// 15. Add a new person to the beginning of the Array

// 16. Arrange the items alphabetically. Store this Array as orderedPeople

// 17. Create an array of arrays with the following three arrays:
var array1 = ["Fido", "Spot", "Rex", "Sparky"]
var array2 = ["Bulldog", "Lab", "Dalmation", "Beagle"]
var array3 = ["White", "Black", "Spotted", "Tri-color"]

// Goal:
var array4 = [
                ["Fido", "Spot", "Rex", "Sparky"],
                ["Bulldog", "Lab", "Dalmation", "Beagle"],
                ["White", "Black", "Spotted", "Tri-color"]
              ]

// 18. Remove "Sparky" and "White" from the above array of arrays.

// BONUS 1: Try to arrange the following items from smallest to largest:
var sortingNumbers = [2, 5, 98, 55, 77, 300]
// Explain why it doesn't sort as expected.

// BONUS 2: Transform array1 into array2 using as few lines of code as you can without directly changing the value of an item (ie array1[0] = item)
var array1 = [2, 'dog', 34, 'Bill', 'plant', 'mug', 17];

//Goal
var array2 = ['plant', 17, 2, 'Bill', 'dog'];
