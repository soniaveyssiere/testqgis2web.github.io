var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_Communes_T12_0 = new ol.format.GeoJSON();
var features_Communes_T12_0 = format_Communes_T12_0.readFeatures(json_Communes_T12_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_T12_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Communes_T12_0.addFeatures(features_Communes_T12_0);var lyr_Communes_T12_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Communes_T12_0, 
                style: style_Communes_T12_0,
                title: '<img src="styles/legend/Communes_T12_0.png" /> Communes_T12'
            });var format_test_adresses2_1 = new ol.format.GeoJSON();
var features_test_adresses2_1 = format_test_adresses2_1.readFeatures(json_test_adresses2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_test_adresses2_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_test_adresses2_1.addFeatures(features_test_adresses2_1);var lyr_test_adresses2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_test_adresses2_1, 
                style: style_test_adresses2_1,
    title: 'test_adresses2<br />\
    <img src="styles/legend/test_adresses2_1_0.png" /> abribus<br />\
    <img src="styles/legend/test_adresses2_1_1.png" /> equipement<br />\
    <img src="styles/legend/test_adresses2_1_2.png" /> MUPI<br />'
        });var format_Mask_2 = new ol.format.GeoJSON();
var features_Mask_2 = format_Mask_2.readFeatures(json_Mask_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mask_2 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_Mask_2.addFeatures(features_Mask_2);var lyr_Mask_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mask_2, 
                style: style_Mask_2,
                title: 'Mask'
            });

lyr_Communes_T12_0.setVisible(true);lyr_test_adresses2_1.setVisible(true);lyr_Mask_2.setVisible(true);
var layersList = [baseLayer,lyr_Communes_T12_0,lyr_test_adresses2_1,lyr_Mask_2];
lyr_Communes_T12_0.set('fieldAliases', {'ID_APUR': 'ID_APUR', 'C_INSEE': 'C_INSEE', 'L_CO': 'L_CO', 'Px_hab_16': 'Px_hab_16', });
lyr_test_adresses2_1.set('fieldAliases', {'Num': 'Num', 'COMP': 'COMP', 'NOM_RUE': 'NOM_RUE', 'CODEP': 'CODEP', 'L_CO': 'L_CO', 'latitude': 'latitude', 'longitude': 'longitude', 'result_lab': 'result_lab', 'result_sco': 'result_sco', 'result_typ': 'result_typ', 'result_id': 'result_id', 'result_hou': 'result_hou', 'result_nam': 'result_nam', 'result_str': 'result_str', 'result_pos': 'result_pos', 'result_cit': 'result_cit', 'result_con': 'result_con', 'VOC': 'VOC', 'NB': 'NB', 'photo': 'photo', });
lyr_Mask_2.set('fieldAliases', {'params': 'params', });
lyr_Communes_T12_0.set('fieldImages', {'ID_APUR': 'TextEdit', 'C_INSEE': 'TextEdit', 'L_CO': 'TextEdit', 'Px_hab_16': 'TextEdit', });
lyr_test_adresses2_1.set('fieldImages', {'Num': 'TextEdit', 'COMP': 'TextEdit', 'NOM_RUE': 'TextEdit', 'CODEP': 'TextEdit', 'L_CO': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'result_lab': 'TextEdit', 'result_sco': 'TextEdit', 'result_typ': 'TextEdit', 'result_id': 'TextEdit', 'result_hou': 'TextEdit', 'result_nam': 'TextEdit', 'result_str': 'TextEdit', 'result_pos': 'TextEdit', 'result_cit': 'TextEdit', 'result_con': 'TextEdit', 'VOC': 'TextEdit', 'NB': 'TextEdit', 'photo': 'Photo', });
lyr_Mask_2.set('fieldImages', {'params': 'TextEdit', });
lyr_Communes_T12_0.set('fieldLabels', {'ID_APUR': 'no label', 'C_INSEE': 'no label', 'L_CO': 'no label', 'Px_hab_16': 'no label', });
lyr_test_adresses2_1.set('fieldLabels', {'Num': 'no label', 'COMP': 'no label', 'NOM_RUE': 'no label', 'CODEP': 'no label', 'L_CO': 'no label', 'latitude': 'inline label', 'longitude': 'no label', 'result_lab': 'no label', 'result_sco': 'no label', 'result_typ': 'no label', 'result_id': 'no label', 'result_hou': 'no label', 'result_nam': 'no label', 'result_str': 'no label', 'result_pos': 'no label', 'result_cit': 'no label', 'result_con': 'no label', 'VOC': 'no label', 'NB': 'no label', 'photo': 'no label', });
lyr_Mask_2.set('fieldLabels', {'params': 'no label', });
lyr_Mask_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});