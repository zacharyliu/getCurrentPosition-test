navigator.geolocation.getCurrentPosition(function () {
  console.log("success", arguments);
}, function () {
  console.log("error", arguments);
});
