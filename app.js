const block = document.querySelector('#block')
const input = document.getElementsByTagName('input')

const btn = document.getElementById('btn')

btn.addEventListener('click',() =>{
    block.innerHTML += `
    <li>${input[0]. value } </li>
    `
})
const makko = document.getElementById('makko')
makko.addEventListener('click',() =>{
    block.innerHTML = ``
})