

// function factoryfunctionuser(id,name){
//     return {id, name,greeting(){
//             console.log(this.name)
//         }
//     }
// }
//
// let user=factoryfunctionuser(1,'petya')
// console.log(user)



// function User(id,name){
//     this.id=id;
//     this.name=name;
//     this.greeting=function(){
//         console.log('hello '+this.name)
//     }
// }
// let u1=new User(111,'vasya')
// console.log(u1)
//
//
// function Friend(id,name){
//     this.id=id;
//     this.name=name;
// }
// let friend=new Friend('123','abrikos')
//
// u1.greeting.call(friend)






class User{
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    greeting(msg){
        console.log(msg+' '+this.name)
    }
}

let user =new User(111,'bobruk')
console.log(user)
user.greeting('hello')


class Dev extends User{
    constructor(id, name, skills) {
        super(id, name);
        this.skills = skills;
    }
}
let dev=new Dev(321,'chipichipi')
console.log(dev)
dev.greeting('paradise')



// console.log({})
// let user={
//     id:100500,
//     name:'asdqwe'
// }
//
// let user2=Object.create(user)
// console.log(user2)
// console.log(user2.name)
// console.log(user2.id)
// user2.id=2323
// console.log(user2.id)


// class User{
//     constructor(id, name) {
//         this.id=id;
//         this.name=name;
//     }
//     greeting(msg){
//         console.log(msg+' '+this.name)
//     }
// }
// let user=new User(111,'petya')
// console.log(user)
// user.greeting('hi')
//
// class Dev extends User{
//     constructor(id, name, skills) {
//         super(id, name);
//         this.skills = skills;
//     }
// }
//
// let dev=new Dev(123,'abricos',['js'])
// console.log(dev)


// function User(id,name){
//     this.id=id;
//     this.name=name;
// }
//
// function Dev(id,name,skills){
//     User.apply(this, arguments);
//         this.skills=skills;
// }
//
// console.log(new Dev(123123,'adsddasad',['js']) )
//
//
// function Senior(id,name,skills,exp){
//     Dev.apply(this,arguments);
//     this.exp=exp;
// }
// console.log(new Senior(123123,'adsddasad',['js'],'2 years'))