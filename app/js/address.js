/**
 * Created by SavioJoseph on 8/22/2015.
 */
function initialize(){
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
        center: new google.maps.LatLng(41.839141, -87.622303),
        zoom: 8
   };
    var map = new google.maps.Map(mapCanvas, mapOptions);
    var companyPos = new google.maps.LatLng(41.839141,-87.622303);
    var companyMarker = new google.maps.Marker({
        position: companyPos,
        map: map,
        title:"Some title"
    });
}
google.maps.event.addDomListener(window, 'load', initialize);
