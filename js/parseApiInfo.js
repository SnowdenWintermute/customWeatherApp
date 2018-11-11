function parseApiInfo(weatherData){
  let reports = weatherData.list
  let weekdays = []
  let dates = []
  let formattedDates = []
  let icons = []
  let descriptions = []
  let currentDay = ""

  //loop through all three-hour reports in the list
  for(report of reports){
    //extract the date and hour from the unix timestamp
    let convertedTime = timeConverter(report.dt)
    let reportDate = convertedTime.date
    let reportHour = convertedTime.hour
    let reportDateYear = convertedTime.year
    let reportDateMonth = convertedTime.month
    let reportDateMonthNumber = convertedTime.monthNumber
    let reportDateDay = convertedTime.weekday
    let reportDateFull = convertedTime.full
    let reportDateReformat = `${reportDateMonthNumber}/${reportDate}/${reportDateYear}`
    //push dates and weekdays to respective arrays
    if(dates === [] || currentDay !== reportDate){
      formattedDates.push(reportDateReformat)
      dates.push(reportDate)
      weekdays.push(reportDateDay)
    }
<<<<<<< HEAD
    //Get icon and description at 1400 hours utc (or whatever is available for the first day)
    if(reportHour === 14 || reportHour === 13 || icons.length === 0){
=======
    //Get icon and description at 1400 hours utc (or whatever is available for the first day and last day)
    if(reportHour === 14 || icons.length === 0){
>>>>>>> 43516761f0b8d87c6a8bfce4f4d62191ee3855ae
      icons.push(report.weather[0].icon)
      descriptions.push(report.weather[0].description)
    }else if(reportHour < 14 && icons.length === 5){
      if(reportHour === 11){
        icons.push(report.weather[0].icon)
        descriptions.push(report.weather[0].description)
      }else if(reportHour === 8){
        icons.push(report.weather[0].icon)
        descriptions.push(report.weather[0].description)
      }else if (reportHour === 5) {
        icons.push(report.weather[0].icon)
        descriptions.push(report.weather[0].description)
      }else if(reportHour === 2){
        icons.push(report.weather[0].icon)
        descriptions.push(report.weather[0].description)
      }
    }
    //set this report's day as the "current day" to compare to in the loop
    currentDay = reportDate
    }
    return({
            "weekdays": weekdays,
            "dates":dates,
            "formattedDates": formattedDates,
            "icons": icons,
            "descriptions": descriptions
          })
}
