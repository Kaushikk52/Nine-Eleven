function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 19.27955532584792,  lng: 72.85685415770527};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Shanti Enclave, Mira Road (E)' // Title Location
    });
}