//....................... 1a. Installing NodeJS(install moment)..............


// ...................1b creating project folder...............


// ................................. 1c (html input form with DOM)..............................................
function myFunction() {
	let nameValue = document.getElementById('name').value;
	let ageValue = document.getElementById('age').value;

	document.getElementById('pTag').innerHTML =
		'Hello my name is: ' + nameValue + ' and i am ' + ageValue + ' years old';
	console.log(nameValue, ageValue);
}
// ...............................................No 2(javascript object)...................................
// function myFunction() {
//     let nameValue1 = document.getElementById('name').value;
//     let ageValue1 = document.getElementById('age').value;
  
//   const person = {
// 		name: nameValue1,
//     age: ageValue1,
//     drive: function () {
//       console.log(this.name + ' drives a red jeep' +  ' she is ' + this.age + ' years old');
//     }
// 	};
//   console.log(person);
//   person.drive();
// }

//........................................... No 3(for...of)...............................................
  
  // const fruits = ['apple', 'berry', 'banana', 'watermelon'];

  // for (let fruit of fruits) {
    // console.log(fruit);
  	// document.getElementById('fruits').innerHTML +=<ul> {fruit}</ul>;

  // }

// ............................................... No 4 (map())....................................................

  // let maleActor = new Map();
  // maleActor.set(maleActor, {
  //   firstName: 'Jack',
  //   lastName: 'smith',
  //   age: '27',
  // movieTitle: 'Over the moon',
  // });
  // let femaleActress = new Map();
  // femaleActress.set(femaleActress, {
  //   firstName: 'Becky',
  //   lastName: 'rose',
  //   age: '31',
  //   movieTitle: 'Dance with me',
  // });
  // console.log(maleActor, femaleActress)

// ........................................No 5......................................
// const items = new Map();
// const items1 = new Map();
// const items2 = new Map();
// const items3 = new Map();
// const items4 = new Map();
//   items.set('things', {
// 		name: 'Chair',
// 		color: 'Brown',
// 		size: 'Medium',
// 		shape: 'Rectangular',
//   });
//   items1.set('things', {
//     name: 'Plate',
//     color: 'White',
//     size: 'Medium',
//     shape: 'Circular',
//   });
//     items2.set('things', {
//       name: 'Lamp',
//       color: 'Silver',
//       size: 'Tall',
//       shape: 'Cylindrical',
//     });
//     items3.set('things',{
//         name: 'Pen',
//         color: 'Black',
//         size: 'Small',
//         shape: 'Cylindrical'
//     });
//     items4.set('things', {
//       name: 'Book',
//       color: 'Blue',
//       size: 'Small',
//       shape: 'Rectangular',
//     });



// // Function to print all items and their attributes
// function printAllItems() {
// 	console.log(items, items1, items2, items3,items4);
// }
// printAllItems();

// //  Function to print attributes of a specific item
  
	
//   items.set('color', 'Brown');
//   items.set('size', 'Medium');
//   items.set('shape', 'Rectangular')
		
//   function printItemAttribute() {
//     for (let key of items.keys()) {
//         console.log(key)
//     }
// }
// printItemAttribute();

	




