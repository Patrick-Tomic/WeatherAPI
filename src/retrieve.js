/* eslint-disable no-case-declarations */
/* eslint-disable indent */
class cityWeather{
    constructor(city,state, country, tempF,tempC,condition, windMPH,windKPH){
        this.city = city;
        this.state = state;
        this.country = country;
        this.tempF = tempF;
        this.tempC = tempC;
        this.condition =condition;
        this.windMPH = windMPH;
        this.windKPH = windKPH;
    }
}
export async function getWeather(city){     
    try{
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=298bf6c3b43b4a55875191548230211&q=${city}`,{mode:'cors'});
    const data = await response.json();
    console.log(data)
    const object = new cityWeather(data.location.name,data.location.region,data.location.country,data.current.temp_f,data.current.temp_c,data.current.condition.text,data.current.wind_mph,data.current.wind_kph);
    console.log(object);
    buildWeather(object);
    }catch(err){
        alert('Not a real city');
        
    }
     
  
}
export function buildWeather(object){
   
     const content = document.getElementById('content');
    const wrapper = document.getElementById('divWrap')
    const div = document.createElement('div');
    div.setAttribute('id','card');
    
    for(let i = 0;i<8;i++){
        const container = document.createElement('div');
      
      
        container.classList.add('label');
        const label = document.createElement('label');
        const p = document.createElement('p');
        switch(i){
            case 0:
                const h2 = document.createElement('h2');   
                h2.setAttribute('name','city');
                label.setAttribute('for','city');
                label.innerHTML = 'City: ';
                h2.innerHTML = object.city;
                container.appendChild(label);
                container.appendChild(h2);
               div.appendChild(container);
                break;
            case 1:
                if(object.country == 'United States of America'){
                    const h3 = document.createElement('h3');
                    label.setAttribute('for','state');
                    h3.setAttribute('name','state');
                    h3.innerHTML = object.state;
                    label.innerHTML = 'State:';
                    container.appendChild(label);
                    container.appendChild(h3);
                    div.appendChild(container);
                    break;
                }else break;
            case 2:
                const h4 = document.createElement('h3');
                label.setAttribute('for','country');
                h4.setAttribute('name','country');
                h4.innerHTML = object.country;
                label.innerHTML = 'Country:';
                container.appendChild(label);
                container.appendChild(h4);
                div.appendChild(container);
                break;
            case 3:
                p.setAttribute('name','F');
                label.setAttribute('for','F');
                p.innerHTML = object.tempF;
                label.innerHTML = 'F<sup>o</sup>';
                container.appendChild(label);
                container.appendChild(p);
                div.appendChild(container);
                break;
            case 4:
                
                break;
                 
            case 5:
                p.setAttribute('name','condition');
                label.setAttribute('for','condition');
                p.innerHTML = object.condition;
                label.innerHTML = 'Condition:';
                container.appendChild(label);
                container.appendChild(p);
                div.appendChild(container);
                break;
            case 6:
                
                break;
            case 7:
                p.setAttribute('name','mph');
                label.setAttribute('for','mph');
                p.innerHTML = object.windMPH;
                label.innerHTML = 'Wind MPH:';
                container.appendChild(label);
                container.appendChild(p);
                div.appendChild(container);
                break;
        }
    }
    wrapper.appendChild(div);
    content.appendChild(wrapper);
}