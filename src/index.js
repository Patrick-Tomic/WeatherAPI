import './style.scss';
import { getWeather } from './retrieve';
let count = 0
let vw =32
const mid = document.querySelector('#mid')

const leftArrow = document.getElementById('leftArrow')
const rightArrow = document.getElementById('rightArrow')
const wrap = document.getElementById('wrap');
const content = document.getElementById('content');   
const enter = document.getElementById('enter');
const search = document.getElementById('search');
const card = document.getElementById('card')
 getWeather('Tampa')

getWeather('Ho Chi Minh')
getWeather('Sydney')
getWeather('New York')
getWeather('tuzla')
 enter.addEventListener('click',()=>{
  const divWrap = document.getElementById('divWrap')
  let count = divWrap.childElementCount
  console.log(count)
  if(divWrap.childElementCount >=1){
    divWrap.remove()
    const div = document.createElement('div')
    div.setAttribute('id', 'divWrap')
    content.appendChild(div)
    leftArrow.style.visibility = 'hidden'
    rightArrow.style.visibility = 'hidden'
  }  
   getWeather(search.value);
    search.value = ''
 });
 
 leftArrow.addEventListener('click', ()=>{
  vw = 31
  const divWrap = document.getElementById('divWrap')
  console.log('heard')
   if(count == 0){
    vw = vw*count
    divWrap.style.transform = `translateX(${vw}vw)` 
   }else{
    count++
    vw = count*vw
    console.log(vw)
    divWrap.style.transform = `translateX(${vw}vw)` 
   }
 })
 rightArrow.addEventListener('click',()=>{
  vw = 31
  const divWrap = document.getElementById('divWrap')
  console.log('heard')
  if(count == -4){
    count = 0
    vw = vw * count
    divWrap.style.transform = `translateX(${vw}vw)` 
  }else{
    count--
  vw = vw * count
  console.log(vw)
  divWrap.style.transform = `translateX(${vw}vw)` 
  }
 })
 const card1 = document.querySelector('.card1')
 const card2 = document.querySelector('.card2')
 const card3 = document.querySelector('.card3')
 const card4 = document.querySelector('.card4')
 const card5 = document.querySelector('.card5')
 card1.addEventListener('click', ()=>{
  const divWrap = document.getElementById('divWrap')
  divWrap.style.transform = 'translateX(0vw)'
 })
 card2.addEventListener('click', ()=>{
  const divWrap = document.getElementById('divWrap')
  divWrap.style.transform = 'translateX(-31vw)'
 })
 card3.addEventListener('click', ()=>{
  const divWrap = document.getElementById('divWrap')
  divWrap.style.transform = 'translateX(-62vw)'
 })
 card4.addEventListener('click', ()=>{
  const divWrap = document.getElementById('divWrap')
  divWrap.style.transform = 'translateX(-92vw)'
 })
 card5.addEventListener('click', ()=>{
  const divWrap = document.getElementById('divWrap')
  divWrap.style.transform = 'translateX(-123vw)'
 })
 
  
 
 
 
 
