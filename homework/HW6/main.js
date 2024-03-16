// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
{
    let str1 = 'hello world'
    let str2 = 'lorem ipsum'
    let str3 = 'javascript is cool'
    console.log(str1.length)
    console.log(str2.length)
    console.log(str3.length)

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

    console.log(str1.toUpperCase())
    console.log(str2.toUpperCase())
    console.log(str3.toUpperCase())
}
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
{
    let str1 = 'HELLO WORLD'
    let str2 = 'LOREM IPSUM'
    let str3 = 'JAVASCRIPT IS COOL'

    console.log(str1.toLowerCase())
    console.log(str2.toLowerCase())
    console.log(str3.toLowerCase())
}
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let ds= ' dirty string   '
console.log(ds.substring(ds.indexOf(' ')+1,ds.lastIndexOf(' ')-2))

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//let str = 'Ревуть воли як ясла повні';

let str = 'Ревуть воли як ясла повні';
const arr=str.split(' ');
console.log(arr)

// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
{
    let arr=[10,8,-7,55,987,-1011,0,1050,0]
    const newarr=arr.map(String)
    console.log(newarr, typeof newarr[0]);
}
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

function sortNums(direction) {
    let nums = [11, 21, 3];
    let sort;
    if(direction==='increasing') {
        sort = nums.sort((a, b) => {
            return a - b;
        })
    }
    if(direction==='decreasing') {
        sort = nums.sort((a, b) => {
            return b - a;
        })
    }
    return sort
}

console.log(sortNums('decreasing'))
console.log(sortNums('increasing'))

// - є масив
{
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

// -- відсортувати його за спаданням за monthDuration
    let sort = coursesAndDurationArray.sort((a, b) => {
            return b.monthDuration - a.monthDuration
        })
    console.log(sort)

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

    let filter = coursesAndDurationArray.filter((item) => item.monthDuration > 5)
    console.log(filter)

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}


    let map=coursesAndDurationArray.map((item,index)=>({id:index,title:item.title,monthDuration:item.monthDuration}))
    console.log(map)
}

// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let cards=[
    {cardSuit:'spade', value: '6', color:'black'},
    {cardSuit:'spade', value: '7', color:'black'},
    {cardSuit:'spade', value: '8', color:'black'},
    {cardSuit:'spade', value: '9', color:'black'},
    {cardSuit:'spade', value: '10', color:'black'},
    {cardSuit:'spade', value: 'jack', color:'black'},
    {cardSuit:'spade', value: 'queen', color:'black'},
    {cardSuit:'spade', value: 'king', color:'black'},
    {cardSuit:'spade', value: 'ace', color:'black'},
    //----------------------------------------------
    {cardSuit:'diamond', value: '6', color:'black'},
    {cardSuit:'diamond', value: '7', color:'black'},
    {cardSuit:'diamond', value: '8', color:'black'},
    {cardSuit:'diamond', value: '9', color:'black'},
    {cardSuit:'diamond', value: '10', color:'black'},
    {cardSuit:'diamond', value: 'jack', color:'black'},
    {cardSuit:'diamond', value: 'queen', color:'black'},
    {cardSuit:'diamond', value: 'king', color:'black'},
    {cardSuit:'diamond', value: 'ace', color:'black'},
    //------------------------------------------------
    {cardSuit:'heart', value: '6', color:'red'},
    {cardSuit:'heart', value: '7', color:'red'},
    {cardSuit:'heart', value: '8', color:'red'},
    {cardSuit:'heart', value: '9', color:'red'},
    {cardSuit:'heart', value: '10', color:'red'},
    {cardSuit:'heart', value: 'jack', color:'red'},
    {cardSuit:'heart', value: 'queen', color:'red'},
    {cardSuit:'heart', value: 'king', color:'red'},
    {cardSuit:'heart', value: 'ace', color:'red'},
    //------------------------------------------------
    {cardSuit:'clubs', value: '6', color:'red'},
    {cardSuit:'clubs', value: '7', color:'red'},
    {cardSuit:'clubs', value: '8', color:'red'},
    {cardSuit:'clubs', value: '9', color:'red'},
    {cardSuit:'clubs', value: '10', color:'red'},
    {cardSuit:'clubs', value: 'jack', color:'red'},
    {cardSuit:'clubs', value: 'queen', color:'red'},
    {cardSuit:'clubs', value: 'king', color:'red'},
    {cardSuit:'clubs', value: 'ace', color:'red'},
]

// - знайти піковий туз
{
    const spadeace = cards.filter(item => item.value === 'ace' && item.cardSuit === 'spade')
    console.log(spadeace)

// - всі шістки

    const sixes = cards.filter(item => item.value === '6')
    console.log(sixes)

// - всі червоні карти

    const reds = cards.filter(item => item.color === 'red')
    console.log(reds)

// - всі буби

    const diamonds = cards.filter(item => item.cardSuit === 'diamond')
    console.log(diamonds)

// - всі трефи від 9 та більше

    const nineofclubs = cards.filter(item => item.cardSuit === 'clubs').splice(3,)
    console.log(nineofclubs)


// =========================

//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

    const reduce=cards.reduce((previousValue, currentValue) => {
        if(currentValue.cardSuit==='spade'){
            previousValue[0].push(currentValue)
        }else if(currentValue.cardSuit==='diamond'){
            previousValue[1].push(currentValue)
        }else if(currentValue.cardSuit==='heart'){
            previousValue[2].push(currentValue)
        }else{
            previousValue[3].push(currentValue)
        }
            return previousValue;
    },
        [[],[],[],[]]
    )
    console.log(reduce)

}
// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// --написати пошук всіх об'єктів, в який в modules є sass
{
let filter= coursesArray.filter((item)=>item.modules.some(element=>element==='sass'))
console.log(filter)
}
// --написати пошук всіх об'єктів, в який в modules є docker

{
    let filter = coursesArray.filter((item) => item.modules.some(element => element === 'docker'))
    console.log(filter)
}