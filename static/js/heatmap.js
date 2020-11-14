var myMap = L.map("map", {
    center: [41.87, -87.62],
    zoom: 3
  });
  
  // L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  //   attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  //   tileSize: 512,
  //   maxZoom: 18,
  //   zoomOffset: -1,
  //   id: "mapbox/streets-v11",
  //   accessToken: API_KEY
  // }).addTo(myMap);

//  L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
//     maxZoom: 18,
//     id: "satellite-v9",
//     accessToken: API_KEY
//   }).addTo(myMap);

 L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "streets-v11", //"light-v10",
    accessToken: API_KEY
  }).addTo(myMap);
  
  
  // d3.csv("../Data/girls_in_power.csv").then(function(response) {
  let url= "/api";
  d3.json(url).then(function(response) {

  
    console.log(response);



    // Create a new marker cluster group
  var markers = L.markerClusterGroup();

  // Loop through data
  for (var i = 0; i < response.length; i++) {
    
    

    // Set the data location property to a variable
    var lat = response[i].latitude;
    var lng = response[i].longitude;
    var addr = response[i].country;
    var name= response[i].indicator_name;
    var year_2019= response[i].year_2019;
   

    // Check for location property
    
      // var locationString = "Latitude: " + lat + ", Longitude:" + lng;
      // var addressString = "Street Address: " + addr;
      // var spotString = "Graffiti Spot: " + spot;
      
  

      // Add a new marker to the cluster group and bind a pop-up
      markers.addLayer(L.marker([lat, lng])
        .bindPopup("<h5>" + "Country: " + "</h5>" + "<h4>" + addr + "</h4> <h5> Indicator name: </h5>" + "<h4>" + name + "</h4>" + "<h5> Parliament Seats (%): </h5>" + "<h4>" + year_2019 + "</h>4"));
        // .bindPopup(spotString));
      //console.log(response[i].location)
    }

  

  // Add our marker cluster layer to the map
  myMap.addLayer(markers);

});
  
//     var heatArray = [];
  
//     for (var i = 0; i < response.length; i++) {
//       var lat = response[i].latitude;
//       var lng = response[i].longitude;
  
      
//         heatArray.push([lat, lng]);
    
//     }
//     console.log(heatArray);
//     L.heatLayer(heatArray, {
//       radius: 20,
//       blur: 25,
//       gradient: {
//         0.5: 'blue', 
//         0.6: 'purple', 
//         0.2: 'green', 
//         0.9: 'yellow', 
//         1.0: 'red' }
  
//     }).addTo(myMap);
  
  
   
//   });