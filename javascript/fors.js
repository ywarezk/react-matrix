while (condition) {
	
}

do {
	
} while(codition)

for (let item of someiterable) {
	
}

for (let key in {hello: 'world'}) {
	
}

for (let value of Object.values({hello: 'world'})) {
	
}

for (let key of Object.keys({ hello: 'world' })) {

}

const todo = [
	'Walk with piglet',
	'Walk with sweetness',
	'Play with sweetness',
	'Play with piglet',
]

// [14, ...]
const newArray = todo.map((singleItem) => {
	return singleItem.length;
})

// []
const newArray2 = todo.filter((singleItem) => {
	return singleItem.length > 10;
})

todo.find((singleItem) => {
	return singleItem.length > 10;
})

