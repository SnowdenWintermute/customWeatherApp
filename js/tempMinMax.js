//taken from stack overflow. It uses prototypical inheritance to make a function that returns the max or min value in an array.
Array.max = function( array ){ return Math.max.apply( Math, array ) }
Array.min = function( array ){ return Math.min.apply( Math, array ) }

function tempMinMax(weatherData){
  let reports = weatherData.list
  let minTemps = []
  let maxTemps = []
  let currentDate = timeConverter(weatherData.list[0].dt).date
  let currentDateTemps = []
  //loop through all 3hour reports in the list
  for(report of reports){
    //get the date of current report to compare to last report
    let reportDate = timeConverter(report.dt).date
    //if current report is the same day as last report, push current report's temp into array for later comparisons
    if(reportDate === currentDate){ currentDateTemps.push(report.main.temp) }
    //if new date (or last date in array), find min and max temps in currentDayTemps array and push them to min/max temps arrays
    if(reportDate !== currentDate || reports.indexOf(report) === reports.length-1){
      minTemps.push(Array.min(currentDateTemps))
      maxTemps.push(Array.max(currentDateTemps))
      //reset the current day temps array with new day's temps
      currentDateTemps = [report.main.temp]
    }
    //set date to current report's date
    currentDate = reportDate
  }
  return({minTemps, maxTemps})
}
