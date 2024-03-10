

// let users=[
//     {name:'vanya', age: 35},
//     {name:'marko', age: 34},
//     {name:'andriy', age: 23},
//     {name:'petya', age: 12},
//     {name:'anton', age: 22},
//     {name:'anton', age: 22},
//     {name:'anton', age: 22},
//     {name:'anton', age: 22},
//     {name:'anton', age: 22},
//     {name:'anton', age: 22},
//     {name:'anton', age: 22},
//     {name:'bogdan', age: 42}
// ]


// for (let i=3; i < users.length-1; i=i+2 ) {
//        const user =users[i];
//        console.log(user)
// }

// for (let i = users.length - 1; i >= 0; i--) {
//     const user = users[i];
//     console.log(user)
// }




// for (const user of users) {
//     if(user.age>30){
//     console.log(user)
//     }
// }


// debugger;



// let vasya={
//     name: 'asd',
//     age: 15,
//     skills:'',
//     status: 'single'
// }
//
// for(let key in vasya){
//     console.log(key, vasya[key])
// }


let matrix=[
    [1, 2, 3],
    [11, 22, 33, 44],
    [222, 333]
]
for (const matrix1 of matrix) {
    console.log(matrix1)
    for(const matrix2 of matrix1){
        console.log(matrix2)
    }
}
