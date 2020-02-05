document.getElementById('submit').addEventListener('click', event => {
  event.preventDefault()
  let userSearch = document.getElementById('input_text').value
  fetch(`http://api.openweathermap.org/data/2.5/weather?units=imperial&q=${userSearch}&APPID=74d732ec0d08c3c84269e1425799d474`)
    .then(r => r.json())
    .then(weather => {
      console.log(weather)
      let sec = `${weather.dt}`
      let date = new Date(sec*1000)
      document.getElementById('city-name').innerHTML = `${weather.name}, ${date} <img class="icon" src="http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png"></img>`
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
})