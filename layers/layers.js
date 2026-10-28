var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 0.596000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_DEM_2 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM<br />\
    <img src="styles/legend/DEM_2_0.png" /> <= 4<br />\
    <img src="styles/legend/DEM_2_1.png" /> 4 - 8<br />\
    <img src="styles/legend/DEM_2_2.png" /> 8 - 11<br />\
    <img src="styles/legend/DEM_2_3.png" /> 11 - 15<br />\
    <img src="styles/legend/DEM_2_4.png" /> > 15<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_2.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [8478478.944829, 1132755.306424, 8483333.711511, 1139949.146936]
        })
    });
var format_GEOMORPHOLOGY_3 = new ol.format.GeoJSON();
var features_GEOMORPHOLOGY_3 = format_GEOMORPHOLOGY_3.readFeatures(json_GEOMORPHOLOGY_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOMORPHOLOGY_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOMORPHOLOGY_3.addFeatures(features_GEOMORPHOLOGY_3);
var lyr_GEOMORPHOLOGY_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOMORPHOLOGY_3, 
                style: style_GEOMORPHOLOGY_3,
                popuplayertitle: 'GEOMORPHOLOGY',
                interactive: true,
    title: 'GEOMORPHOLOGY<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_0.png" /> Beach(Coastal Plain)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_1.png" /> Coastal Plain<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_2.png" /> Mud flat(Coastal Plain)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_3.png" /> Swale(Coastal Plain)<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_4.png" /> Water Body<br />\
    <img src="styles/legend/GEOMORPHOLOGY_3_5.png" /> <br />' });
var format_GEOLOGY_4 = new ol.format.GeoJSON();
var features_GEOLOGY_4 = format_GEOLOGY_4.readFeatures(json_GEOLOGY_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GEOLOGY_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GEOLOGY_4.addFeatures(features_GEOLOGY_4);
var lyr_GEOLOGY_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GEOLOGY_4, 
                style: style_GEOLOGY_4,
                popuplayertitle: 'GEOLOGY',
                interactive: true,
    title: 'GEOLOGY<br />\
    <img src="styles/legend/GEOLOGY_4_0.png" /> Sand and Silt<br />\
    <img src="styles/legend/GEOLOGY_4_1.png" /> Tank/WB/River<br />\
    <img src="styles/legend/GEOLOGY_4_2.png" /> <br />' });
var format_WARDBOUNDARY_5 = new ol.format.GeoJSON();
var features_WARDBOUNDARY_5 = format_WARDBOUNDARY_5.readFeatures(json_WARDBOUNDARY_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WARDBOUNDARY_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WARDBOUNDARY_5.addFeatures(features_WARDBOUNDARY_5);
var lyr_WARDBOUNDARY_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WARDBOUNDARY_5, 
                style: style_WARDBOUNDARY_5,
                popuplayertitle: 'WARD BOUNDARY',
                interactive: false,
                title: '<img src="styles/legend/WARDBOUNDARY_5.png" /> WARD BOUNDARY'
            });
var format_CONTOUR_6 = new ol.format.GeoJSON();
var features_CONTOUR_6 = format_CONTOUR_6.readFeatures(json_CONTOUR_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CONTOUR_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CONTOUR_6.addFeatures(features_CONTOUR_6);
var lyr_CONTOUR_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CONTOUR_6, 
                style: style_CONTOUR_6,
                popuplayertitle: 'CONTOUR',
                interactive: true,
    title: 'CONTOUR<br />\
    <img src="styles/legend/CONTOUR_6_0.png" /> 0 - 5<br />\
    <img src="styles/legend/CONTOUR_6_1.png" /> 5 - 10<br />\
    <img src="styles/legend/CONTOUR_6_2.png" /> 10 - 15<br />' });
var format_builtup_7 = new ol.format.GeoJSON();
var features_builtup_7 = format_builtup_7.readFeatures(json_builtup_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_builtup_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_builtup_7.addFeatures(features_builtup_7);
var lyr_builtup_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_builtup_7, 
                style: style_builtup_7,
                popuplayertitle: 'builtup',
                interactive: false,
                title: '<img src="styles/legend/builtup_7.png" /> builtup'
            });
