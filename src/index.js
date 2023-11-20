import './style.scss';
import { getWeather } from './retrieve';
 
 

const wrap = document.getElementById('wrap');
const content = document.getElementById('content');   
const enter = document.getElementById('enter');
const search = document.getElementById('search');
 getWeather('Tampa');
getWeather('tuzla')
getWeather('Ho Chi Minh')
getWeather('Sydney')
getWeather('New York')
 enter.addEventListener('click',()=>{
    
   getWeather(search.value);
    search.value = ''
 });
 