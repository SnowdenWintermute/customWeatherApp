Array.max = function( array ){
  return Math.max.apply( Math, array );
};
Array.min = function( array ){
  return Math.min.apply( Math, array );
};

function tempMinMax(weatherData){

  let days = weatherData.list
  let minTemps = []
  let maxTemps = []
  let currentDay = ""

  let currentDayTemps = []

//loop through all 3 hour reports in the list
  for(report of days){
    //extract the date from dt_text string
    let reportDay = report.dt_txt.slice(0,11)
    //if current report is the same day as last report
    if(reportDay === currentDay || currentDay === ""){
      //push current report's temp into array for later comparisons
      currentDayTemps.push(report.main.temp)
    }else{
      //find min and max temps in currentDayTemps array and push them to min/max temps arrays
      minTemps.push(Array.min(currentDayTemps))
      maxTemps.push(Array.max(currentDayTemps))
      //reset the current day temps array with new day's temps
      currentDayTemps = [report.main.temp]
    }
    //set day to current report's day
    currentDay = reportDay
  }

  return({minTemps, maxTemps})
}
