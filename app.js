// // // dom manipulation(input form)
function myFunction() {
  let nameValue = document.getElementById('name').value;
  let ageValue = document.getElementById('age').value;
  
  document.getElementById('pTag').innerHTML = 'Hello my name is: ' + nameValue + ' and i am ' + ageValue + ' years old';
  console.log(nameValue, ageValue);
}
//   const person = {
// 		name: nameValue,
//     age: ageValue,
//     drive: function () {
//       console.log(this.name + ' drives a red jeep' +  ' she is ' + this.age + ' years old');
//     }
// 	};
//   console.log(person);
//   person.drive();
// }



// // javascript object
// // let Car = {
// // 	name: 'Volkswagen',
// // 	model: 'Golf',
// // 	color: 'Red',
// // 	start: function () {
// // 		console.log('Starting the car!');
// // 	},
// // 	drive: function () {
// // 		console.log('The car is driving.');
// // 	},
// // 	brake: function () {
// // 		console.log('Hit the brakes!');
// // 	},
// // };
// //   Car.start()
// //   Car.drive()
// //   Car.brake()
  

// //   let Car2 = {
// //   name: 'Volkswagen',
// //   model: 'Golf',
// //   color: 'Red',
// //   presentCar: function() {
// //   console.log("The name of this car is: " + this.name);
// //   }
// //   }

// //   Car2.presentCar();

// // global and local scope
// // let dogSound = 'woof';
// // function bark() {
// // 	console.log(dogSound);
// // }
// // bark();
// // console.log(dogSound);

// // // local
// // function bark() {
// // 	let dogSound = 'woof';
// // 	console.log(dogSound);
// // }
// // bark();
// // console.log(dogSound);

// // forin
// const object = { a: 1, b: 2, c: 3 };
// for (property in object) {
//   console.log(`${property}: ${object[property]}`);
  

// }

// // for of
// // // Array to iterate through
// const students = ['John', 'Sara', 'Jack'];
// // Using for...of loop
// for ( let names of students ) {
// // Display the values
// console.log(names);
// }

// // assignment 5
// const fruits = ['apple', 'berry', 'banana', 'watermelon'];

// for (let fruit of fruits) {
// 	console.log(fruit);
// 	document.getElementById('fruits').innerHTML += fruit;
// }

// // map()
// const map1 = new Map(); // We have created an empty map
// console.log(map1);
// map1.set('info', { name: 'Jack', age: 26 })
// console.log(map1);
// let map2 = new Map();
// let obj = {}; // Declare an empty object that we use as key in our map
// map2.set(
// obj, {name: 'Jack', age: "26"}
// );
// console.log(map2.get(obj));

// let map1 = new Map();
// map1.set('info', { name: 'Jack', age: '26' });
// // Access the item of a Map
// console.log(map1.get('info'));
// const set1 = new Set([1, 2, 3]);
// let map1 = new Map();
// map1.set('info', {name: 'Jack', age: "26"});
// // Check if an element is in our map
// console.log(map1.has('info')); // true
// let map12 = new Map();
// map12.set('info', {name: 'Jack', age: "26"});
// // Removing a particular element
// // map12.delete('address');
// // console.log(map12); // Map {"info" => {name: "Jack", age: "26"}}
// map12.delete('info');
// console.log(map12); // Map {}
// // let map1 = new Map();
// // map1.set('info', { name: 'Jack', age: '26' });
// // // Clear the map of all elements
// // map1.clear();
// // console.log(map1);

// let map1 = new Map();
// map1.set('info', { name: 'Jack', age: '26' });
// console.log(map1.size);

// let map1 = new Map();
// map1.set('name', 'Jack');
// map1.set('age', '27');
// // looping through Map
// for (let value of map1.values()) {
// 	console.log(value);
// }

// assignment6
// let maleActor = new Map();
// maleActor.set(maleActor, {
// 	firstName: 'Jack',
// 	lastName: 'smith',
// 	age: '27',
// 	movieTitle: 'Over the moon',
// });
// let femaleActress = new Map();
// femaleActress.set(femaleActress,  {
//   firstName: 'Becky',
//   lastName: 'rose',
//   age: '31',
//   movieTitle: 'Dance with me',
// })
// console.log(maleActor, femaleActress)

// assignment 7
// let items = new Map();
// items.set(items, { name: 'Book', color: 'Blue', size: 'Medium', shape: 'Rectangle' });
// items.set(items, { name: 'Pen', color: 'Black', size: 'Small', shape: 'Cylinder' });
// items.set(items, { name: 'Cup', color: 'White', size: 'Large', shape: 'Cylinder' });
// items.set(items, { name: 'Chair', color: 'Brown', size: 'Large', shape: 'Rectangle'});
// items.set(items, { name: 'spoon', color: 'gold', size: 'small', shape: 'Irregular' });

// function Items() {
// 	for (let item of items) {
//     console.log(item)
//   }
// }
// Items()



