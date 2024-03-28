console.log(document)
console.log(document.head)
let body=document.body
console.log(body)
console.log(body.children)
let uls =body.getElementsByTagName('ul')
console.log(uls)
let lis=body.getElementsByTagName('li')
console.log(lis)
for (const li of lis) {
    li.innerText='miumiu'
    // li.style.background='silver'
    // li.style.marginBottom='3px'
    li.classList.add('st')
}

let blocks=document.getElementsByClassName('block')
console.log(blocks)
let block=blocks[0]
console.log(block)
console.log(block.getElementsByTagName('li'))

let ul1=document.getElementById('list-1')
console.log(ul1)

console.log(document.querySelector('.block'))
console.log(document.querySelector('li'))
let liss=document.querySelectorAll('.block li')
console.log(liss)


// const div= document.createElement('div')
// div.innerText='asddadds'
// document.body.appendChild(div)
//
// let h2=document.createElement('h2')
// h2.innerHTML='<i>okten</i>'
// let h3=document.createElement('h3')
// h2.innerHTML='<i>miumiu</i>'
//
// div.append(h2,h3)


