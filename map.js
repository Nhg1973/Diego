const tilesProvider ='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
let myMap = L.map('myMap').setView([10, 10.45], 2);

// Agrega mapa base

var acuarela = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
	
	subdomains: 'abcd',
	minZoom: 2,
	maxZoom: 10,
	ext: 'jpg'
  
}).addTo(myMap)

//Agrega mapa alternativo

var fisico = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});

//Iconos


//Popup

function popup(feature,layer){
    layer.bindPopup(`<div class="card bg-primary" style="width: 12rem; --bs-bg-opacity: .1;">
    
    <div class="card-body">
        
        <h6 class="card-title text-center"><img src="${feature.properties.bandera}" class="card-img-top mx-auto w-25" alt="bandera">${feature.properties.shape}</h6>
        <a href="${feature.properties.category}" class="card-link">${feature.properties.name}</a>
        
    </div>
</div>` )
}


var destacados = L.geoJSON(myGeoJSON,{
    onEachFeature: popup,
    style: {
        radius: 10,
        fillColor: "#f3aa5d",
        color: "#000",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8},
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng);
    }
});




var condolenciasJS = L.geoJson(condolencias, {
    onEachFeature: popup,
    style: {
        radius: 10,
        fillColor: "#0606fc",
        color: "#2828b6",
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8},
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng);
    }
});

var geojsonMarkerOptions = {
    
};

var imagenes = L.geoJson(IMGGeoJSON,{
    onEachFeature: popup,
    style: {
        radius: 8,
        fillColor: "#2bc430",
        color: "#2828b6",
        weight: 1,
        opacity: 0.5,
        fillOpacity: 0.8},
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng);
    }
});


//Control de capas 

var baseMaps = {
    "Acuarela": acuarela,
    "Fisíco": fisico
};

var overlayMaps = {
   
    "Condolencias":destacados,
    "Notas destacadas":condolenciasJS,
    "Imagenes":imagenes
     
};

L.control.layers(baseMaps,overlayMaps).addTo(myMap);

//Agrupamiento

















