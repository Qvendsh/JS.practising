{
    // let str1 = 'Okten hello'
    //
    // console.log(str1.toUpperCase())
    // console.log(str1.toLowerCase())
    // console.log(str1.startsWith('Ok'))
    // console.log(str1.endsWith('lo'))
    // console.log(str1.substring(1, str1.length - 2))
    // console.log(str1.indexOf('n'))    //lastindexOf
    // console.log(str1.charAt(0))
    //
    // let sss='=+380976796822='
    // // console.log(sss.substring(sss.indexOf('=')+1,sss.lastIndexOf('=')))
    //
    // console.log(sss.replaceAll('=',''))
    //
    // let objstr='vasya 31 male'
    //
    // function adapter(objstr) {
    //     let split = objstr.split(' ')
    //       return  {
    //         name: split[0],
    //         age: split[1],
    //         gender: split[2]
    //     }
    // }
    // console.log(adapter(objstr))
    //
    // let objstr2='petya 45 male'
    // console.log(adapter(objstr2))


}


// let arr=[]
// console.log(Array.isArray(arr),typeof(arr))
//
// arr.push('qwe')
// arr.push('asd')           // додати на кінець
// arr.unshift('kvl')  // додати на початок
// console.log(arr)
//
// let pop=arr.pop()  // видалити з кінця
// console.log(pop)
// console.log(arr)
//
// let shift=arr.shift()  // видалити з початку
// console.log(shift)
// console.log(arr)


// let numbers=[11, 12, 13, 14, 15, 16, 17, 18, 19]
//
// let splice=numbers.splice(3,2,'new')
// console.log(splice)
// console.log(numbers)
//
// let nums=[111, 222, 333, 444]
// let newarr=numbers.concat(nums)
// console.log(newarr)
//
// console.log(newarr.join('-'))


let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'Olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// users.forEach (item=>console.log(item));

let filter=users.filter((user)=>user.age>30 && !user.status)
console.log(filter)

//
// let map=users.map((user)=>{
//     let u={
//         imya:user.name,
//         vik:user.age
//     }
//     return u
// })

// let map=users.map((user)=>({imya:user.name, vik:user.age}))
// console.log(map)

// let map=users.map((user,index)=>({name:user.name, age:user.age, status:user.status, id:index}))
// console.log(map)



// let sort=users.sort((firstobj,neighbor)=>{
//     return firstobj.age-neighbor.age;
// })
// console.log(sort)


// console.log(users.sort((a, b) => a.name.toLowerCase().localeCompare(b.name.toLowerCase())))

let reduce=users.reduce((previousValue,currentValue)=>{
      if (currentValue.status){
           previousValue[0].push(currentValue);
      }else{
           previousValue[1].push(currentValue);
      }
      return previousValue
    },
    [[],[]]
)
console.log(reduce[0])
console.log(reduce[1])
