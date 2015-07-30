$(function() {
    // Get start/end times
    var startTime = new Date(shipCoords[0].properties.time[0]);
    var endTime = new Date(shipCoords[0].properties.time[shipCoords[0].properties.time.length - 1]);

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

    var mbAttr = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a>',
      mbUrl = 'https://{s}.tiles.mapbox.com/v3/{id}/{z}/{x}/{y}.png';

    // Different types of maps
    var grayscale   = L.tileLayer(mbUrl, {id: 'examples.map-20v6611k', attribution: mbAttr}),
        streets  = L.tileLayer(mbUrl, {id: 'examples.map-i875mjb7',   attribution: mbAttr});

    var baseLayers = {
      "Grayscale": grayscale,
      "Streets": streets
    };

    // =====================================================
    // =============== Snapshots ===========================
    // =====================================================


    // Layer: t1

    var t1 = new L.LayerGroup();

    L.circle([1.23604, 103.84730], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t1);

    L.circle([1.24834, 103.84900], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t1);

    L.circle([1.23314, 103.93720], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t1);

    L.circle([1.14285, 103.72536], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t1);

    L.circle([1.14335, 103.72586], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t1);

    L.circle([1.20685, 103.90236], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t1);

    L.circle([1.23234, 103.93750], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t1);

    L.circle([1.23364, 103.87470], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t1);

    L.circle([1.25886, 104.08207], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t1);

    L.circle([1.25866, 104.08257], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t1);

    L.polyline(
        [new L.LatLng(1.14285, 103.72536), new L.LatLng(1.14335, 103.72586)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t1);

    L.polyline(
        [new L.LatLng(1.23314, 103.93720), new L.LatLng(1.23234, 103.93750)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t1);

    L.polyline(
        [new L.LatLng(1.25886, 104.08207), new L.LatLng(1.25866, 104.08257)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t1);

    // Layer: t2

    var t2 = new L.LayerGroup();

    L.circle([1.23904, 103.85330], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t2);

    L.circle([1.24534, 103.85400], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t2);

    L.circle([1.23314, 103.93020], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t2);

    L.circle([1.14785, 103.72036], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t2);

    L.circle([1.14635, 103.73186], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t2);

    L.circle([1.20585, 103.89736], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t2);

    L.circle([1.23234, 103.93750], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t2);

    L.circle([1.23364, 103.87470], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t2);

    L.circle([1.25886, 104.08207], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t2);

    L.circle([1.25866, 104.08257], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t2);

    L.polyline(
        [new L.LatLng(1.14785, 103.72036), new L.LatLng(1.14635, 103.73186)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t2);

    L.polyline(
        [new L.LatLng(1.23314, 103.93020), new L.LatLng(1.23234, 103.93750)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t2);

    L.polyline(
        [new L.LatLng(1.25886, 104.08207), new L.LatLng(1.25866, 104.08257)], {
        color: 'red',
        weight: 1,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t2);

    // Layer: t3

    var t3 = new L.LayerGroup();

    L.circle([1.24204, 103.85930], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t3);

    L.circle([1.24234, 103.85900], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t3);

    L.circle([1.23314, 103.92320], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t3);

    L.circle([1.15285, 103.71536], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t3);

    L.circle([1.14935, 103.73786], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t3);

    L.circle([1.20485, 103.89236], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t3);

    L.circle([1.23234, 103.93750], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t3);

    L.circle([1.23364, 103.87470], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t3);

    L.circle([1.25886, 104.08207], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t3);

    L.circle([1.25866, 104.08257], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t3);

    L.polyline(
        [new L.LatLng(1.15285, 103.71536), new L.LatLng(1.14935, 103.73786)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t3);

    L.polyline(
        [new L.LatLng(1.23314, 103.92320), new L.LatLng(1.23234, 103.93750)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t3);

    L.polyline(
        [new L.LatLng(1.25886, 104.08207), new L.LatLng(1.25866, 104.08257)], {
        color: 'red',
        weight: 1.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t3);

    L.polyline(
        [new L.LatLng(1.24204, 103.85930), new L.LatLng(1.24234, 103.85900)], {
        color: 'red',
        weight: 1.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t3);

    // Layer: t4

    var t4 = new L.LayerGroup();

    L.circle([1.24204, 103.85930], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t4);

    L.circle([1.24234, 103.85900], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t4);

    L.circle([1.23314, 103.91620], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t4);

    L.circle([1.15785, 103.71036], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t4);

    L.circle([1.15235, 103.74386], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t4);

    L.circle([1.20385, 103.88736], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t4);

    L.circle([1.23234, 103.93750], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t4);

    L.circle([1.23364, 103.87470], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t4);

    L.circle([1.25886, 104.08207], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t4);

    L.circle([1.25866, 104.08257], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t4);

    L.polyline(
        [new L.LatLng(1.15785, 103.71036), new L.LatLng(1.15235, 103.74386)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t4);

    L.polyline(
        [new L.LatLng(1.23314, 103.91620), new L.LatLng(1.23234, 103.93750)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t4);

    L.polyline(
        [new L.LatLng(1.25886, 104.08207), new L.LatLng(1.25866, 104.08257)], {
        color: 'red',
        weight: 2,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t4);

    L.polyline(
        [new L.LatLng(1.24204, 103.85930), new L.LatLng(1.24234, 103.85900)], {
        color: 'red',
        weight: 1,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t4);

    // Layer: t5  
    
    var t5 = new L.LayerGroup();

    L.circle([1.24204, 103.85930], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t5);

    L.circle([1.24234, 103.85900], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t5);

    L.circle([1.23314, 103.90920], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t5);

    L.circle([1.16285, 103.70536], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t5);

    L.circle([1.15535, 103.74986], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t5);

    L.circle([1.20285, 103.88236], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t5);

    L.circle([1.23234, 103.93750], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t5);

    L.circle([1.23364, 103.87470], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t5);

    L.circle([1.25886, 104.08207], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t5);

    L.circle([1.25866, 104.08257], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t5);

    L.polyline(
        [new L.LatLng(1.16285, 103.70536), new L.LatLng(1.15535, 103.74986)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t5);

    L.polyline(
        [new L.LatLng(1.23314, 103.90920), new L.LatLng(1.23234, 103.93750)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t5);

    L.polyline(
        [new L.LatLng(1.25886, 104.08207), new L.LatLng(1.25866, 104.08257)], {
        color: 'red',
        weight: 2.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t5);

    L.polyline(
        [new L.LatLng(1.24204, 103.85930), new L.LatLng(1.24234, 103.85900)], {
        color: 'red',
        weight: 1.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t5);

    // Layer: t6  
    
    var t6 = new L.LayerGroup();

    L.circle([1.24204, 103.85930], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t6);

    L.circle([1.24234, 103.85900], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t6);

    L.circle([1.23314, 103.90220], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t6);

    L.circle([1.16785, 103.70036], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t6);

    L.circle([1.15835, 103.75586], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t6);

    L.circle([1.20185, 103.87736], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t6);

    L.circle([1.23234, 103.93750], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t6);

    L.circle([1.23364, 103.87470], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t6);

    L.circle([1.25886, 104.08207], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t6);

    L.circle([1.25866, 104.08257], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t6);

    L.polyline(
        [new L.LatLng(1.16785, 103.70036), new L.LatLng(1.15835, 103.75586)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t6);

    L.polyline(
        [new L.LatLng(1.23314, 103.90220), new L.LatLng(1.23234, 103.93750)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t6);

    L.polyline(
        [new L.LatLng(1.25886, 104.08207), new L.LatLng(1.25866, 104.08257)], {
        color: 'red',
        weight: 3,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t6);

    L.polyline(
        [new L.LatLng(1.24204, 103.85930), new L.LatLng(1.24234, 103.85900)], {
        color: 'red',
        weight: 2,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t6);

    // Layer: t7  
    
    var t7 = new L.LayerGroup();

    L.circle([1.24204, 103.85930], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t7);

    L.circle([1.24234, 103.85900], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t7);

    L.circle([1.23314, 103.89520], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t7);

    L.circle([1.17285, 103.69536], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t7);

    L.circle([1.16135, 103.76186], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t7);

    L.circle([1.20085, 103.87236], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t7);

    L.circle([1.23234, 103.93750], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t7);

    L.circle([1.23364, 103.87470], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t7);

    L.circle([1.25886, 104.08207], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t7);

    L.circle([1.25866, 104.08257], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t7);

    L.polyline(
        [new L.LatLng(1.17285, 103.69536), new L.LatLng(1.16135, 103.76186)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t7);

    L.polyline(
        [new L.LatLng(1.23314, 103.89520), new L.LatLng(1.23234, 103.93750)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t7);

    L.polyline(
        [new L.LatLng(1.25886, 104.08207), new L.LatLng(1.25866, 104.08257)], {
        color: 'red',
        weight: 3.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t7);

    L.polyline(
        [new L.LatLng(1.24204, 103.85930), new L.LatLng(1.24234, 103.85900)], {
        color: 'red',
        weight: 2.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t7);

    // Layer: t8  
    
    var t8 = new L.LayerGroup();

    L.circle([1.24504, 103.86530], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t8);

    L.circle([1.23934, 103.86400], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t8);

    L.circle([1.23314, 103.88820], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t8);

    L.circle([1.17785, 103.69036], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t8);

    L.circle([1.16435, 103.76786], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t8);

    L.circle([1.19985, 103.86736], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t8);

    L.circle([1.23234, 103.93750], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t8);

    L.circle([1.23364, 103.87470], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t8);

    L.circle([1.25886, 104.08207], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t8);

    L.circle([1.25866, 104.08257], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t8);

    L.polyline(
        [new L.LatLng(1.17785, 103.69036), new L.LatLng(1.16435, 103.76786)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t8);

    L.polyline(
        [new L.LatLng(1.23314, 103.88820), new L.LatLng(1.23234, 103.93750)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t8);

    L.polyline(
        [new L.LatLng(1.25886, 104.08207), new L.LatLng(1.25866, 104.08257)], {
        color: 'red',
        weight: 4,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t8);

    L.polyline(
        [new L.LatLng(1.24504, 103.86530), new L.LatLng(1.23934, 103.86400)], {
        color: 'red',
        weight: 2.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t8);

    // Layer: t9  
    
    var t9 = new L.LayerGroup();

    L.circle([1.24804, 103.87130], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t9);

    L.circle([1.23634, 103.86900], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t9);

    L.circle([1.23314, 103.88120], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t9);

    L.circle([1.18285, 103.68536], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t9);

    L.circle([1.16735, 103.77386], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t9);

    L.circle([1.19885, 103.86236], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t9);

    L.circle([1.23234, 103.93750], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t9);

    L.circle([1.23364, 103.87470], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t9);

    L.circle([1.25886, 104.08207], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t9);

    L.circle([1.25866, 104.08257], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t9);

    L.polyline(
        [new L.LatLng(1.18285, 103.68536), new L.LatLng(1.16735, 103.77386)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t9);

    L.polyline(
        [new L.LatLng(1.23314, 103.88120), new L.LatLng(1.23234, 103.93750)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t9);

    L.polyline(
        [new L.LatLng(1.25886, 104.08207), new L.LatLng(1.25866, 104.08257)], {
        color: 'red',
        weight: 4.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t9);

    L.polyline(
        [new L.LatLng(1.24804, 103.87130), new L.LatLng(1.23634, 103.86900)], {
        color: 'red',
        weight: 2.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t9);

    // Layer: t10  
    
    var t10 = new L.LayerGroup();


    L.circle([1.25104, 103.87730], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t10);

    L.circle([1.23334, 103.87400], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t10);

    L.circle([1.23314, 103.87420], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t10);

    L.circle([1.18785, 103.68036], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t10);

    L.circle([1.17035, 103.77986], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t10);

    L.circle([1.19785, 103.85736], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t10);

    L.circle([1.23234, 103.93750], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t10);

    L.circle([1.23364, 103.87470], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t10);

    L.circle([1.25886, 104.08207], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t10);

    L.circle([1.25866, 104.08257], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t10);

    L.polyline(
        [new L.LatLng(1.18785, 103.68036), new L.LatLng(1.17035, 103.77986)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t10);

    L.polyline(
        [new L.LatLng(1.23314, 103.87420), new L.LatLng(1.23234, 103.93750)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t10);

    L.polyline(
        [new L.LatLng(1.25886, 104.08207), new L.LatLng(1.25866, 104.08257)], {
        color: 'red',
        weight: 5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t10);

    L.polyline(
        [new L.LatLng(1.25104, 103.87730), new L.LatLng(1.23334, 103.87400)], {
        color: 'red',
        weight: 2.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t10);

    L.polyline(
        [new L.LatLng(1.23334, 103.87400), new L.LatLng(1.23314, 103.87420)], {
        color: 'red',
        weight: 2.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t10);

    L.polyline(
        [new L.LatLng(1.23334, 103.87400), new L.LatLng(1.23364, 103.87470)], {
        color: 'red',
        weight: 2.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t10);

    L.polyline(
        [new L.LatLng(1.23314, 103.87420), new L.LatLng(1.23364, 103.87470)], {
        color: 'red',
        weight: 2.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t10);

    // Layer: t11  
    
    var t11 = new L.LayerGroup();


    L.circle([1.25404, 103.88330], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t11);

    L.circle([1.23334, 103.87400], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t11);

    L.circle([1.23314, 103.87420], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t11);

    L.circle([1.19285, 103.67536], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t11);

    L.circle([1.17335, 103.78586], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t11);

    L.circle([1.19685, 103.85236], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t11);

    L.circle([1.23234, 103.93750], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t11);

    L.circle([1.23364, 103.87470], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t11);

    L.circle([1.25886, 104.07607], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t11);

    L.circle([1.25866, 104.08857], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t11);

    L.polyline(
        [new L.LatLng(1.19285, 103.67536), new L.LatLng(1.17335, 103.78586)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t11);

    L.polyline(
        [new L.LatLng(1.23314, 103.87420), new L.LatLng(1.23234, 103.93750)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t11);

    L.polyline(
        [new L.LatLng(1.25886, 104.07607), new L.LatLng(1.25866, 104.08857)], {
        color: 'red',
        weight: 5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t11);

    L.polyline(
        [new L.LatLng(1.25404, 103.88330), new L.LatLng(1.23334, 103.87400)], {
        color: 'red',
        weight: 2.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t11);

    L.polyline(
        [new L.LatLng(1.23334, 103.87400), new L.LatLng(1.23314, 103.87420)], {
        color: 'red',
        weight: 1,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t11);

    L.polyline(
        [new L.LatLng(1.23334, 103.87400), new L.LatLng(1.23364, 103.87470)], {
        color: 'red',
        weight: 1,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t11);

    L.polyline(
        [new L.LatLng(1.23314, 103.87420), new L.LatLng(1.23364, 103.87470)], {
        color: 'red',
        weight: 1,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t11);

    // Layer: t12  
    
    var t12 = new L.LayerGroup();


    L.circle([1.25704, 103.88930], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t12);

    L.circle([1.23334, 103.87400], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t12);

    L.circle([1.23314, 103.87420], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t12);

    L.circle([1.19785, 103.67036], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t12);

    L.circle([1.17635, 103.79186], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t12);

    L.circle([1.19585, 103.84736], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t12);

    L.circle([1.23234, 103.93750], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t12);

    L.circle([1.23364, 103.87470], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t12);

    L.circle([1.25886, 104.07007], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t12);

    L.circle([1.25866, 104.09457], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t12);

    L.polyline(
        [new L.LatLng(1.19785, 103.67036), new L.LatLng(1.17635, 103.79186)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t12);

    L.polyline(
        [new L.LatLng(1.23314, 103.87420), new L.LatLng(1.23234, 103.93750)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t12);

    L.polyline(
        [new L.LatLng(1.25886, 104.07007), new L.LatLng(1.25866, 104.09457)], {
        color: 'red',
        weight: 5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t12);

    L.polyline(
        [new L.LatLng(1.25704, 103.88930), new L.LatLng(1.23334, 103.87400)], {
        color: 'red',
        weight: 2.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t12);

    L.polyline(
        [new L.LatLng(1.23334, 103.87400), new L.LatLng(1.23314, 103.87420)], {
        color: 'red',
        weight: 1.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t12);

    L.polyline(
        [new L.LatLng(1.23334, 103.87400), new L.LatLng(1.23364, 103.87470)], {
        color: 'red',
        weight: 1.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t12);

    L.polyline(
        [new L.LatLng(1.23314, 103.87420), new L.LatLng(1.23364, 103.87470)], {
        color: 'red',
        weight: 1.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t12);

    // Layer: t13  
    
    var t13 = new L.LayerGroup();


    L.circle([1.26004, 103.89530], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t13);

    L.circle([1.23334, 103.87400], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t13);

    L.circle([1.23314, 103.87420], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t13);

    L.circle([1.20285, 103.66536], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t13);

    L.circle([1.17935, 103.79786], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t13);

    L.circle([1.19485, 103.84236], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t13);

    L.circle([1.23234, 103.93750], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t13);

    L.circle([1.23364, 103.87470], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t13);

    L.circle([1.25886, 104.06407], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t13);

    L.circle([1.25866, 104.10057], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t13);

    L.polyline(
        [new L.LatLng(1.20285, 103.66536), new L.LatLng(1.17935, 103.79786)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t13);

    L.polyline(
        [new L.LatLng(1.23314, 103.87420), new L.LatLng(1.23234, 103.93750)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t13);

    L.polyline(
        [new L.LatLng(1.25886, 104.06407), new L.LatLng(1.25866, 104.10057)], {
        color: 'red',
        weight: 5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t13);

    L.polyline(
        [new L.LatLng(1.26004, 103.89530), new L.LatLng(1.23334, 103.87400)], {
        color: 'red',
        weight: 2.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t13);

    L.polyline(
        [new L.LatLng(1.23334, 103.87400), new L.LatLng(1.23314, 103.87420)], {
        color: 'red',
        weight: 2,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t13);

    L.polyline(
        [new L.LatLng(1.23334, 103.87400), new L.LatLng(1.23364, 103.87470)], {
        color: 'red',
        weight: 2,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t13);

    L.polyline(
        [new L.LatLng(1.23314, 103.87420), new L.LatLng(1.23364, 103.87470)], {
        color: 'red',
        weight: 2,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t13);

    // Layer: t14  
    
    var t14 = new L.LayerGroup();


    L.circle([1.26304, 103.90130], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t14);

    L.circle([1.23334, 103.87400], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t14);

    L.circle([1.23314, 103.87420], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t14);

    L.circle([1.20785, 103.66036], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t14);

    L.circle([1.18235, 103.80386], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t14);

    L.circle([1.19385, 103.83736], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t14);

    L.circle([1.23234, 103.93750], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t14);

    L.circle([1.23364, 103.87470], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t14);

    L.circle([1.25886, 104.05807], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t14);

    L.circle([1.25866, 104.10657], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t14);

    L.polyline(
        [new L.LatLng(1.20785, 103.66036), new L.LatLng(1.18235, 103.80386)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t14);

    L.polyline(
        [new L.LatLng(1.23314, 103.87420), new L.LatLng(1.23234, 103.93750)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t14);

    L.polyline(
        [new L.LatLng(1.25886, 104.05807), new L.LatLng(1.25866, 104.10657)], {
        color: 'red',
        weight: 5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t14);

    L.polyline(
        [new L.LatLng(1.26304, 103.90130), new L.LatLng(1.23334, 103.87400)], {
        color: 'red',
        weight: 2.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t14);

    L.polyline(
        [new L.LatLng(1.23334, 103.87400), new L.LatLng(1.23314, 103.87420)], {
        color: 'red',
        weight: 2.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t14);

    L.polyline(
        [new L.LatLng(1.23334, 103.87400), new L.LatLng(1.23364, 103.87470)], {
        color: 'red',
        weight: 2.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t14);

    L.polyline(
        [new L.LatLng(1.23314, 103.87420), new L.LatLng(1.23364, 103.87470)], {
        color: 'red',
        weight: 2.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t14);

    // Layer: t15  
    
    var t15 = new L.LayerGroup();


    L.circle([1.26604, 103.90730], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t15);

    L.circle([1.23334, 103.87400], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t15);

    L.circle([1.23314, 103.87420], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t15);

    L.circle([1.21285, 103.65536], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t15);

    L.circle([1.18535, 103.80986], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t15);

    L.circle([1.19285, 103.83236], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t15);

    L.circle([1.23234, 103.93750], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t15);

    L.circle([1.23364, 103.87470], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t15);

    L.circle([1.25886, 104.05207], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t15);

    L.circle([1.25866, 104.11257], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t15);

    L.polyline(
        [new L.LatLng(1.21285, 103.65536), new L.LatLng(1.18535, 103.80986)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t15);

    L.polyline(
        [new L.LatLng(1.23314, 103.87420), new L.LatLng(1.23234, 103.93750)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t15);

    L.polyline(
        [new L.LatLng(1.25886, 104.05207), new L.LatLng(1.25866, 104.11257)], {
        color: 'red',
        weight: 5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t15);

    L.polyline(
        [new L.LatLng(1.26604, 103.90730), new L.LatLng(1.23334, 103.87400)], {
        color: 'red',
        weight: 2.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t15);

    L.polyline(
        [new L.LatLng(1.23334, 103.87400), new L.LatLng(1.23314, 103.87420)], {
        color: 'red',
        weight: 3,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t15);

    L.polyline(
        [new L.LatLng(1.23334, 103.87400), new L.LatLng(1.23364, 103.87470)], {
        color: 'red',
        weight: 3,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t15);

    L.polyline(
        [new L.LatLng(1.23314, 103.87420), new L.LatLng(1.23364, 103.87470)], {
        color: 'red',
        weight: 3,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t15);

    // Layer: t16  
    
    var t16 = new L.LayerGroup();


    L.circle([1.26904, 103.91330], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t16);

    L.circle([1.23334, 103.87400], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t16);

    L.circle([1.23314, 103.87420], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t16);

    L.circle([1.21785, 103.65036], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t16);

    L.circle([1.18835, 103.81586], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t16);

    L.circle([1.19185, 103.82736], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t16);

    L.circle([1.23234, 103.93750], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t16);

    L.circle([1.23364, 103.87470], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t16);

    L.circle([1.25886, 104.04607], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t16);

    L.circle([1.25866, 104.11857], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t16);

    L.polyline(
        [new L.LatLng(1.21785, 103.65036), new L.LatLng(1.18835, 103.81586)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t16);

    L.polyline(
        [new L.LatLng(1.23314, 103.87420), new L.LatLng(1.23234, 103.93750)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t16);

    L.polyline(
        [new L.LatLng(1.25886, 104.04607), new L.LatLng(1.25866, 104.11857)], {
        color: 'red',
        weight: 5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t16);

    L.polyline(
        [new L.LatLng(1.26904, 103.91330), new L.LatLng(1.23334, 103.87400)], {
        color: 'red',
        weight: 2.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t16);

    L.polyline(
        [new L.LatLng(1.23334, 103.87400), new L.LatLng(1.23314, 103.87420)], {
        color: 'red',
        weight: 3.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t16);

    L.polyline(
        [new L.LatLng(1.23334, 103.87400), new L.LatLng(1.23364, 103.87470)], {
        color: 'red',
        weight: 3.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t16);

    L.polyline(
        [new L.LatLng(1.23314, 103.87420), new L.LatLng(1.23364, 103.87470)], {
        color: 'red',
        weight: 3.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t16);

    // Layer: t17  
    
    var t17 = new L.LayerGroup();


    L.circle([1.27204, 103.91930], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t17);

    L.circle([1.23334, 103.87400], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t17);

    L.circle([1.23314, 103.87420], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t17);

    L.circle([1.22285, 103.64536], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t17);

    L.circle([1.19135, 103.82186], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t17);

    L.circle([1.19085, 103.82236], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t17);

    L.circle([1.23234, 103.93750], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t17);

    L.circle([1.23364, 103.87470], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t17);

    L.circle([1.25886, 104.04007], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t17);

    L.circle([1.25866, 104.12457], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t17);

    L.polyline(
        [new L.LatLng(1.22285, 103.64536), new L.LatLng(1.19135, 103.82186)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t17);

    L.polyline(
        [new L.LatLng(1.23314, 103.87420), new L.LatLng(1.23234, 103.93750)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t17);

    L.polyline(
        [new L.LatLng(1.25886, 104.04007), new L.LatLng(1.25866, 104.12457)], {
        color: 'red',
        weight: 5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t17);

    L.polyline(
        [new L.LatLng(1.27204, 103.91930), new L.LatLng(1.23334, 103.87400)], {
        color: 'red',
        weight: 2.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t17);

    L.polyline(
        [new L.LatLng(1.23334, 103.87400), new L.LatLng(1.23314, 103.87420)], {
        color: 'red',
        weight: 4,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t17);

    L.polyline(
        [new L.LatLng(1.23334, 103.87400), new L.LatLng(1.23364, 103.87470)], {
        color: 'red',
        weight: 4,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t17);

    L.polyline(
        [new L.LatLng(1.23314, 103.87420), new L.LatLng(1.23364, 103.87470)], {
        color: 'red',
        weight: 4,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t17);

    L.polyline(
        [new L.LatLng(1.19135, 103.82186), new L.LatLng(1.19085, 103.82236)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t17);

    // Layer: t18  
    
    var t18 = new L.LayerGroup();


    L.circle([1.27504, 103.92530], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t18);

    L.circle([1.23334, 103.87400], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t18);

    L.circle([1.23314, 103.87420], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t18);

    L.circle([1.22785, 103.64036], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t18);

    L.circle([1.19135, 103.82186], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t18);

    L.circle([1.19085, 103.82236], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t18);

    L.circle([1.23234, 103.93750], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t18);

    L.circle([1.23364, 103.87470], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t18);

    L.circle([1.25886, 104.03407], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t18);

    L.circle([1.25866, 104.13057], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t18);

    L.polyline(
        [new L.LatLng(1.22785, 103.64036), new L.LatLng(1.19135, 103.82186)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t18);

    L.polyline(
        [new L.LatLng(1.23314, 103.87420), new L.LatLng(1.23234, 103.93750)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t18);

    L.polyline(
        [new L.LatLng(1.25886, 104.03407), new L.LatLng(1.25866, 104.13057)], {
        color: 'red',
        weight: 5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t18);

    L.polyline(
        [new L.LatLng(1.27504, 103.92530), new L.LatLng(1.23334, 103.87400)], {
        color: 'red',
        weight: 2.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t18);

    L.polyline(
        [new L.LatLng(1.23334, 103.87400), new L.LatLng(1.23314, 103.87420)], {
        color: 'red',
        weight: 4.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t18);

    L.polyline(
        [new L.LatLng(1.23334, 103.87400), new L.LatLng(1.23364, 103.87470)], {
        color: 'red',
        weight: 4.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t18);

    L.polyline(
        [new L.LatLng(1.23314, 103.87420), new L.LatLng(1.23364, 103.87470)], {
        color: 'red',
        weight: 4.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t18);

    L.polyline(
        [new L.LatLng(1.19135, 103.82186), new L.LatLng(1.19085, 103.82236)], {
        color: 'red',
        weight: 1,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t18);

    // Layer: t19  
    
    var t19 = new L.LayerGroup();


    L.circle([1.27804, 103.93130], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t19);

    L.circle([1.23034, 103.87900], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t19);

    L.circle([1.23314, 103.87120], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t19);

    L.circle([1.23285, 103.63536], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t19);

    L.circle([1.19135, 103.82186], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t19);

    L.circle([1.19085, 103.82236], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t19);

    L.circle([1.23234, 103.93750], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t19);

    L.circle([1.23364, 103.87470], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t19);

    L.circle([1.25886, 104.02807], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t19);

    L.circle([1.25866, 104.13657], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t19);

    L.polyline(
        [new L.LatLng(1.23285, 103.63536), new L.LatLng(1.19135, 103.82186)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t19);

    L.polyline(
        [new L.LatLng(1.23314, 103.87120), new L.LatLng(1.23234, 103.93750)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t19);

    L.polyline(
        [new L.LatLng(1.25886, 104.02807), new L.LatLng(1.25866, 104.13657)], {
        color: 'red',
        weight: 5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t19);

    L.polyline(
        [new L.LatLng(1.27804, 103.93130), new L.LatLng(1.23034, 103.87900)], {
        color: 'red',
        weight: 2.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t19);

    L.polyline(
        [new L.LatLng(1.23034, 103.87900), new L.LatLng(1.23314, 103.87120)], {
        color: 'red',
        weight: 4.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t19);

    L.polyline(
        [new L.LatLng(1.23034, 103.87900), new L.LatLng(1.23364, 103.87470)], {
        color: 'red',
        weight: 4.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t19);

    L.polyline(
        [new L.LatLng(1.23314, 103.87120), new L.LatLng(1.23364, 103.87470)], {
        color: 'red',
        weight: 4.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t19);

    L.polyline(
        [new L.LatLng(1.19135, 103.82186), new L.LatLng(1.19085, 103.82236)], {
        color: 'red',
        weight: 1.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t19);

    // Layer: t20  
    
    var t20 = new L.LayerGroup();


    L.circle([1.28104, 103.93730], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t20);

    L.circle([1.22734, 103.88400], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t20);

    L.circle([1.23314, 103.86820], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t20);

    L.circle([1.23785, 103.63036], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t20);

    L.circle([1.19135, 103.82186], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t20);

    L.circle([1.19085, 103.82236], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t20);

    L.circle([1.23234, 103.93750], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t20);

    L.circle([1.23364, 103.87470], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t20);

    L.circle([1.25886, 104.02207], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t20);

    L.circle([1.25866, 104.14257], 200, {
      color: 'blue',
      fillColor: '#21409A',
      fillOpacity: 0.7
    }).addTo(t20);

    L.polyline(
        [new L.LatLng(1.23785,  103.63036), new L.LatLng(1.19135, 103.82186)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t20);

    L.polyline(
        [new L.LatLng(1.23314, 103.86820), new L.LatLng(1.23234, 103.93750)], {
        color: 'red',
        weight: 0.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t20);

    L.polyline(
        [new L.LatLng(1.25886, 104.02207), new L.LatLng(1.25866, 104.14257)], {
        color: 'red',
        weight: 5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t20);

    L.polyline(
        [new L.LatLng(1.28104, 103.93730), new L.LatLng(1.22734, 103.88400)], {
        color: 'red',
        weight: 2.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t20);

    L.polyline(
        [new L.LatLng(1.22734, 103.88400), new L.LatLng(1.23314, 103.86820)], {
        color: 'red',
        weight: 4.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t20);

    L.polyline(
        [new L.LatLng(1.22734, 103.88400), new L.LatLng(1.23364, 103.87470)], {
        color: 'red',
        weight: 4.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t20);

    L.polyline(
        [new L.LatLng(1.23314, 103.86820), new L.LatLng(1.23364, 103.87470)], {
        color: 'red',
        weight: 4.5,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t20);

    L.polyline(
        [new L.LatLng(1.19135, 103.82186), new L.LatLng(1.19085, 103.82236)], {
        color: 'red',
        weight: 2,
        opacity: 0.7,
        smoothFactor: 1
    }).addTo(t20);


    // List of layers in the control panel

    var timeshots = {
    "Timeshot 1": t1,
    "Timeshot 2": t2,
    "Timeshot 3": t3,
    "Timeshot 4": t4,
    "Timeshot 5": t5,
    "Timeshot 6": t6,
    "Timeshot 7": t7,
    "Timeshot 8": t8,
    "Timeshot 9": t9,
    "Timeshot 10": t10,
    "Timeshot 11": t11,
    "Timeshot 12": t12,
    "Timeshot 13": t13,
    "Timeshot 14": t14,
    "Timeshot 15": t15,
    "Timeshot 16": t16,
    "Timeshot 17": t17,
    "Timeshot 18": t18,
    "Timeshot 19": t19,
    "Timeshot 20": t20 // Add more snapshots here
    };

    L.control.layers(baseLayers, timeshots, {
        collapsed : false
    }).addTo(map);


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
    
    playback.setData(shipCoords);
    

    // Uncomment to test data reset;
    //playback.setData(blueMountain);    
    
    // Set timeline time change event, so cursor is set after moving custom time (green)
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

    $("#clearBtn").click(function(){
       playback.clearData();
    }); 

});
