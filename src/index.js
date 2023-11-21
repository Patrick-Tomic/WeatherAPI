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
 
 
