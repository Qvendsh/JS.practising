//- створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const rectangle=(a, b) => a*b;
console.log(rectangle(10, 15))


//- створити функцію яка обчислює та повертає площу кола з радіусом r

const circle=(r) => 3.14*r*r;
console.log(circle(5))

//- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//тут не вказано площу повної чи бічної поверхні тому це завдання поділене на 2 частини
//площа бічної поверхні

const sidesquarecylinder=(r, h)=> 2*3.14*r*h;
console.log(sidesquarecylinder(4,5))

//площа повної поверхні

const totalsurfacearea=(r,h) =>(3.14*r*r)*2+( 2*3.14*r*h);
console.log(totalsurfacearea(3,4))


//- створити функцію яка приймає масив та виводить кожен його елемент

const users=[
    {name:'andriy',username:'andriy11',password:'sadasdasd'},
    {name:'petro',username:'petro22',password:'dfdgfdfg'},
    {name:'vasya',username:'vasya33',password:'jghjgjghj'},
    {name:'grisha',username:'grisha44',password:'hkhjkhkhj'},
    {name:'maks',username:'maks55',password:'jljkkllkj'},
    {name:'yarko',username:'yarko66',password:'ebtbrtbtbe'},
    {name:'yura',username:'yura77',password:'czxcxzccxz'},
    {name:'marko',username:'marko88',password:'nvnnvbnnvbnvnbv'},
    {name:'misha',username:'misha99',password:'bnmbmbfkddfkkf'},
    {name:'danya',username:'danya10',password:'tyrutruytruytr'}
]

const printarr= () => {
    for(let i=0; i<users.length; i++){
        console.log(users[i])
    }
}
printarr()


//- створити функцію яка створює параграф з текстом. Текст задати через аргумент


const text=(message)=> {
    document.write(`<div><p> ${message}</p></div> `)
}

text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque deserunt inventore quam quod, rem!')



//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const lists=(text)=>{
    document.write(`<ul>
 <li> ${text},</li>
 <li> ${text},</li>
 <li> ${text}</li>
 </ul>`)
}
lists('Lorem ipsum dolor sit.')


//- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const lists2=(text,number)=>{
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}

lists2('i love okten',4)


//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
const list3=(arr) =>{
    document.write('<ul>');
    for (let i = 0; i < arr.length; i++) {
        document.write(`<li>${arr[i]}</li>`);
    }
    document.write('</ul>');
}
let arr7 = [12,'okten',false, -10, true];
list3(arr7);

//- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
{
    const arr = [
        {id: 123123, name: 'andriy', age: 32},
        {id: 213213, name: 'petro', age: 24},
        {id: 321321, name: 'vasya', age: 15}
    ]
    const objarr = () => {
        for (const argument of arr) {
            document.write
            (`
         <div>
          id-${argument.id},
          name-${argument.name},
          age-${argument.age}
        </div>
      `)
        }
    }
    objarr()
}

//- створити функцію яка повертає найменьше число з масиву
{
    const arr = [1, 335, 22, -44, -12, 4, -112, 567]
    const findmin = (arr) => {
        let min = arr[0];
        for (let num of arr) {
            if (min > num) {
                min = num;
            }
        }
        return min
    }
    console.log(findmin(arr))
}

//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
{
   const sum=(arr)=> {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i]
        }
        return sum;
    }

    let mass = [3, 19, -12, 55, 231, -133]
    console.log('sum=', sum(mass))
}

//- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
{
    const arrSwap = [11, 22, 33, 44];
    const swap = (arr, index1, index2) => {
        let elem = arr[index2];
        arr[index2] = arr[index1];
        arr[index1] = elem;
        return arr;
    }
    console.log(swap(arrSwap, 1, 3));
}
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
{
let arrExchange = [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}];
const exchange =  (sumUAH, currencyValues, exchangeCurrency) => {
    for (const item of currencyValues) {
        if(item.currency === exchangeCurrency){
            return sumUAH / item.value;
        }
    }
}

console.log(exchange(10000,arrExchange, 'USD'));
console.log(exchange(10000,arrExchange, 'EUR'));
}
