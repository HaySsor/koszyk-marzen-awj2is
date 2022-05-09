// Import stylesheets
import './style.css';

const items =document.querySelectorAll("[data-item]")
const prises = document.querySelectorAll("[data-price]")
const itemsValue = document.querySelectorAll("[data-item]")
const deletesBtn = document.querySelectorAll('.btn')
let sum = document.querySelector('[data-sum]')

deletesBtn.forEach((btn,i) =>{
  btn.addEventListener('click',(e)=>{
    prises[i].innerHTML = '0 zł';
    btn.parentElement.parentElement.remove()
    getSum()
    emptyCart()
  })
})

function getSum(){
  let prise =0
items.forEach((item,index)=>{
  let quantity = parseFloat(item.value)

  if(!/\d/.test(parseFloat(item.value))){
    return sum.textContent = 'Coś jest nie tak, sprawdź czy wszysto jest okey'
  }
  if(quantity < 0 ){
    quantity = 0
  return quantity
  }
  
  prise += quantity * parseFloat(prises[index].textContent)
  
  if (quantity === 0){
    item.parentElement.parentElement.parentElement.remove()
  } 
  sum.textContent = ` ${prise}zł` 
})
}

itemsValue.forEach(item=>{
  item.addEventListener('click',()=>{
    getSum()
    emptyCart()
  })  
})
itemsValue.forEach(item=>{
  item.addEventListener('keyup',()=>{
    getSum()
    emptyCart()
  })
})

function emptyCart(){
  if(parseFloat(sum.textContent) <= 0){
    const empty = document.querySelector('.empty')
    empty.innerHTML =`<h3>Twój Koszyk jest pusty 😕</h3>`
  
  }
}