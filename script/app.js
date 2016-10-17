/*
    main app methods
    
    2016-10-16 dphayes

*/



(function() {
//  'use strict';

  var xmlns = "http://www.w3.org/2000/svg";


  var app = {
    isLoading: true,
    visibleSets: [],
    visibleMarkers: {},
    svg: '',
    xOffset: 0, // origin offset from edge of map image
    yOffset: 0,
    xyScale: 1,  // scale factor for different image sizes
    markerColors: {'art':'green', 'start': 'blue','destination':'yellow'},
    mapImgWidth: 936
      
  };
   
  app.showLocation = function(strLocation) {
    var location = locations[strLocation];
    app.showMarker(location.x, location.y, "art", strLocation);
      
  };
   
   
  app.showMarker = function(x,y,type,id) {
    
    if (!app.visibleMarkers[id]) {
    
        var marker = document.createElementNS (xmlns, "circle");
        marker.style.fill = app.markerColors[type];
        marker.setAttribute("class","marker");
        marker.setAttribute("cx", parseInt(x * app.scaleFactor));
        marker.setAttribute("cy", parseInt(y * app.scaleFactor));
        marker.setAttribute("r", parseInt(20 * app.scaleFactor));
        marker.setAttribute("id", id); 
        
        app.visibleMarkers[id] = marker;
        document.getElementById("svgMap").appendChild(marker);
        document.getElementById(id).addEventListener("click",function() {
          $('#divDetail').slideToggle('slow');
      });
    }
  } 
  
  app.drawMapPath = function (locationStart, locationEnd) {

    var xStart = locations[locationStart].x;
    var yStart = locations[locationStart].y;
    var xEnd = locations[locationEnd].x;
    var yEnd = locations[locationEnd].y;    

    app.showMarker(xStart,yStart,'start', locationStart);
    app.showMarker(xEnd,yEnd,'destination',locationEnd);
      
    var arrayPathPoints = app.getPathPoints(locationStart,locationEnd);
    var strSVGPath = app.getSVGPathFromPoints(arrayPathPoints);
    var path = document.getElementById('pathMap');
    path.setAttribute('d',strSVGPath);
    
    // https://jakearchibald.com/2013/animated-line-drawing-svg/
    
    var length = path.getTotalLength();
    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition =
      'none';
    // Set up the starting positions
    path.style.strokeDasharray = length + ' ' + length;
    path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition = path.style.WebkitTransition =
      'stroke-dashoffset 10s ease-in-out';
    // Go!
    path.style.strokeDashoffset = '0';



  }
  
  
  app.getSVGPathFromPoints = function(arrayPathPoints) {
      console.log(arrayPathPoints);
      var strSVGPath = 'M ';
      if (arrayPathPoints.length > 1) {
          strSVGPath += (arrayPathPoints[0].x * app.scaleFactor ) + ' ' + (arrayPathPoints[0].y * app.scaleFactor) ;
          
          for (var i=1; i< arrayPathPoints.length; i++) {
               strSVGPath += ' L ' + (arrayPathPoints[i].x * app.scaleFactor ) + ' ' + (arrayPathPoints[i].y * app.scaleFactor) ;
          }
       }
      console.log(strSVGPath);
      return strSVGPath;
  }
  
  app.getPathPoints = function (locStart, locEnd) {
      var locationStart = locations[locStart];
      var locationEnd = locations[locEnd];
      var arrayPoints = [];
      var startingHall = locationStart.hall;
      var endingHall = locationEnd.hall;
      var pathPoint;

      var arrayPathPoints = paths[startingHall][endingHall].locations.split(",");

      
      arrayPoints.push({x:locationStart.x, y:locationStart.y});
      for (var i=0; i<arrayPathPoints.length; i++){
          pathPoint = locations[arrayPathPoints[i]];
          arrayPoints.push({x:pathPoint.x, y:pathPoint.y});
      }
      arrayPoints.push({x:locationEnd.x, y:locationEnd.y});
      
      return arrayPoints;
      
  }
  
  
  app.setScaleFactor = function () {
    var elem = document.getElementById("imgMap");
    var elemWidth = window.getComputedStyle(elem,null).getPropertyValue("width");
    app.scaleFactor = parseInt(elemWidth) / app.mapImgWidth;
      console.log(app.scaleFactor);
      
  }
  
  
  /*
    event listeners
  */
  window.addEventListener("load", function() {
      
      app.setScaleFactor();
        
      app.svg = document.getElementById("svgObj");    
          
      document.getElementById('imgMap').addEventListener("click",function() {
          console.log('click event');
          app.showLocation("Main Office")
          console.log("after show marker");
      });
      
      
      document.getElementById('search').addEventListener('change', function() {
          //console.log(document.getElementById('search').value);
          var location = locations[document.getElementById('search').value];
          app.showMarker(location.x, location.y, 'destination','destination');
      });
        
      app.drawMapPath("M","Cafeteria");
      app.showLocation("Main Office");
      
      var locationLinks = document.getElementsByClassName("locationLink");
      for (var i=0; i< locationLinks.length; i++) {
          locationLinks[i].addEventListener('click', function () {
            app.showLocation(this.innerText);      
              
          });
      }
  
  });
  
           // Listen for orientation changes
    window.addEventListener("orientationchange", function() {
        
        app.setScaleFactor();
    });
    
  console.log('app.js loaded');
})();



  