// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль



let h='hello';
console.log(h);
let o='owu';
console.log(o);
let k='com';
console.log(k);
let u='ua';
console.log(u);
let num1=1;
console.log(num1);
let num2=10;
console.log(num2);
let num3=-999;
console.log(num3);
let num4=123;
console.log(num4);
let num5=3.14;
console.log(num5);
let num6=2.7;
console.log(num6);
let num7=16;
console.log(num7);
let l1=true;
console.log(l1);
let l2=false;
console.log(l2);


let firstName='Yura';
let middleName='Andriyovich';
let lastname='Barchyshyn';
let person= `${lastname} ${firstName} ${middleName}`;
console.log(person);



let a = 100;
console.log(typeof a);
let b = '100';
console.log(typeof b);
let c = true;
console.log(typeof c);

var Name = prompt("Введіть ваше ім'я:");
var lastName = prompt("Введіть ваше по-батькові:");
var age = prompt("Введіть ваш вік:");


console.log("Ім'я: " + Name);
console.log("По-батькові: " + lastName);
console.log("Вік: " + age + " років");

