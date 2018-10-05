//taken from stack overflow. It uses prototypical inheritance to make a function that returns the max or min value in an array.
Array.max = function( array ){ return Math.max.apply( Math, array ) }
Array.min = function( array ){ return Math.min.apply( Math, array ) }

function tempMinMax(weatherData){
  let reports = weatherData.list
  let minTemps = []
  let maxTemps = []
  let currentDay = timeConverter(weatherData.list[0].dt).date
  let currentDayTemps = []
  //loop through all 3hour reports in the list
  for(report of reports){
    //get the date of current report to compare to last report
    let reportDay = timeConverter(report.dt).date
    //if current report is the same day as last report, push current report's temp into array for later comparisons
    if(reportDay === currentDay || currentDay === ""){
      currentDayTemps.push(report.main.temp)
    }else{
      //if new date, find min and max temps in currentDayTemps array and push them to min/max temps arrays
      minTemps.push(Array.min(currentDayTemps))
      maxTemps.push(Array.max(currentDayTemps))
      //reset the current day temps array with new day's temps
      currentDayTemps = [report.main.temp]
    }
    //set date to current report's date
    currentDay = reportDay
  }
  return({minTemps, maxTemps})
}
