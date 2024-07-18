
const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiid = "&appid=bf53a09af1046e59d2b64a99318c8943&units=metric";

async function checkWeather(city){
    const data = await fetch(url+city+apiid);
    let Data = await data.json();
    document.getElementById("loc").innerHTML =Data.name;
    document.getElementById("value").innerHTML=Data.weather[0].main;
    document.getElementById("first").querySelector("img").src = "./Icons/"+Data.weather[0].icon+".png";
    document.getElementById("Current").innerHTML=Math.round(Data.main.temp)+"&deg;C";
    document.getElementById("Feels").innerHTML=Math.round(Data.main.feels_like)+"&deg;C";
    document.getElementById("Min").innerHTML=Math.round(Data.main.temp_min)+"&deg;C";
    document.getElementById("Max").innerHTML=Math.round(Data.main.temp_max)+"&deg;C";
    document.getElementById("Humidity").innerHTML = Data.main.humidity+"%";
    document.getElementById("Wind").innerHTML = Math.round(Data.wind.speed)+"km/hr";
    document.getElementById("Visibility").innerHTML = Data.visibility/1000+"km";
}
document.querySelector("button").addEventListener("click",()=>{
    checkWeather(document.querySelector("input").value);
});