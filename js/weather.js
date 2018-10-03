// 'http://api.openweathermap.org/data/2.5/forecast?q=London,uk&APPID=55bd4eb052cb7c72fd8594fbd1ee7fee'

let urlRoot = 'http://api.openweathermap.org/data/2.5/weather?q='
let apiID = '55bd4eb052cb7c72fd8594fbd1ee7fee'

let button = document.getElementById('submit')
let cityInput = document.getElementById('cityInput')
let countryInput = document.getElementById('countryInput')

button.addEventListener('click', function(){
  getWeather(cityInput.value, countryInput.value)
})

function getWeather(city,country){

  let fullUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&APPID=${apiID}`
  if(!country) fullUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${apiID}`
  if(!city) fiveDayTitle.innerHTML = 'Please enter a city'

  let xhr = new XMLHttpRequest()
  xhr.open('GET', fullUrl, true)
  xhr.onload = function(){
    if(this.status === 200){
      let weatherData = JSON.parse(this.responseText)
      console.log(weatherData);

      fiveDayTitle.innerHTML = weatherData.city.name + " " + weatherData.city.country

      //fill the divs with weather info
      for(let i=0; i<5; i++){
        //days and dates
        document.getElementById(`dayDivDate${i+1}`).innerHTML = weekdaysAndDates(weatherData).dates[i]
        document.getElementById(`dayDivDay${i+1}`).innerHTML = weekdaysAndDates(weatherData).weekdays[i]
        document.getElementById(`dayDivDesc${i+1}`).innerHTML = weekdaysAndDates(weatherData).descriptions[i]
        document.getElementById(`dayDivImg${i+1}`).src = `http://openweathermap.org/img/w/${weekdaysAndDates(weatherData).icons[i]}.png`
        //high and low temps
        let fTempMin = Math.round(1.8*(tempMinMax(weatherData).minTemps[i]-273) + 32)
        let fTempMax = Math.round(1.8*(tempMinMax(weatherData).maxTemps[i]-273) + 32)
        document.getElementById(`dayDivTemp${i+1}`).innerHTML = `${fTempMax}° F / ${fTempMin}° F`
      }

    } else {
      console.log('error: xhr not 200');
    }
  }
  xhr.send()
}
