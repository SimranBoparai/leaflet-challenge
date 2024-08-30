try {
    // Fetch data from USGS API
    d3.json('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson').then(function(data) {
        // Initialize the map
        let myMap = L.map("map", {
            center: [37.09, -97.71],
            zoom: 5
        });

        // Add tile layers for street and topographic maps
        let streetMap = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(myMap);

        let topoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });

        // Create the earthquake layer
        let earthquakeLayer = createEarthquakeLayer(data);

        // Base maps and overlay layers
        let baseMaps = {
            "Street Map": streetMap,
            "Topographic": topoMap
        };

        let overlayMaps = {
            "Earthquakes": earthquakeLayer
        };

        // Add layer control to the map
        L.control.layers(baseMaps, overlayMaps, {
            collapsed: false
        }).addTo(myMap);

        // Function to create the earthquake layer
        function createEarthquakeLayer(data) {
            // Define the style of each marker based on magnitude and depth
            function style(feature) {
                return {
                    radius: getRadius(feature.properties.mag),
                    fillColor: getColor(feature.geometry.coordinates[2]),
                    color: "#000000",
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 1
                };
            }

            // Define marker size by magnitude
            function getRadius(magnitude) {
                return magnitude === 0 ? 1 : magnitude * 4;
            }

            // Define marker color by depth
            function getColor(depth) {
                return depth > 90 ? "#FF0000" :
                       depth > 70 ? "#FF4500" :
                       depth > 50 ? "#FF8C00" :
                       depth > 30 ? "#FFA500" :
                       depth > 10 ? "#FFD700" :
                                    "#ADFF2F";
            }

            // Create the earthquake layer with circle markers
            let earthquakes = L.geoJson(data, {
                pointToLayer: function(feature, latlng) {
                    return L.circleMarker(latlng);
                },
                style: style,
                onEachFeature: function(feature, layer) {
                    layer.bindPopup(
                        "Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place + "<br>Depth: " + feature.geometry.coordinates[2] + " km"
                    );
                }
            }).addTo(myMap);

            // Add a legend to the map
            let legend = L.control({ position: 'bottomright' });

            legend.onAdd = function() {
                let div = L.DomUtil.create('div', 'info legend'),
                    depths = [-10, 10, 30, 50, 70, 90];

                // Generate legend labels with colored squares
                for (let i = 0; i < depths.length; i++) {
                    div.innerHTML +=
                        '<i style="background:' + getColor(depths[i] + 1) + '"></i> ' +
                        depths[i] + (depths[i + 1] ? '&ndash;' + depths[i + 1] + '<br>' : '+');
                }

                return div;
            };

            legend.addTo(myMap);

            return earthquakes;
        }

    }).catch(function(error) {
        console.error("Error retrieving or processing the data: ", error);
    });
} catch (error) {
    console.error("Error initializing the map: ", error);
}