//alert("hello");

require (["esri/Map", "esri/views/MapView", "esri/WebMap", "esri/widgets/BasemapToggle", "esri/widgets/BasemapGallery","esri/layers/GraphicsLayer", "esri/widgets/Sketch", "esri/layers/FeatureLayer"],
   function(Map, MapView, WebMap, BasemapToggle, BasemapGallery, GraphicsLayer,Sketch, FeatureLayer ){
    let map1 = new Map({basemap:"satellite"});
    let map2 = new Map({basemap:"topo"});
    let map3 = new Map({basemap:"osm"});
    var graphicsLayer = new GraphicsLayer();
    let map4 = new WebMap(
       { //słowo klucz new + nazwa modułu
      portalItem: {
       id: "4bab7d3d79fe4f6093a0ef75c986b4dc"
       
      },
      layers: [graphicsLayer]
   
   
   });
   let mapContainer = new MapView({
      container: "mapid",  // miejsce gdzie chcemy osadzić mapę (bierzemy klasę z pliku html //
      map: map4,  //czyli nasza zmienna z mapą bazową zdefiniowana wcześniej //
      zoom: 3 
      
    }); 
   


   //  var map = new Map({
   //    basemap: "topo-vector",
   //    layers: [graphicsLayer]
   //  });
   
   var basemapGallery = new BasemapGallery({
      view: mapContainer,
      source: {
        portal: {
          url: "https://www.arcgis.com",
          useVectorBasemaps: true  // Load vector tile basemaps
        }
      }
    });
   
   
    
    mapContainer.ui.add(basemapGallery, "top-right");

    var sketch = new Sketch({
      view: mapContainer,
      layer: graphicsLayer
    });

    mapContainer.ui.add(sketch, "top-right");

    var trailheadsLayer = new FeatureLayer({
      url: "https://services3.arcgis.com/GVgbJbqm8hXASVYi/ArcGIS/rest/services/USA%20States/FeatureServer/0"
    });

    map4.add(trailheadsLayer);
    
    

       

    

   let img = document.getElementsByTagName('img');
   
      document.getElementById("przycisk1").onclick = function(){
         console.log('klik')
         mapContainer.map = map1;
      }
      document.getElementById("przycisk2").onclick = function(){
         console.log('klik')
         mapContainer.map = map2;
      }
      document.getElementById("przycisk3").onclick = function(){
         console.log('klik')
         mapContainer.map = map3;
      }
      document.getElementById("przycisk4").onclick = function(){
         console.log('klik')
         mapContainer.map = map4;
      }
      for (let i = 0; i < img.length; i++){
         img[i].addEventListener('click', function(){
            mapContainer.zoom = 6;
            if(img[i].alt == "Verde"){mapContainer.center = [-47.9297200,-15.7797200];}
            else if(img[i].alt == "CBSE"){mapContainer.center = [-58.3772300,-34.6131500];}
            else if(img[i].alt == "Amanda"){mapContainer.center = [-58.3772300,-34.6131500];}
            else if(img[i].alt == "Parajito"){mapContainer.center = [-57.6359100,-25.3006600];}
            else if(img[i].alt == "Canarias"){mapContainer.center = [-56.1881600,-34.9032800];}

      })};
   


   }); 