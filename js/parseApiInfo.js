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
    let reportDate = report.dt_txt.slice(0,10)
    let reportHour = Number(report.dt_txt.slice(11,13))
    //reformat date so getDayName returns correct time zone day
    let reportDateYear = reportDate.slice(0,4)
    let reportDateMonth = reportDate.slice(5,7)
    let reportDateDay = reportDate.slice(8,10)
    let reportDateReformat = `${reportDateMonth}/${reportDateDay}/${reportDateYear}`

    //if no dates have been added to array yet
    if(dates === [] || currentDay !== reportDate){
      dates.push(reportDateReformat)
      datesOriginal.push(reportDate)
      weekdays.push(getDayName(reportDateReformat, 'en-US'))
    }
    //Get icon and description at 1800 hours utc (or whatever is available for the first day)
    if(reportHour === 18 || icons === []){
      icons.push(report.weather[0].icon)
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
