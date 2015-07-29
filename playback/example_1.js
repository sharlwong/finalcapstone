$(function() {
    // Get start/end times
    var startTime = new Date(demoTracks[0].properties.time[0]);
    var endTime = new Date(demoTracks[0].properties.time[demoTracks[0].properties.time.length - 1]);

    // Create a DataSet with data
    var timelineData = new vis.DataSet([{ start: startTime, end: endTime, content: 'Relationship between entities' }]);

    // Set timeline options
    var timelineOptions = {
      "width":  "100%",
      "height": "120px",
      "style": "box",
      "axisOnTop": true,
      "showCustomTime":true
    };
    
    // Setup timeline
    var timeline = new vis.Timeline(document.getElementById('timeline'), timelineData, timelineOptions);
        
    // Set custom time marker (blue)
    timeline.setCustomTime(startTime);

    // Setup leaflet map
    var map = new L.Map('map');

    var basemapLayer = new L.TileLayer('http://{s}.tiles.mapbox.com/v3/github.map-xgq2svrz/{z}/{x}/{y}.png');

    // Center map and default zoom level
    map.setView([1.2683,103.7972], 10);

    // Adds the background layer to the map
    map.addLayer(basemapLayer);


    var pointA = new L.LatLng(1.14285, 103.72536);
    var pointB = new L.LatLng(1.14335, 103.72586);
    var pointList = [pointA, pointB];

    var firstpolyline = new L.polyline(pointList {
    color: 'red',
    weight: 1,
    opacity: 0.5
    smoothFactor: 1

    });




    // =====================================================
    // =============== Playback ============================
    // =====================================================
    
    // Playback options
    var playbackOptions = {

        playControl: true,
        dateControl: true,
        
        // layer and marker options
        layer : {
            pointToLayer : function(featureData, latlng) {
                var result = {};
                
                if (featureData && featureData.properties && featureData.properties.path_options) {
                    result = featureData.properties.path_options;
                }
                
                if (!result.radius){
                    result.radius = 5;
                }
                
                return new L.CircleMarker(latlng, result);
            }
        },
        
        marker: { 
            getPopup: function(featureData) {
                var result = '';
                
                if (featureData && featureData.properties && featureData.properties.title) {
                    result = featureData.properties.title;
                }
                
                return result;
            }
        }
        
    };
        
    // Initialize playback
    var playback = new L.Playback(map, null, onPlaybackTimeChange, playbackOptions);
    
    playback.setData(demoTracks);    
    // playback.addData(ship1);

    // Uncomment to test data reset;
    //playback.setData(blueMountain);    
    
    // Set timeline time change event, so cursor is set after moving custom time (blue)
    timeline.on('timechange', onCustomTimeChange);    

    // A callback so timeline is set after changing playback time
    function onPlaybackTimeChange (ms) {
        timeline.setCustomTime(new Date(ms));
    };
    
    // 
    function onCustomTimeChange(properties) {
        if (!playback.isPlaying()) {
            playback.setCursor(properties.time.getTime());
        }        
    }       
});