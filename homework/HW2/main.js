
////////////////////////////////Масиви та об'єкти:


let arr={
    name:'vasya',
    surname:'gorbach',
    gender:'male',
    age:25,
    height:185,
    skin_color:'white',
    job_title:'head',
    iq:115,
    status:'married',
    kids:0
}
console.log(arr.name)
console.log(arr.surname)
console.log(arr.gender)
console.log(arr.age)
console.log(arr.height)
console.log(arr.skin_color)
console.log(arr.job_title)
console.log(arr.iq)
console.log(arr.status)
console.log(arr.kids)


let obj1={
    title:'Idk1',
    pageCount:500,
    genre:'fairy tale'
}
let obj2={
    title:'Idk2',
    pageCount:150,
    genre:'action'
}
let obj3={
    title:'Idk3',
    pageCount:1000,
    genre:'thriller'
}



let obj11={title:'Idk11', pageCount:250, genre:'fairy tale',author:{name:'anna',age:33}}
let obj22={title:'Idk22', pageCount:100, genre:'action',author:{name:'maria',age:33}}
let obj33= {title: 'Idk33', pageCount: 700, genre: 'thriller',author:{name:'sergiy',age:33}}



let users={
    user1:{name:'andriy',username:'andriy11',password:'sadasdasd'},
    user2:{name:'petro',username:'petro22',password:'dfdgfdfg'},
    user3:{name:'vasya',username:'vasya33',password:'jghjgjghj'},
    user4:{name:'grisha',username:'grisha44',password:'hkhjkhkhj'},
    user5:{name:'maks',username:'maks55',password:'jljkkllkj'},
    user6:{name:'yarko',username:'yarko66',password:'ebtbrtbtbe'},
    user7:{name:'yura',username:'yura77',password:'czxcxzccxz'},
    user8:{name:'marko',username:'marko88',password:'nvnnvbnnvbnvnbv'},
    user9:{name:'misha',username:'misha99',password:'bnmbmbfkddfkkf'},
    user10:{name:'danya',username:'danya10',password:'tyrutruytruytr'}
}

console.log(users.user1.password)
console.log(users.user2.password)
console.log(users.user3.password)
console.log(users.user4.password)
console.log(users.user5.password)
console.log(users.user6.password)
console.log(users.user7.password)
console.log(users.user8.password)
console.log(users.user9.password)
console.log(users.user10.password)



///////////////////////////////////////////Логічні розгалуження:


let x=1
if(x == 0){
    console.log('Вірно');
}else{
    console.log('Невірно')
}


let time =35;
if(time>=0 && time<15){
    console.log('перша частина')
}else if(time>=15 && time<30){
    console.log('друга частина')
}else if(time>=30 && time<45){
    console.log('третя частина')
}else if(time>=45 && time<=60) {
    console.log('третя частина')
}else{
    console.log('dapabachennya')
}

let day=20;
if(day>=0 && day<=10){
    console.log('1')
}else if(day>10 && day<=20){
    console.log('2')
} else if(day>20 && day<=31){
    console.log('3')
}else{
    console.log('dapabachennya2')
}

let week=7
switch(week){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
}

var num1=prompt('input first number');
var num2=prompt('input second number');

if(num1>num2){
    document.write(num1);
}else if(num1<num2){
    document.write(num2);
}else if(num1 = num2){
    document.write('numbers are equal:',num1)
}



let X=15;
X= X || 'default';
console.log(X)



let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if(coursesAndDurationArray[0].monthDuration>5){
    console.log('супер');
}
if(coursesAndDurationArray[1].monthDuration>5){
    console.log('супер');
}
if(coursesAndDurationArray[2].monthDuration>5){
    console.log('супер');
}
if(coursesAndDurationArray[3].monthDuration>5){
    console.log('супер');
}
if(coursesAndDurationArray[4].monthDuration>5){
    console.log('супер');
}
if(coursesAndDurationArray[5].monthDuration>5){
    console.log('супер');
}
