navigator.geolocation.getCurrentPosition(function(pos) {
  
  simply.scrollable(true);
  simply.vibe('short');
  simply.style("small");
  
  var coords = pos.coords;
  var geourl = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + coords.latitude + ',' + coords.longitude + '&key=AIzaSyCHGWWc6GUVwJ4v8DnZASeoWLW3fTm7GOE';
  ajax({ url: geourl, type: 'json' }, function(data) {
    simply.text({ title: "Your Current Location: " + data.results[0].address_components[3].long_name, subtitle: data.results[0].formatted_address}); 
  });
});

 