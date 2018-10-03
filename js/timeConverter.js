//copied from stackoverflow, converts unix timestamp to readable format
function timeConverter(UNIX_timestamp){
  //let offset = (new Date()).getTimezoneOffset()/60
  var a = new Date(UNIX_timestamp * 1000)
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  var year = a.getFullYear()
  var month = months[a.getMonth()]
  var date = a.getDate()
  var hour = a.getHours()
  var min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes()
  var sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds()
  var timeString = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec
  var hour12 = function(){
    let result = 0
    let am = "AM"
    if(hour>12) {
      result = hour-12
      am = "PM"
    }else{
      result = hour
    }
    result = result.toString() + ":00 " + am

    return result
  }
  var timeObject = {
    "date": date,
    "month": month,
    "year": year,
    "hour": hour,
    "hour12": hour12,
    "min": min,
    "sec": sec,
    "full": timeString
  }
  return timeObject
}
