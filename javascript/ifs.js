/**
if's in javascript
 */
 
if (true) {
	console.log('something')
} else if (true) {
	
} else {
	
}

const hello = 'world';

switch(hello) {
	case 'world':
		console.log('something')
		break;
	case 'foo':
		console.log('something')
		break;
	default:
		console.log('something')
		break;
}

// we can divide the ifs to 2 families
// 1. if that does not return a value
// 2. if that does return value

// single line if

const result = hello === 'world' ? 10 : true;

const foo = hello || 'default value';
const foo1 = hello && 'first value';

const foo2 = hello?.someProperty

