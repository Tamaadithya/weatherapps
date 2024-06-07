const CurrentWeatherCard = document.querySelectorAll('.Weather-kiri .card')[0];
const CityInput = document.getElementById('city_input');
const searchBtn = document.getElementById('searchBtn');

let wmo = {
  "0": {
      "day": {
          "description": "Sunny",
          "image": "http://openweathermap.org/img/wn/01d@2x.png"
      },
      "night": {
          "description": "Clear",
          "image": "http://openweathermap.org/img/wn/01n@2x.png"
      }
  },
  "1": {
      "day": {
          "description": "Mainly Sunny",
          "image": "http://openweathermap.org/img/wn/01d@2x.png"
      },
      "night": {
          "description": "Mainly Clear",
          "image": "http://openweathermap.org/img/wn/01n@2x.png"
      }
  },
  "2": {
      "day": {
          "description": "Partly Cloudy",
          "image": "http://openweathermap.org/img/wn/02d@2x.png"
      },
      "night": {
          "description": "Partly Cloudy",
          "image": "http://openweathermap.org/img/wn/02n@2x.png"
      }
  },
  "3": {
      "day": {
          "description": "Cloudy",
          "image": "http://openweathermap.org/img/wn/03d@2x.png"
      },
      "night": {
          "description": "Cloudy",
          "image": "http://openweathermap.org/img/wn/03n@2x.png"
      }
  },
  "45": {
      "day": {
          "description": "Foggy",
          "image": "http://openweathermap.org/img/wn/50d@2x.png"
      },
      "night": {
          "description": "Foggy",
          "image": "http://openweathermap.org/img/wn/50n@2x.png"
      }
  },
  "48": {
      "day": {
          "description": "Rime Fog",
          "image": "http://openweathermap.org/img/wn/50d@2x.png"
      },
      "night": {
          "description": "Rime Fog",
          "image": "http://openweathermap.org/img/wn/50n@2x.png"
      }
  },
  "51": {
      "day": {
          "description": "Light Drizzle",
          "image": "http://openweathermap.org/img/wn/09d@2x.png"
      },
      "night": {
          "description": "Light Drizzle",
          "image": "http://openweathermap.org/img/wn/09n@2x.png"
      }
  },
  "53": {
      "day": {
          "description": "Drizzle",
          "image": "http://openweathermap.org/img/wn/09d@2x.png"
      },
      "night": {
          "description": "Drizzle",
          "image": "http://openweathermap.org/img/wn/09n@2x.png"
      }
  },
  "55": {
      "day": {
          "description": "Heavy Drizzle",
          "image": "http://openweathermap.org/img/wn/09d@2x.png"
      },
      "night": {
          "description": "Heavy Drizzle",
          "image": "http://openweathermap.org/img/wn/09n@2x.png"
      }
  },
  "56": {
      "day": {
          "description": "Light Freezing Drizzle",
          "image": "http://openweathermap.org/img/wn/09d@2x.png"
      },
      "night": {
          "description": "Light Freezing Drizzle",
          "image": "http://openweathermap.org/img/wn/09n@2x.png"
      }
  },
  "57": {
      "day": {
          "description": "Freezing Drizzle",
          "image": "http://openweathermap.org/img/wn/09d@2x.png"
      },
      "night": {
          "description": "Freezing Drizzle",
          "image": "http://openweathermap.org/img/wn/09n@2x.png"
      }
  },
  "61": {
      "day": {
          "description": "Light Rain",
          "image": "http://openweathermap.org/img/wn/10d@2x.png"
      },
      "night": {
          "description": "Light Rain",
          "image": "http://openweathermap.org/img/wn/10n@2x.png"
      }
  },
  "63": {
      "day": {
          "description": "Rain",
          "image": "http://openweathermap.org/img/wn/10d@2x.png"
      },
      "night": {
          "description": "Rain",
          "image": "http://openweathermap.org/img/wn/10n@2x.png"
      }
  },
  "65": {
      "day": {
          "description": "Heavy Rain",
          "image": "http://openweathermap.org/img/wn/10d@2x.png"
      },
      "night": {
          "description": "Heavy Rain",
          "image": "http://openweathermap.org/img/wn/10n@2x.png"
      }
  },
  "66": {
      "day": {
          "description": "Light Freezing Rain",
          "image": "http://openweathermap.org/img/wn/10d@2x.png"
      },
      "night": {
          "description": "Light Freezing Rain",
          "image": "http://openweathermap.org/img/wn/10n@2x.png"
      }
  },
  "67": {
      "day": {
          "description": "Freezing Rain",
          "image": "http://openweathermap.org/img/wn/10d@2x.png"
      },
      "night": {
          "description": "Freezing Rain",
          "image": "http://openweathermap.org/img/wn/10n@2x.png"
      }
  },
  "71": {
      "day": {
          "description": "Light Snow",
          "image": "http://openweathermap.org/img/wn/13d@2x.png"
      },
      "night": {
          "description": "Light Snow",
          "image": "http://openweathermap.org/img/wn/13n@2x.png"
      }
  },
  "73": {
      "day": {
          "description": "Snow",
          "image": "http://openweathermap.org/img/wn/13d@2x.png"
      },
      "night": {
          "description": "Snow",
          "image": "http://openweathermap.org/img/wn/13n@2x.png"
      }
  },
  "75": {
      "day": {
          "description": "Heavy Snow",
          "image": "http://openweathermap.org/img/wn/13d@2x.png"
      },
      "night": {
          "description": "Heavy Snow",
          "image": "http://openweathermap.org/img/wn/13n@2x.png"
      }
  },
  "77": {
      "day": {
          "description": "Snow Grains",
          "image": "http://openweathermap.org/img/wn/13d@2x.png"
      },
      "night": {
          "description": "Snow Grains",
          "image": "http://openweathermap.org/img/wn/13n@2x.png"
      }
  },
  "80": {
      "day": {
          "description": "Light Showers",
          "image": "http://openweathermap.org/img/wn/09d@2x.png"
      },
      "night": {
          "description": "Light Showers",
          "image": "http://openweathermap.org/img/wn/09n@2x.png"
      }
  },
  "81": {
      "day": {
          "description": "Showers",
          "image": "http://openweathermap.org/img/wn/09d@2x.png"
      },
      "night": {
          "description": "Showers",
          "image": "http://openweathermap.org/img/wn/09n@2x.png"
      }
  },
  "82": {
      "day": {
          "description": "Heavy Showers",
          "image": "http://openweathermap.org/img/wn/09d@2x.png"
      },
      "night": {
          "description": "Heavy Showers",
          "image": "http://openweathermap.org/img/wn/09n@2x.png"
      }
  },
  "85": {
      "day": {
          "description": "Light Snow Showers",
          "image": "http://openweathermap.org/img/wn/13d@2x.png"
      },
      "night": {
          "description": "Light Snow Showers",
          "image": "http://openweathermap.org/img/wn/13n@2x.png"
      }
  },
  "86": {
      "day": {
          "description": "Snow Showers",
          "image": "http://openweathermap.org/img/wn/13d@2x.png"
      },
      "night": {
          "description": "Snow Showers",
          "image": "http://openweathermap.org/img/wn/13n@2x.png"
      }
  },
  "95": {
      "day": {
          "description": "Thunderstorm",
          "image": "http://openweathermap.org/img/wn/11d@2x.png"
      },
      "night": {
          "description": "Thunderstorm",
          "image": "http://openweathermap.org/img/wn/11n@2x.png"
      }
  },
  "96": {
      "day": {
          "description": "Light Thunderstorms With Hail",
          "image": "http://openweathermap.org/img/wn/11d@2x.png"
      },
      "night": {
          "description": "Light Thunderstorms With Hail",
          "image": "http://openweathermap.org/img/wn/11n@2x.png"
      }
  },
  "99": {
      "day": {
          "description": "Thunderstorm With Hail",
          "image": "http://openweathermap.org/img/wn/11d@2x.png"
      },
      "night": {
          "description": "Thunderstorm With Hail",
          "image": "http://openweathermap.org/img/wn/11n@2x.png"
      }
  }
}
async function getCityCoordinates() {
  document.getElementById(`sevendays`).innerHTML = ``
  let cityName = CityInput.value.trim();
  CityInput.value = '';
  if (!cityName) return;
  let GEOCODING_API_URL = `https://geocoding-api.open-meteo.com/v1/search?name=${cityName}`;
  const response = await fetch(GEOCODING_API_URL)
  const data = await response.json();
    console.log(data,`ini data contoh`) 
  const response7days = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${data.results[0].latitude}&longitude=${data.results[0].longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min`)
  const data7days = await response7days.json();
    console.log(data7days, `for loop`);
  for (let i = 0; i < data7days.daily.temperature_2m_max.length; i++) {
    document.getElementById(`sevendays`).innerHTML += `
    <div class="card">
    <p>${data7days.daily.time[i]}</p>
    <img src=${wmo[data7days.daily.weather_code[i]].day.image} alt="${wmo[data7days.daily.weather_code[i]].day.description}">
    <p>${data7days.daily.temperature_2m_max[i]}&deg;C</p>
  </div>`  
  }
  const responseHumidty = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${data.results[0].latitude}&longitude=${data.results[0].longitude}&current=temperature_2m,relative_humidity_2m,weather_code,precipitation,pressure_msl,wind_speed_10m`)
  const Humidty = await responseHumidty.json();
    console.log(Humidty, `humidity`);
      document.getElementById(`Humidity`).innerHTML = Humidty.current.relative_humidity_2m+`%`
      document.getElementById(`current-temperature`).innerHTML = Humidty.current.temperature_2m+`&deg;C`
      document.getElementById(`pressure`).innerHTML = Humidty.current.pressure_msl+`hPa`
      document.getElementById(`Precipitation`).innerHTML = Humidty.current.precipitation+`mm`
      document.getElementById(`Wind`).innerHTML = Humidty.current.wind_speed_10m+`m/s`
      document.getElementById(`date`).innerHTML = Humidty.current.time+`m/s`
      document.getElementById(`location`).innerHTML = cityName
      document.getElementById(`imageweather`).innerHTML = `<img src=${wmo[Humidty.current.weather_code].day.image} alt="${wmo[Humidty.current.weather_code].day.description}"></img>`
}

