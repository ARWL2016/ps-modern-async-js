const delayms = 1;

function getCurrentCity(callback) {
  setTimeout(function () {

    const city = "New York, NY";
    callback(null, city);

  }, delayms)
}

function getWeather(city, callback) {
  setTimeout(function () {

    if (!city) {
      callback(new Error("City required to get weather"));
      return;
    }

    const weather = {
      temp: 50
    };

    callback(null, weather)

  }, delayms)
}

function getForecast(city, callback) {
  setTimeout(function () {

    if (!city) {
      callback(new Error("City required to get forecast"));
      return;
    }

    const fiveDay = {
      fiveDay: [60, 70, 80, 45, 50]
    };

    callback(null, fiveDay)

  }, delayms)
}

suite.only('Operations');

function fetchCurrentCity() {
  console.log("FETCH");

  getCurrentCity(function (error, result) {
   console.log('RESULT:', result);
    return result;

  })

}

test("fetchCurrentCity with separate success and error callbacks", function(done) {

  fetchCurrentCity(
    error => done(error),
    result => done());

});

test.only("fetchCurrentCity passes the callbacks later on", function(done) {
  const operation = fetchCurrentCity();
  // operation.setCallbacks(
  //   result => done(), 
  //   error => done(error));
  console.log(operation);
  done();
})