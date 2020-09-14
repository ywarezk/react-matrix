// ES6+

const hello = 'world';

let myNumber;
myNumber = 42;

var myBoolean = true;

//          scope           number of assignments
// var    functional                 infinite
// let        {}                     infinite
// const      {}                         1

function sayHello() {
	if (true) {
		var message = 'hello';
		message = 'world';
	}
	console.log(message);
}

// console.log(message); // error

function sayHello() {
	if (true) {
		let message = 'hello';
		message = 'world';
	}
	console.log(message);
}

function sayHello() {
	if (true) {
		const message = 'hello';
		const myArray = [];
		// message = 'world'; // error
		
		myArray.push(1);
	}
	console.log(message);
}