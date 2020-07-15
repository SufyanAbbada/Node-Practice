//All the code here is now not implemented on Web but on our System on a pre-installed
//JS Code Runner called 'Node'

// console.log("Hello World");
// name();

/*JSON Format

let coordinates = {
  x: 4,
  y: 8,
};
console.log(coordinates);
//Now in case to change the individual values of the Object, we shall use
coordinates.y = 25;
console.log(coordinates.x);
console.log(coordinates);
//Also if you want to add a new Property, you don't need to re-declare the Function but simply add
coordinates.z = 45;
console.log(coordinates);
coordinates["t"] = "police";
console.log(coordinates);
//You cannot give the text attribute as it is but you have to give as given in the syntax above like giving Array Structure.
//But it will be treated as giving String values.

//One can also get the individual element by using the dot (.) operator but also
console.log(coordinates["z"]);
*/

//Passing Values by Reference

// let check = {
//   name: "Sufyan",
//   Tel: 3004872,
//   address: "Home",
// };

// let contact = check;
// //Now here we have given the reference of the Object rather than its value, So, any change in the check Object
// // itself will change the contact object too because we have given the reference of the check variable / object

// console.log(contact);
// check.Tel = 59;
// console.log(contact);

// //Now in order that you want that we should not give the Reference of our Object but to send merely the values then
// //There are two ways. One of them is by using 'Object.assign' method

// let contract = Object.assign({}, check); //Now this means that we have first assigned the contract a null object {}
// // And then we place all the values that were present in the above Object in the new created Object.

// console.log(contract);
// check.Tel = 58;
// console.log(contract); // Now the values will not be changed at real place.

// //But one of the best and recommended way is to use the triple dot Operator (...) also called as Spread Operator
// //and it will copy all attributes of the corresponding object into the new object with values only.

// let user1 = { ...check };
// console.log(user1);
// check.Tel = 24;
// console.log(user1);

//Arrays and other Stuff
console.clear();
// let simplearray = ["Malik", "Usman", "Dawood"];

// let findIndex = simplearray.findIndex(finder);
// //This name is however not passed from the function calling because the function's reference is given
// //and the function itself passes each value to the function itself and we handle our number.
// function finder(name) {
//   if (name == "Malik") return true;
//   else return false;
// }
// console.log(findIndex);

// //Now in order to sort the array we dont need any assignment operator but the array is passed referentially, thus it will do the action

// // simplearray.sort();
// console.log(simplearray);

// simplearray.splice(1, 4, "Bushra", "Zain");
// //Keep that in mind that if you gave the starting number to be 1 and you also selected 2 to delete then
// //it will the number you are on and the next one.
// //As you can see that even if we delete more elements than they existed, it will not give error but keep on
// console.log(simplearray);

// //Now if we want to show the elements rather tahn array notation then simply use

// console.log(...simplearray);
//So thats why we can also use them in splice option too.

//Map Function in Array

// let rates = [2, 8, 3, 10, 75];

// let enhance = rates.map(function (r) {
//   return r + 2;
// });
// //Here, the map function takes every input 'r' from rates and place it in the new array but with some addition into the new array.

// console.log(rates);
// console.log(enhance);

// //Arrow Functions
// //Lets first see those functions that are in a single line means there is a single statement in the function. So, for them

// function test() {
//   return 2;
// }

// console.log(test());
// //That whole function can be turned into an arrow function by converting it into a variable.

// let testing = () => 2;

// console.log(testing());

// //Now lets take some Input. So

// function inputtest(num) {
//   return num * 2;
// }

// console.log(inputtest(3));

// // And its arrow function will be

// let numtest = (num) => num * 2;

// console.log(numtest(4));
// //And also if there is only one input argument or parameter then here we dont even need ()
// //Lets take some high example

// let counting = (num) => (num == 2 ? "Yes It is 2" : "No Its not");

// console.log(counting(3));

// console.log(6 > 2 && "Yes your comparison is OK");
// console.log(6 < 2 && "Yes your comparison is OK");

// console.log("");
// let goodexample = (num, name) => {
//   if (num == 0) {
//     name = "Ali";
//     return (error = false);
//   } else {
//     name = "Ahmad";
//     return (error = true);
//   }
// };

// let h = goodexample(0, "Sufi");
// console.log(h);

// console.log(goodexample(2, "Sufi"));

//Lets come to Objects.
// let recipe = {
//   title: "Chicken Tikka Pizza",
//   Ingredients: ["Cream", "Cheese", "Olives"],
//   price: 10,
//   availability: true,
// };

// //This is a simple object and we destructure some attributes from the object as

// let { title, price } = recipe;
// console.log(title);
// console.log(price);
//Keep in mind that we are destructuring the object so the syntax is same as above
//and the name of attributes must be same too. It first checks that is there some attributes with the
//same name then it declares them and initialize with the values in the object.

//Lets Add JSON file and operate on an array that have numerous objects in it.
console.clear();

let testarray = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(testarray.slice(1, 3));

let postcodes = require("./postcodes.json");
console.log(postcodes.length);

let oneobject = postcodes.find((p) => p.Region == "Aberdeen");
//Here the small arrow function simply says that we have declared a function and given it the
//Input parameter as 'p' then it simply checks that 'p' have that region 'Aberdeen' in it or not and return it.
console.log(oneobject.Northing);
//console.log(oneobject.'Grid Reference');
console.log(oneobject);
