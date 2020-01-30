

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
var mapboxOutdoorsLayer = createMapboxStaticTileLayer('mapbox/outdoors-v11', tokens.MapboxAccessToken);
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
var mapboxOutdoorsRasterTileLayer = createMapboxRasterTileLayer('mapbox.outdoors', tokens.MapboxAccessToken);
var mapboxSatelliteStreetsRasterTileLayer = createMapboxRasterTileLayer('mapbox.streets-satellite', tokens.MapboxAccessToken);

// Google Layers
var googleRoadmap = L.gridLayer.googleMutant({
	type: 'roadmap'	// valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
});
var googleSatellite = L.gridLayer.googleMutant({
	type: 'satellite'	// valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
});
var googleTerrain = L.gridLayer.googleMutant({
	type: 'terrain'	// valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
});
var googleHybrid = L.gridLayer.googleMutant({
	type: 'hybrid'	// valid values are 'roadmap', 'satellite', 'terrain' and 'hybrid'
});


// return
var recommendedBaseMapLayer = mapboxStreetsRasterTileLayer;
var baseMapLayers = {
    "Mapbox(Raster Tile) Streets": mapboxStreetsRasterTileLayer,
    "Mapbox(Raster Tile) Satellite": mapboxSatelliteRasterTileLayer,
    "Mapbox(Raster Tile) Outdoors": mapboxOutdoorsRasterTileLayer,
    "Mapbox(Raster Tile) Satellite Streets": mapboxSatelliteStreetsRasterTileLayer,
    "Mapbox(Static Tile) Streets": mapboxStreetsLayer,
    "Mapbox(Static Tile) Outdoors": mapboxOutdoorsLayer, 
    "Mapbox(Static Tile) Satellite": mapboxSatelliteLayer,
    "Mapbox(Static Tile) Satellite Streets": mapboxSatelliteStreetsLayer,
    "Mapbox(Static Tile) Light": mapboxLightLayer,
    "Mapbox(Static Tile) Dark": mapboxDarkLayer,
    "Mapbox(Static Tile) Navigation Preview Day": mapboxNavigationPreviewDayLayer,
    "Mapbox(Static Tile) Navigation Preview Night": mapboxNavigationPreviewNightLayer,
    "Mapbox(Static Tile) Navigation Guidance Day": mapboxNavigationGuidanceDayLayer,
    "Mapbox(Static Tile) Navigation Guidance Night": mapboxNavigationGuidanceNightLayer,
    "Google Roadmap": googleRoadmap,
    "Google Satellite": googleSatellite,
    "Google Terrain": googleTerrain,
    "Google Hybrid": googleHybrid,
    "OpenStreetMap": osmLayer
};