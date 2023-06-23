const getWeatherForecast = async (cityName) => {
    try {
        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${cityName}&days=3`, {
        method: "GET",
        headers: {
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
            "x-rapidapi-key": 
        },
        });
        const data = await response.json();
        let cityDescription = document.getElementById("city-description")
        console.log(data);
        cityDescription.innerHTML = `Showing the weather of ${data.location.name}, ${data.location.region}, ${data.location.country}`
        showCurrentWethear(data)
        showForeCast(data)
        return data;
    } catch (error) {
        let cityDescription = document.getElementById("city-description")
        cityDescription.innerHTML = "LOCATION NOT FOUND"
        console.log(error);
        return;
    }
}

let getWeather = document.getElementsByTagName("button")[0]
getWeather.addEventListener("click",()=>{
    let city = document.getElementById("city-name").value
    getWeatherForecast(city)

})

async function showForeCast(data){
    let days = data.forecast.forecastday
    for(i=0;i<days.length;i++){
        let forecast = document.createElement("div")
        let weatherForecast = document.getElementById("weather-forecast")
        weatherForecast.append(forecast)
        forecast.className = "weather-container"

        let day = document.createElement("h3")
        let weather = document.createElement("p")
        let icon = document.createElement("img")
        icon.className = "weather-image"
        let temp = document.createElement("p")
        let tempMaxMin = document.createElement("p")
        let humidity = document.createElement("p")


        day.innerHTML =`Weather of ${days[i].date}` 
        weather.innerHTML =`"${days[i].day.condition.text}"` 
        icon.src = days[i].day.condition.icon
        temp.innerHTML =`Average Temperature: ${days[i].day.avgtemp_c} C` 
        tempMaxMin.innerHTML =`(Maximum: ${days[i].day.maxtemp_c} C, Minimum ${days[i].day.mintemp_c} C)` 
        humidity.innerHTML =`Avarage Humidity: ${days[i].day.avghumidity}%` 

        forecast.append(day)
        forecast.append(weather)
        forecast.append(icon)
        forecast.append(temp)
        forecast.append(tempMaxMin)
        forecast.append(humidity)
    }
}

async function showCurrentWethear(data){
    let forecast = document.createElement("div")
    let weatherForecast = document.getElementById("current-weather")
    weatherForecast.append(forecast)
    forecast.className = "weather-container"

    let day = document.createElement("h3")
    let weather = document.createElement("p")
    let icon = document.createElement("img")
    icon.className = "weather-image"
    let temp = document.createElement("p")
    let humidity = document.createElement("p")
    let lastUpdate = document.createElement("p")


    day.innerHTML = "Current Weather"
    weather.innerHTML =`"${ data.current.condition.text}"` 
    icon.src = data.current.condition.icon
    temp.innerHTML =`Average Temperature: ${data.current.temp_c} C` 
    humidity.innerHTML =`Avarage Humidity: ${data.current.humidity}%` 
    lastUpdate.innerHTML = `(update at ${ data.current.last_updated})`

    forecast.append(day)
    forecast.append(weather)
    forecast.append(icon)
    forecast.append(temp)
    forecast.append(humidity)
    forecast.append(lastUpdate)

}