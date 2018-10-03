let createfiveDayDivs = function(){
  let fiveDaySections = document.getElementById('fiveDaySections')
  let myDF = document.createDocumentFragment()

  for(let i=0; i<5; i++){
    let dayDiv = document.createElement('div')
    dayDiv.className += "dayDiv"
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
    dayDivImg.src = `http://openweathermap.org/img/w/10d.png`
    dayDiv.appendChild(dayDivImg)

    let dayDivTemp = document.createElement('div')
    dayDivTemp.className = "dayDivTemp"
    dayDivTemp.id = `dayDivTemp${i+1}`
    dayDiv.appendChild(dayDivTemp)

    let dayDivDesc = document.createElement('div')
    dayDivDesc.className = "dayDivDesc"
    dayDivDesc.id = `dayDivDesc${i+1}`
    dayDiv.appendChild(dayDivDesc)

    myDF.appendChild(dayDiv)
  }

  fiveDaySections.appendChild(myDF)
}

window.onload = createfiveDayDivs
