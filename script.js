require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",

    "esri/layers/FeatureLayer"

  ], function(esriConfig,Map, MapView, FeatureLayer) {

  esriConfig.apiKey = "AAPK242b0b70c52247b1a693f1e5cf4885c0VOLNYS8BqA2mE6WWw-9Ts4E8sFD6ZrdQEEy_pIBYouQKO6poJVlvg484pE1SbZz6";

  const map = new Map({
    basemap: "arcgis-topographic"
  });

  const view = new MapView({
    container: "viewDiv",
    map: map,
    center: [-149.900284,61.218056],
    zoom: 5
  });
