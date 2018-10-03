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
    if(date === report.dt_txt.slice(0,10)){
      let hourDiv = document.createElement('div')
      hourDiv.className = 'hourDiv'
      hourDiv.id = `hourDiv${divCounter}`
      hourDiv.innerHTML = date
      divCounter ++

      myDF.appendChild(hourDiv)
    }
  }
  currentDayHourly.appendChild(myDF)
}


window.onload = createfiveDayDivs
