// https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript#1026087
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}

// Get browser location
function getLocation(){
  navigator.geolocation.getCurrentPosition(success, error)
		function success(pos){
			let lat = pos.coords.latitude
			let long = pos.coords.longitude
      getWeather("", "", lat, long)
		}
		function error(){
			console.log('error')
		}
}

// Get city name from Ip
function getCityNameFromIp(){
  let apiURL = `http://api.ipstack.com/${ip}?access_key=40b20ec93314f08b9fc7e46e6431918f`
}

//remove child elements
function removeAllChildElements(parent){
  let hasChildren = true
  while(hasChildren){
    if(parent.firstChild){
      parent.removeChild(parent.firstChild)
    }else{
      hasChildren = false
    }
  }
}
