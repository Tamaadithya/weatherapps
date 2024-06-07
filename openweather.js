let CityInput = document.getElementById('city_input'),
searchBtn= document.getElementById('searchBtn'),
API_key = '6564e172e573ba3e5de617695b4ac6b7',
CurrentWeatherCard = document.querySelectorAll('.Weather-kiri .card')[0];


function getWeatherDetails(name, lat, lon, country, state){
    let FORECAST_API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_key}`,
    WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`,
    days = [
      'sun',
      'mon',
      'tue',
      'wed',
      'thu',
      'fri',
      'sat'
    ],
    months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'Mei',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'DeC'
    ];

    fetch(WEATHER_API_URL).then(res => res.json()).then(data => {
      let date = new Date();
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

function getCityCoordinates(){
  let cityName = CityInput.value.trim();
  CityInput.value = '';
  if(!cityName) return;
  let GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit1&appid=${API_key}`;
  fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
    let {name, lat, lon, country, state} = data[0];
    getWeatherDetails(name,lat,lon,country, state)
  }).catch(()=>{
    alert(`failed to fetch coordinates of $(cityName)`)
  });
}
searchBtn.addEventListener('click', getCityCoordinates);