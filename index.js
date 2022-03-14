//1

const cheatDeepEqual = (obj1, obj2) => {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
}

//2

function* chunkArray(arr, take) {
    let step = 0;
    console.log(arr);
    while (true) {
        if (step > arr.length) {
            return undefined;
        }
        yield arr.slice(step, take + step);
        step += take;
    }
}

const iterator = chunkArray([1, 2, 3, 4, 5, 6, 7, 8], 3);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());


//3

function bulkRun(array) {
    let promises = array.map(e => e[0](...e[1]));
    return Promise.all(promises);
}



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


//5

function arrayToObject(arr) {
    let obj = {};
    for (let elem of arr) {
        if (elem[1] instanceof Array) {
            elem[1] = arrayToObject(elem[1])
        }
        if (elem instanceof Array) {
            const elemObj = { [elem[0]]: elem[1] }
            obj = { ...obj, ...elemObj };
        }
    }
    return obj;
}


//7

const objectToArray = (obj) => {
    const array = Object.entries(obj);
    const newArr = array.map(arr => {
        return arr.map(arr2 => {
            if (arr2 instanceof Object && arr2 instanceof Array === false) {
                return Object.entries(arr2)
            } else { return arr2 }
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



//10

function NotificationException() { }
function ErrorException() { }
function primitiveMultiply(a, b) {
    const rand = Math.random();
    console.log('rand', rand)
    if (rand < 0.5) {
        return a * b;
    } else if (rand > 0.85) {
        throw new ErrorException()
    } else {
        throw new NotificationException()
    }
}

function reliableMultiply(a, b) {
    try {
        return primitiveMultiply(a, b);

    } catch (error) {
        if (error instanceof NotificationException) {
            return reliableMultiply(a, b);
        }
    }
}























