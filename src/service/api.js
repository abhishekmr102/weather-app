import axios from 'axios';


const URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '9335fae8b815536ce9610681467b487c';

export const getData =async (city, country)=>{
    return await axios.get(`${URL}?q=${city},${country}&appid=${API_KEY}&units=metric`)
}