var format_DRAINAGE_8 = new ol.format.GeoJSON();
var features_DRAINAGE_8 = format_DRAINAGE_8.readFeatures(json_DRAINAGE_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DRAINAGE_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DRAINAGE_8.addFeatures(features_DRAINAGE_8);
var lyr_DRAINAGE_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DRAINAGE_8, 
                style: style_DRAINAGE_8,
                popuplayertitle: 'DRAINAGE',
                interactive: false,
                title: '<img src="styles/legend/DRAINAGE_8.png" /> DRAINAGE'
            });
var format_ROAD_9 = new ol.format.GeoJSON();
var features_ROAD_9 = format_ROAD_9.readFeatures(json_ROAD_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD_9.addFeatures(features_ROAD_9);
var lyr_ROAD_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ROAD_9, 
                style: style_ROAD_9,
                popuplayertitle: 'ROAD',
                interactive: false,
                title: '<img src="styles/legend/ROAD_9.png" /> ROAD'
            });
var format_WARD_10 = new ol.format.GeoJSON();
var features_WARD_10 = format_WARD_10.readFeatures(json_WARD_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WARD_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WARD_10.addFeatures(features_WARD_10);
var lyr_WARD_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WARD_10, 
                style: style_WARD_10,
                popuplayertitle: 'WARD',
                interactive: true,
    title: 'WARD<br />\
    <img src="styles/legend/WARD_10_0.png" /> CHERAI KADAPPURAM<br />\
    <img src="styles/legend/WARD_10_1.png" /> CONVENT PALAM<br />\
    <img src="styles/legend/WARD_10_2.png" /> ELINJAMKULAM<br />\
    <img src="styles/legend/WARD_10_3.png" /> GOWREESWARAM<br />\
    <img src="styles/legend/WARD_10_4.png" /> JANATHA<br />\
    <img src="styles/legend/WARD_10_5.png" /> KARUTHALA<br />\
    <img src="styles/legend/WARD_10_6.png" /> KOMARANTHY<br />\
    <img src="styles/legend/WARD_10_7.png" /> KOVILAKAM SOUTH<br />\
    <img src="styles/legend/WARD_10_8.png" /> KOVILUNKAL<br />\
    <img src="styles/legend/WARD_10_9.png" /> MANAYATHUKADU<br />\
    <img src="styles/legend/WARD_10_10.png" /> MANI BAZAR<br />\
    <img src="styles/legend/WARD_10_11.png" /> MARKET<br />\
    <img src="styles/legend/WARD_10_12.png" /> MOSQUE<br />\
    <img src="styles/legend/WARD_10_13.png" /> MUNAMBAM HARBOUR<br />\
    <img src="styles/legend/WARD_10_14.png" /> MUNAMBAM JANAHITHA<br />\
    <img src="styles/legend/WARD_10_15.png" /> MUNAMBAM KADAPPURAM<br />\
    <img src="styles/legend/WARD_10_16.png" /> PALLIPPURAM FORT<br />\
    <img src="styles/legend/WARD_10_17.png" /> PANCHAYAT<br />\
    <img src="styles/legend/WARD_10_18.png" /> REKTHESWARY<br />\
    <img src="styles/legend/WARD_10_19.png" /> SAHODARA BHAVANAM<br />\
    <img src="styles/legend/WARD_10_20.png" /> SAMOOHYA SEVASANGHAM<br />\
    <img src="styles/legend/WARD_10_21.png" /> SMHS<br />\
    <img src="styles/legend/WARD_10_22.png" /> THRIKKADAKKAPPILLY<br />\
    <img src="styles/legend/WARD_10_23.png" /> VADAYIL<br />\
    <img src="styles/legend/WARD_10_24.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_DEM_2.setVisible(true);lyr_GEOMORPHOLOGY_3.setVisible(true);lyr_GEOLOGY_4.setVisible(true);lyr_WARDBOUNDARY_5.setVisible(true);lyr_CONTOUR_6.setVisible(true);lyr_builtup_7.setVisible(true);lyr_DRAINAGE_8.setVisible(true);lyr_ROAD_9.setVisible(true);lyr_WARD_10.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_DEM_2,lyr_GEOMORPHOLOGY_3,lyr_GEOLOGY_4,lyr_WARDBOUNDARY_5,lyr_CONTOUR_6,lyr_builtup_7,lyr_DRAINAGE_8,lyr_ROAD_9,lyr_WARD_10];
lyr_GEOMORPHOLOGY_3.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_GEOLOGY_4.set('fieldAliases', {'ROCK_GROUP': 'ROCK_GROUP', 'NAME': 'NAME', });
lyr_WARDBOUNDARY_5.set('fieldAliases', {'id': 'id', });
lyr_CONTOUR_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_builtup_7.set('fieldAliases', {'fid': 'fid', 'source': 'source', 'height': 'height', 'bbox.xmax': 'bbox.xmax', 'bbox.xmin': 'bbox.xmin', 'bbox.ymax': 'bbox.ymax', 'bbox.ymin': 'bbox.ymin', });
lyr_DRAINAGE_8.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_ROAD_9.set('fieldAliases', {'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_WARD_10.set('fieldAliases', {'gml_parent': 'gml_parent', 'gml_pare_1': 'gml_pare_1', 'gml_id': 'gml_id', 'geom': 'geom', 'District': 'District', 'LSGD': 'LSGD', 'Ward_Name': 'Ward_Name', 'Ward_No': 'Ward_No', 'Lsgd_Type': 'Lsgd_Type', 'Created_Da': 'Created_Da', 'Surveyor': 'Surveyor', 'Mob_No': 'Mob_No', 'Remarks': 'Remarks', '_distLsgd': '_distLsgd', 'OBJECTID': 'OBJECTID', '_result': '_result', '_ulid': '_ulid', '_distLsgd2': '_distLsgd2', });
lyr_GEOMORPHOLOGY_3.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_GEOLOGY_4.set('fieldImages', {'ROCK_GROUP': 'TextEdit', 'NAME': 'TextEdit', });
lyr_WARDBOUNDARY_5.set('fieldImages', {'id': 'TextEdit', });
lyr_CONTOUR_6.set('fieldImages', {'fid': 'TextEdit', 'ID': 'Range', 'ELEV': 'TextEdit', });
lyr_builtup_7.set('fieldImages', {'fid': 'TextEdit', 'source': 'TextEdit', 'height': 'TextEdit', 'bbox.xmax': 'TextEdit', 'bbox.xmin': 'TextEdit', 'bbox.ymax': 'TextEdit', 'bbox.ymin': 'TextEdit', });
lyr_DRAINAGE_8.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'Range', 'other_tags': 'TextEdit', });
lyr_ROAD_9.set('fieldImages', {'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_WARD_10.set('fieldImages', {'gml_parent': 'TextEdit', 'gml_pare_1': 'TextEdit', 'gml_id': 'TextEdit', 'geom': 'TextEdit', 'District': 'TextEdit', 'LSGD': 'TextEdit', 'Ward_Name': 'TextEdit', 'Ward_No': 'TextEdit', 'Lsgd_Type': 'TextEdit', 'Created_Da': 'TextEdit', 'Surveyor': 'TextEdit', 'Mob_No': 'TextEdit', 'Remarks': 'TextEdit', '_distLsgd': 'TextEdit', 'OBJECTID': 'TextEdit', '_result': 'TextEdit', '_ulid': 'TextEdit', '_distLsgd2': 'TextEdit', });
lyr_GEOMORPHOLOGY_3.set('fieldLabels', {'NAME': 'inline label - visible with data', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_GEOLOGY_4.set('fieldLabels', {'ROCK_GROUP': 'no label', 'NAME': 'inline label - visible with data', });
lyr_WARDBOUNDARY_5.set('fieldLabels', {'id': 'no label', });
lyr_CONTOUR_6.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'inline label - visible with data', });
lyr_builtup_7.set('fieldLabels', {'fid': 'no label', 'source': 'no label', 'height': 'no label', 'bbox.xmax': 'no label', 'bbox.xmin': 'no label', 'bbox.ymax': 'no label', 'bbox.ymin': 'no label', });
lyr_DRAINAGE_8.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_ROAD_9.set('fieldLabels', {'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_WARD_10.set('fieldLabels', {'gml_parent': 'no label', 'gml_pare_1': 'no label', 'gml_id': 'no label', 'geom': 'no label', 'District': 'no label', 'LSGD': 'no label', 'Ward_Name': 'inline label - visible with data', 'Ward_No': 'no label', 'Lsgd_Type': 'no label', 'Created_Da': 'no label', 'Surveyor': 'no label', 'Mob_No': 'no label', 'Remarks': 'no label', '_distLsgd': 'no label', 'OBJECTID': 'no label', '_result': 'no label', '_ulid': 'no label', '_distLsgd2': 'no label', });
lyr_WARD_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});