searchBtn.addEventListener('click', getCityCoordinates);
async function fetchWeather(){
let GEOCODING_API_URL = `https://geocoding-api.open-meteo.com/v1/search?name=Jakarta`;
const response = await fetch(GEOCODING_API_URL)
const data = await response.json();
  console.log(data,`ini data contoh`) 
const response7days = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${data.results[0].latitude}&longitude=${data.results[0].longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min`)
const data7days = await response7days.json();
  console.log(data7days, `for loop`);
for (let i = 0; i < data7days.daily.temperature_2m_max.length; i++) {
  document.getElementById(`sevendays`).innerHTML += `
  <div class="card">
  <p>${data7days.daily.time[i]}</p>
  <img src=${wmo[data7days.daily.weather_code[i]].day.image} alt="${wmo[data7days.daily.weather_code[i]].day.description}">
  <p>${data7days.daily.temperature_2m_max[i]}&deg;C</p>
</div>` 
}
const responseHumidty = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${data.results[0].latitude}&longitude=${data.results[0].longitude}&current=temperature_2m,relative_humidity_2m,weather_code,precipitation,pressure_msl,wind_speed_10m`)
  const Humidty = await responseHumidty.json();
    console.log(Humidty, `humidity`);
      document.getElementById(`Humidity`).innerHTML = Humidty.current.relative_humidity_2m+`%`
      document.getElementById(`current-temperature`).innerHTML = Humidty.current.temperature_2m+`&deg;C`
      document.getElementById(`pressure`).innerHTML = Humidty.current.pressure_msl+`hPa`
      document.getElementById(`Precipitation`).innerHTML = Humidty.current.precipitation+`mm`
      document.getElementById(`Wind`).innerHTML = Humidty.current.wind_speed_10m+`m/s`
      document.getElementById(`location`).innerHTML = cityName
      document.getElementById(`imageweather`).innerHTML = `<img src=${wmo[Humidty.current.weather_code].day.image} alt="${wmo[Humidty.current.weather_code].day.description}"></img>`
}
fetchWeather()

