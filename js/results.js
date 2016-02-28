function init_map() {
var var_location = new google.maps.LatLng(41.937570, -87.650590);

    var var_mapoptions = {
      center: var_location,
      zoom: 15
    };

var var_marker = new google.maps.Marker({
  position: var_location,
  map: var_map,
  title:"Venice"});

    var var_map = new google.maps.Map(document.getElementById("map-container"),
        var_mapoptions);

var_marker.setMap(var_map); 

}
 
google.maps.event.addDomListener(window, 'load', init_map);


$( document ).ready(function() {
	var url = window.location.href;
    var a = url.indexOf("address=") + 8;
    var b = url.indexOf("&city");
    var address = url.substring(a,b);
    address = address.split('+').join(' ');
    var c = url.indexOf("&zip");
    var city = url.substring(b+6,c);
    city = city.split('+').join(' ');
    var zip = url.substring(c+5,url.length);
    zip = zip.split('+').join(' ');
    console.log("address= " + address);
    console.log("city= " + city);
    console.log("zip= " + zip);
    var voterAddress = "You are registered to vote at:<br>" + address + "<br>" + city + ", IL " + zip;
    document.getElementById("voter-address").innerHTML = voterAddress;
    
});