function initMap() {

    //location
    var loc = {lat: 33.742001, lng: -117.823639};

   var map = new google.maps.Map(document.getElementById('map'), {
      center: loc,
      zoom: 8
    });

    // putting marker on location
    var marker = new google.maps.Marker({
        position: loc,
        map: map
    }); 
   
  }

// smooth scrolling
$('#navbar a, .btn').on('click', function(event){
    if(this.hash !== ''){
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate({
            scrollTop: $(hash).offset().top - 80
        },
        800
        );
    }
});