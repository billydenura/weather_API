const getWeatherForecast = async (cityName) => {
    try {
        const response = await fetch(`https://weatherapi-com.p.rapidapi.com/forecast.json?q=${cityName}&days=3`, {
        method: "GET",
        headers: {
            "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
            "x-rapidapi-key": "868592eaf4mshe3effe9cc0c0821p1c42b0jsn6ac2140a7a97"
        },
        });
        const data = await response.json();
        console.log(data);
        showForeCast(data)
        return data;
    } catch (error) {
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
        let day = days[i].date
        let weather = days[i].day.condition.text
        let icon = days[i].day.condition.icon
        let temp = days[i].day.avgtemp_c
        let tempMax = days[i].day.maxtemp_c
        let tempMin = days[i].day.mintemp_c
        let humidity = days[i].day.avghumidity


    }
}

async function showCurrentWethear(data){
    let weather = data.condition.text
    let icon = data.condition.icon
    let temp = data.temp_c
    let humidity = data.humidity
    let lastUpdate = data.last_update

}