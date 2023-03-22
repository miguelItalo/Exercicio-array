const add = document.querySelector('.add')
const order = document.querySelector('.order')
let objetos = []
let input = document.querySelector('#input')

add.addEventListener('click', () => {
    let inputValue = document.querySelector('#input').value
    if(inputValue === '' || inputValue === null){
        alert('Digite um valor valido')
    }
    else if(objetos.indexOf(inputValue) === -1){
        objetos.push(inputValue)
        console.log(objetos)
        input.value = ''
    }
    else{
        alert('Objeto já foi adicionado')
        input.value = ''
    }
})

order.addEventListener('click', () => {
    objetos.sort()
    console.log(objetos)
})

