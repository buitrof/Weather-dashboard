// fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${userSearch}&APPID=74d732ec0d08c3c84269e1425799d474`)
//   .then(r => r.json())
//   .then(weather => {
//     console.log(weather)
//   })
//   .catch(e => console.error(e))

document.getElementById('submit').addEventListener('click', event => {
  event.preventDefault()
  let userSearch = document.getElementById('input_text').value
  fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${userSearch}&APPID=74d732ec0d08c3c84269e1425799d474`)
    .then(r => r.json())
    .then(weather => {
      console.log(weather)
    })
    .catch(e => console.error(e))
  let city = document.createElement('li')
  city.textContent = userSearch
  document.getElementById('list').append(city)
})