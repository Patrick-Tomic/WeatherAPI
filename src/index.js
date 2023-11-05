import './style.scss';
import { getWeather } from './retrieve';
 
 

const wrap = document.getElementById('wrap');
const content = document.getElementById('content');   
const enter = document.getElementById('enter');
const search = document.getElementById('search');
 getWeather('Tampa');
  
 enter.addEventListener('click',()=>{
    
   getWeather(search.value);
    search.value = ''
 });
 