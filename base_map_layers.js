

// OpenStreetMap layer
var osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright/en">OpenStreetMap</a> contributors'
  });

// Mapbox static tile layers
// https://docs.mapbox.com/api/maps/#mapbox-styles
function createMapboxStaticTileLayer(style, token) {
    var mapboxAttribution = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
    return L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}@2x?access_token={accessToken}', {
        attribution: mapboxAttribution,
        maxZoom: 19,
        id: style,
        accessToken: token
    });
}
var mapboxStreetsLayer = createMapboxStaticTileLayer('mapbox/streets-v11', tokens.MapboxAccessToken);
var mapboxOutdoorLayer = createMapboxStaticTileLayer('mapbox/outdoors-v11', tokens.MapboxAccessToken);
var mapboxSatelliteLayer = createMapboxStaticTileLayer('mapbox/satellite-v9', tokens.MapboxAccessToken);
var mapboxSatelliteStreetsLayer = createMapboxStaticTileLayer('mapbox/satellite-streets-v11', tokens.MapboxAccessToken);
var mapboxLightLayer = createMapboxStaticTileLayer('mapbox/light-v10', tokens.MapboxAccessToken);
var mapboxDarkLayer = createMapboxStaticTileLayer('mapbox/dark-v10', tokens.MapboxAccessToken);
var mapboxNavigationPreviewDayLayer = createMapboxStaticTileLayer('mapbox/navigation-preview-day-v4', tokens.MapboxAccessToken);
var mapboxNavigationPreviewNightLayer = createMapboxStaticTileLayer('mapbox/navigation-preview-night-v4', tokens.MapboxAccessToken);
var mapboxNavigationGuidanceDayLayer = createMapboxStaticTileLayer('mapbox/navigation-guidance-day-v4', tokens.MapboxAccessToken);
var mapboxNavigationGuidanceNightLayer = createMapboxStaticTileLayer('mapbox/navigation-guidance-night-v4', tokens.MapboxAccessToken);

// Mapbox Raster Tile Layers
// https://docs.mapbox.com/api/maps/#raster-tiles
function createMapboxRasterTileLayer(tileset_id, token){
    return L.tileLayer('https://api.mapbox.com/v4/{tileset_id}/{z}/{x}/{y}@2x.png?access_token={accessToken}', {
        attribution: '<a href="https://www.mapbox.com/about/maps">© Mapbox</a> <a href="https://openstreetmap.org/copyright">© OpenStreetMap</a> | <a href="https://mapbox.com/map-feedback/">Improve this map</a>',
        tileset_id: tileset_id,
        accessToken: tokens.MapboxAccessToken
    });
}
var mapboxStreetsRasterTileLayer = createMapboxRasterTileLayer('mapbox.streets', tokens.MapboxAccessToken);
var mapboxSatelliteRasterTileLayer = createMapboxRasterTileLayer('mapbox.satellite', tokens.MapboxAccessToken);


// return
var recommendedBaseMapLayer = mapboxStreetsRasterTileLayer;
var baseMapLayers = {
    "Mapbox Streets": mapboxStreetsLayer,
    "Mapbox Outdoor": mapboxOutdoorLayer, 
    "Mapbox Satellite": mapboxSatelliteLayer,
    "Mapbox Satellite Streets": mapboxSatelliteStreetsLayer,
    "Mapbox Light": mapboxLightLayer,
    "Mapbox Dark": mapboxDarkLayer,
    "Mapbox Navigation Preview Day": mapboxNavigationPreviewDayLayer,
    "Mapbox Navigation Preview Night": mapboxNavigationPreviewNightLayer,
    "Mapbox Navigation Guidance Day": mapboxNavigationGuidanceDayLayer,
    "Mapbox Navigation Guidance Night": mapboxNavigationGuidanceNightLayer,
    "Mapbox Streets (Raster Tile)": mapboxStreetsRasterTileLayer,
    "Mapbox Satellite (Raster Tile)": mapboxSatelliteRasterTileLayer,
    "OpenStreetMap": osmLayer
};