        var map = mymap;
        var highlightLayer;
        function highlightFeature(e) {
            highlightLayer = e.target;

            if (e.target.feature.geometry.type === 'LineString') {
              highlightLayer.setStyle({
                color: '#aa00ff',
              });
            } else {
              highlightLayer.setStyle({
                fillColor: '#aa00ff',
                fillOpacity: 1
              });
            }
        }
        /*
        var map = L.map('map', {
            zoomControl:true, maxZoom:16, minZoom:10
        })
        */
        var hash = new L.Hash(map);
        map.attributionControl.setPrefix('<a href="https://github.com/tomchadwin/qgis2web" target="_blank">qgis2web</a> &middot; <a href="https://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> &middot; <a href="https://qgis.org">QGIS</a>');
        var autolinker = new Autolinker({truncate: {length: 30, location: 'smart'}});
        L.control.locate({locateOptions: {maxZoom: 19}}).addTo(map);
        var measureControl = new L.Control.Measure({
            position: 'topleft',
            primaryLengthUnit: 'meters',
            secondaryLengthUnit: 'kilometers',
            primaryAreaUnit: 'sqmeters',
            secondaryAreaUnit: 'hectares'
        });
        measureControl.addTo(map);
        document.getElementsByClassName('leaflet-control-measure-toggle')[0]
        .innerHTML = '';
        document.getElementsByClassName('leaflet-control-measure-toggle')[0]
        .className += ' fas fa-ruler';
        var bounds_group = new L.featureGroup([]);

        //---
        var layer_area_b_milano_1 = new L.featureGroup();
        
        
        function setBounds() {
            if (bounds_group.getLayers().length) {
                map.fitBounds(bounds_group.getBounds());
            }
        }
        map.createPane('pane_DarkMatterretina_0');
        map.getPane('pane_DarkMatterretina_0').style.zIndex = 400;
        var layer_DarkMatterretina_0 = L.tileLayer('http://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}@2x.png', {
            pane: 'pane_DarkMatterretina_0',
            opacity: 1.0,
            attribution: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
            minZoom: 10,
            maxZoom: 16,
            minNativeZoom: 0,
            maxNativeZoom: 20
        });
        layer_DarkMatterretina_0;
        map.addLayer(layer_DarkMatterretina_0);
        function pop_area_b_milano_1(feature, layer) {
            layer.on({
                mouseout: function(e) {
                    for (i in e.target._eventParents) {
                        e.target._eventParents[i].resetStyle(e.target);
                    }
                },
                mouseover: highlightFeature,
            });
            var popupContent = '<table>\
                    <tr>\
                        <th scope="row">id</th>\
                        <td>' + (feature.properties['id'] !== null ? autolinker.link(feature.properties['id'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">tipo</th>\
                        <td>' + (feature.properties['tipo'] !== null ? autolinker.link(feature.properties['tipo'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <th scope="row">nome</th>\
                        <td>' + (feature.properties['nome'] !== null ? autolinker.link(feature.properties['nome'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['gruppo_id'] !== null ? autolinker.link(feature.properties['gruppo_id'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['ordinanza'] !== null ? autolinker.link(feature.properties['ordinanza'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['deroghe'] !== null ? autolinker.link(feature.properties['deroghe'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['val_inizio'] !== null ? autolinker.link(feature.properties['val_inizio'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['val_fine'] !== null ? autolinker.link(feature.properties['val_fine'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['delibera'] !== null ? autolinker.link(feature.properties['delibera'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['tratto'] !== null ? autolinker.link(feature.properties['tratto'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['note'] !== null ? autolinker.link(feature.properties['note'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['cartello'] !== null ? autolinker.link(feature.properties['cartello'].toLocaleString()) : '') + '</td>\
                    </tr>\
                    <tr>\
                        <td colspan="2">' + (feature.properties['dissuasori'] !== null ? autolinker.link(feature.properties['dissuasori'].toLocaleString()) : '') + '</td>\
                    </tr>\
                </table>';
            layer.bindPopup(popupContent, {maxHeight: 400});
        }

        function style_area_b_milano_1_0() {
            return {
                pane: 'pane_area_b_milano_1',
                opacity: 1,
                color: 'rgba(0,0,255,1.0)',
                dashArray: '',
                lineCap: 'butt',
                lineJoin: 'miter',
                weight: 4.0, 
                fillOpacity: 0,
                interactive: true,
            }
        }
        map.createPane('pane_area_b_milano_1');
        map.getPane('pane_area_b_milano_1').style.zIndex = 401;
        map.getPane('pane_area_b_milano_1').style['mix-blend-mode'] = 'normal';

        /**/
        //https://gis.stackexchange.com/questions/68489/loading-external-geojson-file-into-leaflet-map
        //https://leafletjs.com/examples/geojson/
        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://www.cityplanner.biz/webmaps/json_area_b_milano_1/');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.responseType = 'json';
        xhr.onload = function() {
            var geoJson = L.geoJson(xhr.response, {
                attribution: '',
                interactive: true,
                dataVar: 'json_area_b_milano_1',
                layerName: 'layer_area_b_milano_1',
                pane: 'pane_area_b_milano_1',
                onEachFeature: pop_area_b_milano_1,
                style: style_area_b_milano_1_0,
            });
            bounds_group.addLayer(geoJson);
            layer_area_b_milano_1.addLayer(geoJson);
            map.addLayer(layer_area_b_milano_1);
        };
        xhr.send();

        

        /*
        var layer_area_b_milano_1 = new L.geoJson(json_area_b_milano_1, {
            attribution: '',
            interactive: true,
            dataVar: 'json_area_b_milano_1',
            layerName: 'layer_area_b_milano_1',
            pane: 'pane_area_b_milano_1',
            onEachFeature: pop_area_b_milano_1,
            style: style_area_b_milano_1_0,
        });
        bounds_group.addLayer(layer_area_b_milano_1);
        map.addLayer(layer_area_b_milano_1);
        */
        /**/

        
        
        var osmGeocoder = new L.Control.Geocoder({
            collapsed: true,
            position: 'topleft',
            text: 'Search',
            title: 'Testing'
        }).addTo(map);
        document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
        .className += ' fa fa-search';
        document.getElementsByClassName('leaflet-control-geocoder-icon')[0]
        .title += 'Search for a place';
        var baseMaps = {};
        L.control.layers(baseMaps,{'<img src="legend/area_b_milano_1.png" /> area_b_milano': layer_area_b_milano_1,"Dark Matter (retina)": layer_DarkMatterretina_0,}).addTo(map);
        setBounds();
        /*
        map.addControl(new L.Control.Search({
            layer: layer_area_b_milano_1,
            initial: false,
            hideMarkerOnCollapse: true,
            propertyName: 'dissuasori'}));
        document.getElementsByClassName('search-button')[0].className +=
         ' fa fa-binoculars';
         */
