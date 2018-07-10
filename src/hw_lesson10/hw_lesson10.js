import './hw_lesson10.scss';

// Task #2
let user = {};
user.name = 'Vasya';
console.log(user.name);
user.surname = 'Petrov';
user.name = 'Sergey';
console.log(user.name);
delete user.name;
console.log(user.name);

// Task #3
function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}
let admin = {};
console.log(isEmpty(user));
console.log(isEmpty(admin));

// Task #4
let salaries = {
    John: 400,
    Jack: 200,
    Stan: 500,
    Alex: 100,
    test: 'asdasdsa'
};

let sum = 0;
for (let key in salaries) {
    if (typeof salaries[key] === "number") {
        sum = sum + salaries[key];
    }
}
console.log(sum);

// Task #5
let max = 0;

for (let key in salaries) {
    if (typeof salaries[key] === "number" && salaries[key] > max) {
        max = salaries[key];
    }
}

if (max === 0) {
    max = 'нет сотрудников'
}

console.log(max);

// Task #6
let numbers = {
    asd: 2,
    sasd: 'asd',
    asdf: 3,
    faw: 4
};

function multiplyNumeric(obj) {
    for (let keyy in obj) {
        if (typeof obj[keyy] === "number") {
            obj[keyy] = obj[keyy] * 2;
        }
    }
    console.log(numbers);
}

multiplyNumeric(numbers);

// Task #8
function arraySum() {

}


//
const products = [
    {
        title: 'Test',
        price: '87hjk'
    },
    {
        title: 'Test',
        price: '2500'
    },
    {
        title: 'Test',
        price: '2500'
    }
];

function calcTotal(arrayOfNumbers) {
    let total = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        let string = Number(arrayOfNumbers[i].price);
        if (isNaN(string) !== true) {
            total = total + string;
        }
    }
    return total;
}

const totalPrice = calcTotal(products);
console.log(totalPrice);