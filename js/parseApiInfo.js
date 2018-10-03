function parseApiInfo(weatherData){

  let reports = weatherData.list
  let weekdays = []
  let dates = []
  let datesOriginal = []
  let icons = []
  let descriptions = []
  let currentDay = ""

//loop through all 3 hour reports in the list
  for(report of reports){
    //extract the date from dt_text string
    let reportDate = timeConverter(report.dt).date
    let reportHour = timeConverter(report.dt).hour
    //reformat date so getDayName returns correct time zone day
    let reportDateYear = timeConverter(report.dt).year
    let reportDateMonth = timeConverter(report.dt).month
    let reportDateDay = timeConverter(report.dt).day
    let reportDateFull = timeConverter(report.dt).full
    let reportDateReformat = `${reportDateMonth}/${reportDateDay}/${reportDateYear}`

    //if no dates have been added to array yet
    if(dates === [] || currentDay !== reportDate){
      dates.push(reportDateFull.slice(0,10))
      datesOriginal.push(reportDateFull.slice(0,10))
      weekdays.push(getDayName(reportDateFull.slice(0,10), 'en-US'))
    }

    //Get icon and description at 1400 hours utc (or whatever is available for the first day)
    if(reportHour === 14 || icons.length === 0){
      icons.push(report.weather[0].icon)
      console.log(report.weather[0].icon);
      descriptions.push(report.weather[0].description)
    }

      //set this report's day as the current day
      currentDay = reportDate
    }
    return({
            "weekdays": weekdays,
            "dates":dates,
            "datesOriginal": datesOriginal,
            "icons": icons,
            "descriptions": descriptions
          })
}

//Gets day name from date
// Taken from stackoverflow https://stackoverflow.com/questions/24998624/day-name-from-date-in-js
function getDayName(dateStr, locale)
{
    var date = new Date(dateStr)
    return date.toLocaleDateString(locale, { weekday: 'long' })
}
