//copied and modified from stackoverflow, converts unix timestamp to readable format in local timezone
function timeConverter(UNIX_timestamp){
  let a = new Date(UNIX_timestamp * 1000)
  let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  let year = a.getFullYear()
  let month = months[a.getMonth()]
  let date = a.getDate()
  let hour = a.getHours()
  let min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes()
  let sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds()
  let timeString = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec

  let weekday = a.toLocaleDateString('en-US', { weekday: 'long' })
  //puts hour in 00:00 AM/PM format
  let hour12 = function(){
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
  let timeObject = {
    "date": date,
    "month": month,
    "year": year,
    "hour": hour,
    "hour12": hour12,
    "min": min,
    "sec": sec,
    "full": timeString,
    "weekday": weekday
  }
  return timeObject
}
