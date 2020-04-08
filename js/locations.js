//google map api
function initMap() {
  var seoulGarden = {lat: 32.895783, lng: -96.895291} //get Seoul Garden location
        var map = new google.maps.Map(document.getElementById('map'), {  //create map
          center: seoulGarden,
          zoom: 16
        });
        var marker = new google.maps.Marker({position: seoulGarden, map: map}); //marker on Seoul Garden location
}

//navbar becomes solid when user scrolls
$(document).ready(function() {
  $(window).scroll(function() {    
      var scroll = $(window).scrollTop();
      if (scroll >= 100) {
          $(".navbar").addClass("bg-dark");
      } else {
        $(".navbar").removeClass("bg-dark");
      }
    }); 
});