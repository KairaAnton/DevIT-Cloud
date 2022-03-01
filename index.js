//1

const cheatDeepEqual = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

//2
//доделать

const chunkArray = (arr, len) => {


    let chunks = [],
        i = 0,
        isDone = false;


    return chunks.push(arr.slice(i, i += len));




}
const iterato = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4], 3)

//4

const multiplyAnArray = (array) => {
    const getMinNum = Math.min(...array.map((subArray) => Math.min(...subArray)));

    const newArray = array.map(arr => arr.map(num => num % 2 === 0 ? num : num * getMinNum));
    return newArray;

}

const initialArray = [
    [5, 3, 6],
    [7, 11, 2],
    [15, 9, 4]
]

multiplyAnArray(initialArray);



//7

const objectToArray = (obj) => {
    const array = Object.entries(obj);
    const newArr = array.map(arr => {
        return arr.map(arr2 => {
            if (arr2 instanceof Object && arr2 instanceof Array === false) { return Object.entries(arr2) } else { return arr2 }
        })
    })
}


console.log(objectToArray({
	name: 'developer',
	age: 5,
	skills: {
		html: 4,
		css: 5,
		js: 5
	}
}))



//9

String.prototype.removeDuplicate = function removeDuplicate() {

    const result = Array.from(new Set(this.split(' '))).join(" ");

    return result;

}

let x = "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double"
x.removeDuplicate()























