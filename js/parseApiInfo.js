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
    let reportDate = timeConverter(report.dt).date
    let reportHour = timeConverter(report.dt).hour
    let reportDateYear = timeConverter(report.dt).year
    let reportDateMonth = timeConverter(report.dt).month
    let reportDateMonthNumber = timeConverter(report.dt).monthNumber
    let reportDateDay = timeConverter(report.dt).weekday
    let reportDateFull = timeConverter(report.dt).full
    let reportDateReformat = `${reportDateMonthNumber}/${reportDate}/${reportDateYear}`
    //push dates and weekdays to respective arrays
    if(dates === [] || currentDay !== reportDate){
      formattedDates.push(reportDateReformat)
      dates.push(reportDate)
      weekdays.push(reportDateDay)
    }
    //Get icon and description at 1400 hours utc (or whatever is available for the first day)
    if(reportHour === 14 || icons.length === 0){
      icons.push(report.weather[0].icon)
      descriptions.push(report.weather[0].description)
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
