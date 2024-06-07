const CurrentWeatherCard = document.querySelectorAll('.Weather-kiri .card')[0];
const CityInput = document.getElementById('city_input');
const searchBtn = document.getElementById('searchBtn');

function getWeatherDetails(name, lat, lon, country, state){
  const WEATHER_API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=weathercode,temperature_2m_max,temperature_2m_min&timezone=auto`;
  const days = ['sun','mon', 'tue', 'wed','thu', 'fri', 'sat'];
  const months =  ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'DeC'];

  fetch(WEATHER_API_URL).then(res => res.json()).then(data => {
    let date = new Date();
    let today = date.getDate();
    let weatherCode = data.daily.weathercode[0];
    let tempMax = data.daily.temperature_2m_max[0];
    let tempMin = data.daily.temperature_2m_min[0];

    CurrentWeatherCard.innerHTML = `
        <div class="Weather-today">
            <div class="details">
                <p>Hari Ini</p>
                <h2>${(data.main.temp - 273.15).toFixed(2)}&deg;C</h2>
                <p>${data.weather[0].description}</p>
            </div>
            <div class="Weather-icon">
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            </div>
            </div>
            <hr>
            <div class="Card-footer">
                <p><i class="fa fa-map-marker"></i>${days[date.getDay()]}, ${date.getDate()}, ${months[date.getMonth()]} ${date.getFullYear()}</p>
                <p><i class="fa fa-calendar"></i> ${name}, ${country}</p>
            </div>
    `;
  }).catch(() => {
    alert('failed to fetch current weather');
  })
}




function getCityCoordinates() {
  let cityName = CityInput.value.trim();
  CityInput.value = '';
  if (!cityName) return;
  let GEOCODING_API_URL = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`;
  fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
    let {name, lat, lon, country, state} = data[0];
    getWeatherDetails(name,lat,lon,country, state)
  }).catch(()=>{
    alert(`failed to fetch coordinates of ${cityName}`)
  });
}

searchBtn.addEventListener('click', getCityCoordinates);