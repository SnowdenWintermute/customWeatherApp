let createfiveDayDivs = function(){
  let fiveDaySections = document.getElementById('fiveDaySections')
  let myDF = document.createDocumentFragment()

  for(let i=0; i<5; i++){
    let dayDiv = document.createElement('div')
    dayDiv.className = "dayDiv"
    dayDiv.id = `dayDiv${i+1}`

    let dayDivDay = document.createElement('div')
    dayDivDay.className = "dayDivDay"
    dayDivDay.id = `dayDivDay${i+1}`
    dayDiv.appendChild(dayDivDay)

    let dayDivDate = document.createElement('div')
    dayDivDate.className = "dayDivDate"
    dayDivDate.id = `dayDivDate${i+1}`
    dayDiv.appendChild(dayDivDate)

    let dayDivImg = document.createElement('img')
    dayDivImg.className = "dayDivImg"
    dayDivImg.id = `dayDivImg${i+1}`
    dayDivImg.src = `...`
    dayDiv.appendChild(dayDivImg)

    let dayDivTemp = document.createElement('div')
    dayDivTemp.className = "dayDivTemp"
    dayDivTemp.id = `dayDivTemp${i+1}`
    dayDiv.appendChild(dayDivTemp)

    let dayDivDesc = document.createElement('div')
    dayDivDesc.className = "dayDivDesc"
    dayDivDesc.id = `dayDivDesc${i+1}`
    dayDiv.appendChild(dayDivDesc)

    let dayDivDetails = document.createElement('div')
    dayDivDetails.id = `dayDivDetails${i+1}`
    dayDiv.appendChild(dayDivDetails)

    myDF.appendChild(dayDiv)
  }

  fiveDaySections.appendChild(myDF)
}

function createHourDivs(weatherData, date){
  let currentDayHourly = document.getElementById('currentDayHourly')
  let myDF = document.createDocumentFragment()
  let reports = weatherData.list
  let divCounter = 0

  //set title of hourly weather section
  document.getElementById('weatherDetailsTitle').innerHTML = date

  //remove hour divs from any previously called day
  let hasChildren = true
  while(hasChildren){
    if(currentDayHourly.firstChild){
      currentDayHourly.removeChild(currentDayHourly.firstChild)
    }else{
      hasChildren = false
    }
  }
  //create hourly info divs
  for(report of reports){
    if(date === timeConverter(report.dt).full.slice(0,10)){
      let hourDiv = document.createElement('div')
      hourDiv.className = 'hourDiv'
      hourDiv.id = `hourDiv${divCounter+1}`

      let hourDivDate = document.createElement('div')
      hourDivDate.className = 'hourDivDate'
      hourDivDate.id = `hourDivDate${divCounter+1}`
      hourDivDate.innerHTML = timeConverter(report.dt).hour12()
      hourDiv.appendChild(hourDivDate)

      let hourDivIcon = document.createElement('img')
      hourDivIcon.className = 'hourDivIcon'
      hourDivIcon.id = `hourDivIcon${divCounter+1}`
      hourDivIcon.src = `http://openweathermap.org/img/w/${report.weather[0].icon}.png`
      hourDiv.appendChild(hourDivIcon)

      let hourDivDesc = document.createElement('div')
      hourDivDesc.className = 'hourDivDesc'
      hourDivDesc.id = `hourDivDesc${divCounter+1}`
      hourDivDesc.innerHTML = report.weather[0].description
      hourDiv.appendChild(hourDivDesc)

      let hourDivTemp = document.createElement('div')
      hourDivTemp.className = 'hourDivTemp'
      hourDivTemp.id = `hourDivTemp${divCounter+1}`
      hourDivTemp.innerHTML = `Temperature: ${Math.round(1.8*(report.main.temp-273) + 32)}°F / ${Math.round(report.main.temp-273)}°C`
      hourDiv.appendChild(hourDivTemp)

      let hourDivHumidity = document.createElement('div')
      hourDivHumidity.className = 'hourDivHumidity'
      hourDivHumidity.id = `hourDivHumidity${divCounter+1}`
      hourDivHumidity.innerHTML = `Humidity: ${Math.round(report.main.humidity)}%`
      hourDiv.appendChild(hourDivHumidity)

      let hourDivWind = document.createElement('div')
      hourDivWind.className = 'hourDivWind'
      hourDivWind.id = `hourDivWind${divCounter+1}`
      hourDivWind.innerHTML = `Wind Speed: ${report.wind.speed} m/s at ${Math.round(report.wind.deg)}°`
      hourDiv.appendChild(hourDivWind)

      let hourDivPressure = document.createElement('div')
      hourDivPressure.className = 'hourDivPressure'
      hourDivPressure.id = `hourDivPressure${divCounter+1}`
      hourDivPressure.innerHTML = `Air Pressure: ${Math.round(report.main.pressure)} hPa`
      hourDiv.appendChild(hourDivPressure)

      divCounter ++

      myDF.appendChild(hourDiv)
    }
  }
  currentDayHourly.appendChild(myDF)
}


window.onload = createfiveDayDivs
