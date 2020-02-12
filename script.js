// API KEY: 10104413540985348

$("#movie-butt").on("click", function(event) {
  console.log("clicked");
  event.preventDefault();
  let inquiry = $("#search").val();
  console.log(inquiry);
  var proxy = "https://cors-anywhere.herokuapp.com/";
  let query =
    "https://superheroapi.com/api/10104413540985348/search/" + inquiry;

  $.ajax({
    url: proxy + query,
    method: "GET"
  }).then(function(response) {
    console.log(response.results[0].biography);
    let bio = response.results[0].biography;
    let app = response.results[0].appearance;
    $("#fullName").text(bio["full-name"]);
    $("#birthplace").text(bio["place-of-birth"]);
    $("#height").text(app.height[0]);
    $("#weight").text(app.weight[0]);
  });
});

//   event.preventDefault();
//   console.log("you clicked");

//   let inquiry = document.getElementById("search").val();
//   console.log(inquiry);
