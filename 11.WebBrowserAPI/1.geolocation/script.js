//------------------getCurrentPosition()---------------------
function curSuccess(pos) {
  const coords = pos.coords;
  console.log(`Latitude: ${coords.latitude}`)
  console.log(`Longitude: ${coords.longitude}`)
  console.log(`Within: ${coords.accuracy} meters`)
}

function curError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const curOptions = {
  enableHighAccuracy: true, // Use GPS if available 
  timeout: 5000, // Time to wait to stop trying for location
  maximumAge: 0 //Do not use a cached position
};


navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);


//------------------watchPosition()---------------------
const target = {
  latitude: 53.2615237,
  longitude: -113.5499661,
}

function watchSuccess(pos) {
  const coords = pos.coords;
  console.log(`Latitude: ${coords.latitude}`)
  console.log(`Longitude: ${coords.longitude}`)
  console.log(`Within: ${coords.accuracy} meters`)

  if(target.latitude === coords.latitude && target.logitude === coords.logitude) {
    console.log('You have reached your destination.')
    navigator.geolocation.clearWatch(id)
  }
}

function watchError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const watchOptions = {
  enableHighAccuracy: true,
  timeout: 5000, 
  maximumAge: 0 
};


const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchOptions);




