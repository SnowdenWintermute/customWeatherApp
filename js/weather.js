//form elements
let getWeatherButton = document.getElementById('getWeatherButton')
let getLocationButton = document.getElementById('getLocationButton')
let cityInput = document.getElementById('cityInput')
let countryInput = document.getElementById('countryInput')

//buttons ane event listeners
getWeatherButton.addEventListener('click', function(){ getWeather(cityInput.value, countryInput.value) })
getLocationButton.addEventListener('click', function(){ getLocation() })
document.addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode
    if (key === 13) { // 13 is enter key
        if(document.activeElement === cityInput ||
           document.activeElement === countryInput) {
          getWeather(cityInput.value, countryInput.value)
        }
    }
  })

function getWeather(city, country, lat, long){
  //remove any previous search results
  removeAllChildElements(document.getElementById('fiveDaySections'))
  removeAllChildElements(currentDayHourly)
  document.getElementById('weatherDetailsTitle').className = ""
  document.getElementById('weatherDetailsTitle').innerHTML = null
  //Set up the tite/error div
  document.getElementById(`fiveDay`).className = "fiveDay flex-center"
  document.getElementById(`fiveDayTitle`).className = "fiveDayTitle"
  //set up url templates based on entered data or location
  let urlRoot = 'https://api.openweathermap.org/data/2.5/'
  let apiID = '55bd4eb052cb7c72fd8594fbd1ee7fee'
  let fullUrl = `${urlRoot}forecast?q=${city},${country}&APPID=${apiID}`
  if(!country) fullUrl = `${urlRoot}forecast?q=${city}&APPID=${apiID}`
  if(lat && long) fullUrl =  `${urlRoot}forecast?lat=${lat}&lon=${long}&APPID=55bd4eb052cb7c72fd8594fbd1ee7fee`
  //start the ajax request
  let xhr = new XMLHttpRequest()
  xhr.open('GET', fullUrl, true)
  //Show loading message
  if(xhr.readyState === 1){ fiveDayTitle.innerHTML = "Connection to API established..."}
  xhr.onreadystatechange = function(){
      if(xhr.readyState === 2){ fiveDayTitle.innerHTML = "API request recieved..."}
      if(xhr.readyState === 3){ fiveDayTitle.innerHTML = "Processing request..."}
    if(this.readyState===4 && this.status === 200){
      let weatherData = JSON.parse(this.responseText)
      let parsedApiInfo = parseApiInfo(weatherData)
      let numberOfDates = parsedApiInfo.dates.length
      //create the 5 day Divs
      createfiveDayDivs(numberOfDates)
      //display city name
      fiveDayTitle.innerHTML = weatherData.city.name + " " + weatherData.city.country
      //fill the divs with weather info, remove any old search results
      for(let i=0; i<numberOfDates; i++){
        //put info in the five day divs
        document.getElementById(`dayDivDate${i+1}`).innerHTML = parsedApiInfo.formattedDates[i]
        document.getElementById(`dayDivDay${i+1}`).innerHTML = parsedApiInfo.weekdays[i]
        document.getElementById(`dayDivDesc${i+1}`).innerHTML = parsedApiInfo.descriptions[i]
        document.getElementById(`dayDivImg${i+1}`).src = `https://openweathermap.org/img/w/${parsedApiInfo.icons[i]}.png`
        //set daily high and low temps
        let minMaxTemps = tempMinMax(weatherData)
        let fTempMin = Math.round(1.8*(minMaxTemps.minTemps[i]-273) + 32)
        let fTempMax = Math.round(1.8*(minMaxTemps.maxTemps[i]-273) + 32)
        document.getElementById(`dayDivTemp${i+1}`).innerHTML = `${fTempMax}°F / ${fTempMin}°F`
        //set up the 'see hourly' buttons
        let dayDivDetails = document.getElementById(`dayDivDetails${i+1}`)
        dayDivDetails.innerHTML = "See Hourly"
        dayDivDetails.className = "dayDivDetails flex-center"
        dayDivDetails.addEventListener("click", function(){ createHourDivs(weatherData, parsedApiInfo.dates[i], parsedApiInfo.formattedDates[i], i) })
      }
    } else {
      //Display error if invalid data entered
      if(!city && !lat) {
        fiveDayTitle.innerHTML = 'Please enter a city or use location button.'
        removeAllChildElements(document.getElementById('fiveDaySections'))
      }else{
        fiveDayTitle.innerHTML = 'Invalid city name...'
        removeAllChildElements(document.getElementById('fiveDaySections'))
      }
    }
  }
  xhr.send()
}
