const apikey = "27d22d40a7020e5138ee9d5b4b7a3073";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".wheather-icon")

async function checkWheather(city) {
    const res = await fetch(apiUrl + city + `&appid=${apikey}`);
    let data = await res.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    
    document.querySelector(".temp").innerHTML = (data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +"km/hr";

    if(data.weather[0].main == "Haze"){
        weatherIcon.src = "./Assests/humidity.png"
    }
    else if (data.weather[0].main == "Clear"){
        weatherIcon.src = "./Assests/clear.png"
    }
    else if (data.weather[0].main == "Clouds"){
        weatherIcon.src = "./Assests/clouds.png"
    }
    else if (data.weather[0].main == "Snow"){
        weatherIcon.src = "./Assests/snow.png"
    }
    else if (data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./Assests/drizzle.png"
    }
    else if (data.weather[0].main == "Mist"){
        weatherIcon.src = "./Assests/mist.png"
    }
    
    
    
}
searchBtn.addEventListener("click",()=>{
    checkWheather(searchBox.value);
})
