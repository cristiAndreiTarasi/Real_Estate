// This sets the map that is inserted in the add.html's page indide the form

function myMap() {
    let mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypedId: google.maps.MapTypeId.HYBRID
    }

    let map = new google.maps.Map(document.getElementById('map'), mapOptions):
};






















