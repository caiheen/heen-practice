const temp = document.querySelector(".temp");
const minTemp = document.querySelector(".min-temp");
const maxTemp = document.querySelector(".max-temp");
const desc = document.querySelector(".description");
const city = document.querySelector(".city");
const icon = document.querySelector(".icon");

async function getWeatherData(lat,lon){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=ae06f3ab80806ea68edd83506d0fc192&units=metric&lang=kr`);
    const data =  await response.json();
    console.log(data);

    temp.innerHTML = data.main.temp;
    minTemp.innerHTML = data.main.temp_min;
    maxTemp.innerHeight = data.main.temp_max;
    city.innerHTML = data.name;
    desc.innerHTML = data.weather[0].description;
    icon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
}

function getWeather(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            getWeatherData(lat,lon);
        });
    }
}

getWeather();


