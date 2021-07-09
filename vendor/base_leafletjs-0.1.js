var mymap = L.map('mapid').setView([51.505, -0.09], 13);
var googleLayer = L.gridLayer.googleMutant({
  type: 'roadmap',
  styles: [
    {
      "featureType": "landscape.man_made",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "saturation": -15
        },
        {
          "lightness": -25
        },
        {
          "weight": 3
        }
      ]
    },
    {
      "featureType": "landscape.man_made",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "weight": 2
        }
      ]
    },
    {
      "featureType": "poi",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    }
  ]    
});
googleLayer.addTo(mymap);	