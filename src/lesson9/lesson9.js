import './lesson9.scss';
import { lighter } from './scripts/lighter.js';

const lighterElement1 = document.querySelector('#lighter1');
const lighterElement2 = document.querySelector('#lighter2');

lighter(lighterElement1);
lighter(lighterElement2);

//
// const user = {
//     age: '23',
//     name: 'Stas',
//     surname: 'Potapov',
// };
//
// alert('Hello, I am '+user.age+' years old. My name is '+user.name+' '+user.surname+'.');
//
// for (let i = 0; i <= 100; i++) {
//   console.log(i);
// }
//
// const name = prompt('Enter your name', '');
//
// if (name === 'admin') {
//     console.log('Hello master');
// } else {
//     console.log('Hello user');
// }

// const someBtn = document.querySelector('.btn');
// console.dir(someBtn);
// function greet() {
//     const name = prompt('Hello world');
//     someBtn.classList.add('btn_touched');
//     alert(`Hello, ${name} !`);
// }
// someBtn.addEventListener('click', greet);
//
// const secondBtn = document.querySelector('.btn2');
// function test2() {
//     alert('Here comes da boi');
// }
// secondBtn.addEventListener('click', test2);
