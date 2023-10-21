const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

fetchCoordsByIP('162.245.144.188', (error, coordinates) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  fetchISSFlyOverTimes(coordinates, (error, flyover) => {
    if (error) {
      console.log("It didn't work!" , error);
      return;
    }
  
    console.log('ISS Flyover data:' , flyover);
  });
  // console.log('It worked! Returned coordinates:' , coordinates);
});
