document.getElementById('submit').addEventListener('click', event => {
  event.preventDefault()
  let userSearch = document.getElementById('input_text').value
  fetch(`https://api.openweathermap.org/data/2.5/weather?units=imperial&q=${userSearch}&APPID=74d732ec0d08c3c84269e1425799d474`)
    .then(r => r.json())
    .then(weather => {
      console.log(weather)
      let sec = `${weather.dt}`
      let date = new Date(sec*1000)
      document.getElementById('city-name').innerHTML = `${weather.name}, ${date} <img class="icon" src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"></img>`
      document.getElementById('city-info').innerHTML = `
      Temperature: ${weather.main.temp} ℉
      <br>
      Humidity: ${weather.main.humidity}%
      <br>
      Wind Speed: ${weather.wind.speed} MPH
      `
    })
    .catch(e => console.error(e))
  let city = document.createElement('li')
  city.className = 'list-group-item'
  city.textContent = userSearch
  document.getElementById('list').append(city)
  document.getElementById('input_text').value = ''
  fetch(`https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=${userSearch}&APPID=74d732ec0d08c3c84269e1425799d474`)
    .then(r => r.json())
    .then(forecast => {
      console.log(forecast)
      document.getElementById('date1').textContent = `${forecast.list[0].dt_txt}`
      document.getElementById('date2').textContent = `${forecast.list[8].dt_txt}`
      document.getElementById('date3').textContent = `${forecast.list[16].dt_txt}`
      document.getElementById('date4').textContent = `${forecast.list[24].dt_txt}`
      document.getElementById('date5').textContent = `${forecast.list[32].dt_txt}`
      // document.getElementById('city-name').innerHTML = `${weather.name}, ${date} <img class="icon" src="https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"></img>`
      // document.getElementById('city-info').innerHTML = `
      // Temperature: ${weather.main.temp} ℉
      // <br>
      // Humidity: ${weather.main.humidity}%
      // <br>
      // Wind Speed: ${weather.wind.speed} MPH
      // `
    })
    .catch(e => console.error(e))
})