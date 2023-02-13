let input = document.querySelector('#input')
let addTsk = document.querySelector('#add')
let list = document.querySelector('#list')

addTsk.addEventListener('click', function(){
    if(input.value === '') return
    add()
    input.value = ''
})

function add(){
    const li = document.createElement('li')

    list.appendChild(li)
    li.textContent = input.value


}