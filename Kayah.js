var table = ee.FeatureCollection("users/pawlokdass/Sumalika/Kayah"),
    tcc = ee.Image("users/pawlokdass/Sumalika/tcc_myanmar_calib_2018_wgs84_bd"),
    geometry = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.8471386333984, 19.548888148855415],
              [97.84712254014431, 19.547937769724555],
              [97.84831880536495, 19.547963045837726],
              [97.84830271211086, 19.54890331443446],
              [97.84724055734097, 19.548893204048593]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry2 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.81293510404049, 19.54859241977893],
              [97.8141796490234, 19.54858736457634],
              [97.81417428460537, 19.54967928466054],
              [97.81292437520443, 19.549669174323284]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry3 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.82521425691067, 19.651026266248504],
              [97.82771944013058, 19.651061630142305],
              [97.82769261804043, 19.652117491381272],
              [97.82524644341885, 19.652107387478893]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry4 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.77979104724346, 19.654217826272884],
              [97.78076737132488, 19.65406121776486],
              [97.78113751616894, 19.654374434628043],
              [97.78120725360333, 19.654778584515622],
              [97.7803918620628, 19.654889725556206]]]),
        {
          "system:index": "0",
          "Class": "MDF"
        }),
    geometry5 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.76990174260555, 19.66167802379778],
              [97.77086733785092, 19.66189019295408],
              [97.77064203229367, 19.66298134418073],
              [97.76959597077786, 19.662885363583626]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry6 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.7470734616798, 19.65035940279172],
              [97.7478110691589, 19.650351824781964],
              [97.7477762004417, 19.651228345536726],
              [97.7470546862167, 19.651200559649702]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry7 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.7421918412727, 19.64984283430758],
              [97.74266927447735, 19.64984788633014],
              [97.74266927447735, 19.650110591284466],
              [97.74218647685467, 19.650105539270164]]]),
        {
          "Class": "Pine",
          "system:index": "0"
        }),
    geometry8 = /* color: #00ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.71295844521939, 19.656777848513748],
              [97.71409033742367, 19.656777848513748],
              [97.7140957018417, 19.65713147442271],
              [97.71296380963742, 19.657121370836137]]]),
        {
          "Class": "Pine",
          "system:index": "0"
        }),
    geometry9 = /* color: #0000ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.69551335778652, 19.663062169902222],
              [97.69648968186794, 19.663072273114533],
              [97.69648431744992, 19.663794651144897],
              [97.69554017987667, 19.66377444481066]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry10 = /* color: #999900 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.69306718316494, 19.662587318205475],
              [97.69430904593884, 19.662597421447693],
              [97.69430636372982, 19.66286768294113],
              [97.69458799567639, 19.662870208747332],
              [97.6945906778854, 19.663324853215446],
              [97.69306718316494, 19.663309698420612]]]),
        {
          "Class": "Pine",
          "system:index": "0"
        }),
    geometry11 = /* color: #009999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.6533356211815, 19.6647456089631],
              [97.65419929215776, 19.664594062350446],
              [97.65414564799772, 19.665326536317938],
              [97.65328734143749, 19.665301278650638]]]),
        {
          "Class": "Pine",
          "system:index": "0"
        }),
    geometry12 = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.70199245531553, 19.27009903951564],
              [97.70227140505308, 19.269772419740498],
              [97.702617410016, 19.270010421811534],
              [97.70256913025374, 19.27033450918227],
              [97.70216948111052, 19.270316785670758]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry13 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.70061379988188, 19.265343999016928],
              [97.70052260477537, 19.26507307402561],
              [97.70077473242277, 19.26501230574179],
              [97.70093566496367, 19.265116118213037],
              [97.700994673562, 19.26531361492805],
              [97.70078277904982, 19.265422491220473]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry14 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.76733374912733, 19.267625321604392],
              [97.76763952095503, 19.268000053022178],
              [97.76717281658644, 19.268319080445952],
              [97.7663198741197, 19.26796460549232]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry15 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.76721036751265, 19.264460326132106],
              [97.76748395283217, 19.26402988202743],
              [97.76781654675001, 19.264090650675435],
              [97.76813304741377, 19.264328660996537],
              [97.76785946209425, 19.264743912218766]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry16 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.88077783901686, 19.522237846416434],
              [96.88155031521315, 19.522890072663753],
              [96.8826231988191, 19.52276367243388],
              [96.88300407249922, 19.52388104703978],
              [96.881164077115, 19.524042838197513],
              [96.87985515911573, 19.523496792390862]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry17 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.88526517469877, 19.508919720998943],
              [96.88575870115751, 19.508927305665033],
              [96.88573187906736, 19.50942536462632],
              [96.88520616610045, 19.50936721568962]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry18 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.90333253462309, 19.371007244283028],
              [96.90438396055693, 19.370987001315235],
              [96.90436786730284, 19.372004207335525],
              [96.90327352602476, 19.371989025202797]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry19 = /* color: #00ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.84128231127256, 19.29913901078567],
              [96.84209233839506, 19.299108632965943],
              [96.84199577887053, 19.30045031462722],
              [96.84071368296141, 19.300338930153366]]]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry20 = /* color: #0000ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.84186703283781, 19.231012719369925],
              [96.84241420347685, 19.230749335311703],
              [96.84219962675566, 19.230151654536016],
              [96.84324032385344, 19.23022256592819],
              [96.84354609568113, 19.230865832158784],
              [96.8430364759683, 19.231590136788814],
              [96.84187776167387, 19.231564811505983]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry21 = /* color: #999900 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.85354000647062, 19.213066182136092],
              [96.8539128335237, 19.213157363400015],
              [96.8538430960893, 19.213519555143463],
              [96.85345149357313, 19.213491694268434]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry22 = /* color: #009999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.112778189969, 18.69282760199347],
              [97.11344874222273, 18.692832683440553],
              [97.1134433778047, 18.69327985018618],
              [97.11277282555098, 18.69325444301637]]]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry23 = /* color: #ff00ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.31435692627424, 18.67000528569152],
              [97.31619692165846, 18.670045942739254],
              [97.31621837933058, 18.67172303746307],
              [97.31437301952833, 18.67172303746307]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry24 = /* color: #ff9999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.27702594120497, 18.68628765324023],
              [97.27875328381056, 18.68636895951453],
              [97.27873719055647, 18.68746659039811],
              [97.27702594120497, 18.687471672006037]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry25 = /* color: #99ff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.31522327978605, 18.861224037868514],
              [97.31523669083113, 18.860637715858495],
              [97.3156095178842, 18.860625024883234],
              [97.31559342463011, 18.861264648840923],
              [97.31528228838438, 18.861269725211773]]]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry26 = /* color: #9999ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.3347363503694, 18.867234354806715],
              [97.33661926109785, 18.867264811945272],
              [97.33662998993391, 18.867899334406978],
              [97.33474707920546, 18.867894258236806]]]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        });
//----------------------------------------------------ROI--------------------------------------------

var state = ee.FeatureCollection(table);
//print(state);

var roi = state;
Map.centerObject(roi,8);
//print(roi);

var empty = ee.Image().byte();
var outline_roi = empty.paint({
  featureCollection: roi,
  color: 'AREA',
  width: 4
});

var palette = ['FF0000'];
Map.addLayer(outline_roi, {palette: palette, max: 14}, 'different color edges');

var train =ee.FeatureCollection([geometry,geometry2,geometry3,geometry4,geometry5,
                                 geometry6,geometry7,geometry8,geometry9,geometry10,
                                 geometry11,geometry12,geometry13,geometry14,geometry15,
                                 geometry16,geometry17,geometry18,geometry19,geometry20,
                                 geometry21,geometry22,geometry23,geometry24,geometry25,
                                 geometry26]);
print(train, 'train');

var training = train.remap(['MDF','Upland_Evergreen','Pine', 'Bamboo', 'Lowland_Evergreen'], [0, 1, 2, 3, 4], 'Class');
print(training, 'training');

var mdf = training.filter(ee.Filter.eq('Class', 0));
var mdf_size = mdf.size();
print(mdf_size,'mdf_size');

var up_evg = training.filter(ee.Filter.eq('Class', 1));
var up_evg_size = up_evg.size();
print(up_evg_size,'up_evg_size');

var pine = training.filter(ee.Filter.eq('Class', 2));
var pine_size = pine.size();
print(pine_size,'pine_size');

var bamboo = training.filter(ee.Filter.eq('Class', 3));
var bamboo_size = bamboo.size();
print(bamboo_size,'bamboo_size');


//----------------------------------------------------TP_PCT----------------------------------------------
//Load TP_PCT_Map
var tc = ee.Image(tcc);
var tc_gte25 = tc.gte(25);
var tc_gte10 = tc.gte(10);
//Map.addLayer(tc.clip(roi), {}, 'PCT');
Map.addLayer(tc_gte10.updateMask(tc_gte10), {}, 'tc_gte10');
Map.addLayer(tc_gte25.updateMask(tc_gte25), {}, 'tc_gte25');


//---------------------------------------------------Rainfall----------------------------------------------
//Load CHIRPS data
//-----------------------------------------------------SRTM------------------------------------------------
// Load SRTM
var dataset = ee.Image('CGIAR/SRTM90_V4');
var elevation = dataset.select('elevation').unmask(0);
var slope = ee.Terrain.slope(elevation);
var aspect = ee.Terrain.aspect(elevation);

Map.addLayer(dataset, {}, 'elevation');
//print(elevation);

var elev5m = elevation.lte(5);
//Map.addLayer(elev5m, {}, 'elev5m');
//-----------------------------------------------------GEDI-------------------------------------------
// Load GEDI
var gedi = ee.ImageCollection('users/potapovpeter/GEDI_V27');
//print(gedi);

var gedi_sasia= gedi.filterMetadata('system:index', 'equals', 'GEDI_SASIA_v27').first();
//print(gedi_sasia,"gedi_sasia");

var gedi_roi  = ee.Image(gedi_sasia).rename('ht');
//print(gedi_roi);
//Map.addLayer(gedi_roi.clip(roi), {min:0, max:25}, 'gedi_roi');


//----------------------------------------------------Radar--Processing---------------------------------------

function toDB(img) {
  return ee.Image(img).log10().multiply(10.0);
}

// The RL speckle filter
function RefinedLee(img) {
  // img must be in natural units, i.e. not in dB!
  // Set up 3x3 kernels 
  var weights3 = ee.List.repeat(ee.List.repeat(1,3),3);
  var kernel3 = ee.Kernel.fixed(3,3, weights3, 1, 1, false);

  var mean3 = img.reduceNeighborhood(ee.Reducer.mean(), kernel3);
  var variance3 = img.reduceNeighborhood(ee.Reducer.variance(), kernel3);

  // Use a sample of the 3x3 windows inside a 7x7 windows to determine gradients and directions
  var sample_weights = ee.List([[0,0,0,0,0,0,0], [0,1,0,1,0,1,0],[0,0,0,0,0,0,0], [0,1,0,1,0,1,0], [0,0,0,0,0,0,0], [0,1,0,1,0,1,0],[0,0,0,0,0,0,0]]);

  var sample_kernel = ee.Kernel.fixed(7,7, sample_weights, 3,3, false);

  // Calculate mean and variance for the sampled windows and store as 9 bands
  var sample_mean = mean3.neighborhoodToBands(sample_kernel); 
  var sample_var = variance3.neighborhoodToBands(sample_kernel);

  // Determine the 4 gradients for the sampled windows
  var gradients = sample_mean.select(1).subtract(sample_mean.select(7)).abs();
  gradients = gradients.addBands(sample_mean.select(6).subtract(sample_mean.select(2)).abs());
  gradients = gradients.addBands(sample_mean.select(3).subtract(sample_mean.select(5)).abs());
  gradients = gradients.addBands(sample_mean.select(0).subtract(sample_mean.select(8)).abs());

  // And find the maximum gradient amongst gradient bands
  var max_gradient = gradients.reduce(ee.Reducer.max());

  // Create a mask for band pixels that are the maximum gradient
  var gradmask = gradients.eq(max_gradient);

  // duplicate gradmask bands: each gradient represents 2 directions
  gradmask = gradmask.addBands(gradmask);

  // Determine the 8 directions
  var directions = sample_mean.select(1).subtract(sample_mean.select(4)).gt(sample_mean.select(4).subtract(sample_mean.select(7))).multiply(1);
  directions = directions.addBands(sample_mean.select(6).subtract(sample_mean.select(4)).gt(sample_mean.select(4).subtract(sample_mean.select(2))).multiply(2));
  directions = directions.addBands(sample_mean.select(3).subtract(sample_mean.select(4)).gt(sample_mean.select(4).subtract(sample_mean.select(5))).multiply(3));
  directions = directions.addBands(sample_mean.select(0).subtract(sample_mean.select(4)).gt(sample_mean.select(4).subtract(sample_mean.select(8))).multiply(4));
  // The next 4 are the not() of the previous 4
  directions = directions.addBands(directions.select(0).not().multiply(5));
  directions = directions.addBands(directions.select(1).not().multiply(6));
  directions = directions.addBands(directions.select(2).not().multiply(7));
  directions = directions.addBands(directions.select(3).not().multiply(8));

  // Mask all values that are not 1-8
  directions = directions.updateMask(gradmask);

  // "collapse" the stack into a singe band image (due to masking, each pixel has just one value (1-8) in it's directional band, and is otherwise masked)
  directions = directions.reduce(ee.Reducer.sum());  

  //var pal = ['ffffff','ff0000','ffff00', '00ff00', '00ffff', '0000ff', 'ff00ff', '000000'];
  //Map.addLayer(directions.reduce(ee.Reducer.sum()), {min:1, max:8, palette: pal}, 'Directions', false);

  var sample_stats = sample_var.divide(sample_mean.multiply(sample_mean));

  // Calculate localNoiseVariance
  var sigmaV = sample_stats.toArray().arraySort().arraySlice(0,0,5).arrayReduce(ee.Reducer.mean(), [0]);

  // Set up the 7*7 kernels for directional statistics
  var rect_weights = ee.List.repeat(ee.List.repeat(0,7),3).cat(ee.List.repeat(ee.List.repeat(1,7),4));

  var diag_weights = ee.List([[1,0,0,0,0,0,0], [1,1,0,0,0,0,0], [1,1,1,0,0,0,0], 
    [1,1,1,1,0,0,0], [1,1,1,1,1,0,0], [1,1,1,1,1,1,0], [1,1,1,1,1,1,1]]);

  var rect_kernel = ee.Kernel.fixed(7,7, rect_weights, 3, 3, false);
  var diag_kernel = ee.Kernel.fixed(7,7, diag_weights, 3, 3, false);

  // Create stacks for mean and variance using the original kernels. Mask with relevant direction.
  var dir_mean = img.reduceNeighborhood(ee.Reducer.mean(), rect_kernel).updateMask(directions.eq(1));
  var dir_var = img.reduceNeighborhood(ee.Reducer.variance(), rect_kernel).updateMask(directions.eq(1));

  dir_mean = dir_mean.addBands(img.reduceNeighborhood(ee.Reducer.mean(), diag_kernel).updateMask(directions.eq(2)));
  dir_var = dir_var.addBands(img.reduceNeighborhood(ee.Reducer.variance(), diag_kernel).updateMask(directions.eq(2)));

  // and add the bands for rotated kernels
  for (var i=1; i<4; i++) {
    dir_mean = dir_mean.addBands(img.reduceNeighborhood(ee.Reducer.mean(), rect_kernel.rotate(i)).updateMask(directions.eq(2*i+1)));
    dir_var = dir_var.addBands(img.reduceNeighborhood(ee.Reducer.variance(), rect_kernel.rotate(i)).updateMask(directions.eq(2*i+1)));
    dir_mean = dir_mean.addBands(img.reduceNeighborhood(ee.Reducer.mean(), diag_kernel.rotate(i)).updateMask(directions.eq(2*i+2)));
    dir_var = dir_var.addBands(img.reduceNeighborhood(ee.Reducer.variance(), diag_kernel.rotate(i)).updateMask(directions.eq(2*i+2)));
  }

  // "collapse" the stack into a single band image (due to masking, each pixel has just one value in it's directional band, and is otherwise masked)
  dir_mean = dir_mean.reduce(ee.Reducer.sum());
  dir_var = dir_var.reduce(ee.Reducer.sum());

  // A finally generate the filtered value
  var varX = dir_var.subtract(dir_mean.multiply(dir_mean).multiply(sigmaV)).divide(sigmaV.add(1.0));

  var b = varX.divide(dir_var);

  var result = dir_mean.add(b.multiply(img.subtract(dir_mean)));
  result= result.arrayFlatten([['sum']]);
  return(result);
}

//-----------------------------------------------------PALSAR-----------------------------------------------
//Load PALSAR

var palsar = ee.ImageCollection('JAXA/ALOS/PALSAR/YEARLY/SAR')
                  .filterBounds(roi)
                  .filterDate('2017-01-01', '2018-01-01')
                  .select('HH', 'HV');
//print(palsar,'PALSAR');

var pal_HH = palsar.select('HH');
//print(pal_HH, 'pal_HH');
//Map.addLayer(pal_HH, {},'pal_HH');

// Convert DN to gamma_nought in natural values

function toGamma(img) { 
  return ee.Image(img).pow(2).divide(ee.Number(10.0).pow(8.3));
}

var palsar_gn = palsar.map(function(img) { return ee.Image(img).pow(2).divide(ee.Number(10.0).pow(8.3))});

var pal_HH_gn = palsar_gn.select('HH').first();
var pal_HV_gn = palsar_gn.select('HV').first();
var pal_HH_HV = pal_HH_gn.divide(pal_HV_gn);

//Map.addLayer(pal_HH, {min:-25, max:0}, "pal_HH");


var pal_HH_urf = toDB(pal_HH_gn);
//print(pal_HH_urf,'pal_HH_urf');
//Map.addLayer(pal_HH_urf.clip(roi),{min:-25.0, max:0.0}, "pal_HH_urf");

var pal_HH_rf = toDB(RefinedLee(pal_HH_gn)).rename('HH');
//print(pal_HH_rf,'pal_HH_rf');
//Map.addLayer(pal_HH_rf.clip(roi),{}, "pal_HH_rf");

var pal_HV_rf = toDB(RefinedLee(pal_HV_gn)).rename('HV');
//print(pal_HV_rf, 'pal_HV_rf');
//Map.addLayer(pal_HV_rf.clip(roi),{min:-25.0, max:0.0}, "pal_HV_rf");

var pal_HH_HV = (pal_HH_rf.divide(pal_HV_rf)).rename('HH_HV');
//print(pal_HH_HV, 'pal_HH_HV');
//Map.addLayer(pal_HH_HV.clip(roi),{min:-1.0, max:1.0}, "pal_HH_HV");

var glcmHH = pal_HH_gn.unitScale(0,1).multiply(255).toByte().glcmTexture({size:3});
//print(glcmHH, 'glcmHH');

var glcmHV = pal_HV_gn.unitScale(0,1).multiply(255).toByte().glcmTexture({size:3});
var glcmHH_HV =pal_HH_HV.unitScale(0,1).multiply(255).toByte().glcmTexture({size:3});

var pal_variables = pal_HH_gn.addBands(pal_HV_gn).addBands(pal_HH_HV)
                             .addBands(glcmHH).addBands(glcmHV).addBands(glcmHH_HV);

//----------------------------------------------------Sentinel-1----------------------------------------------------
//Load Sentinel-1
var s1_col = ee.ImageCollection('COPERNICUS/S1_GRD_FLOAT')
                            .filterBounds(roi)
                            .filter(ee.Filter.eq('instrumentMode', 'IW'))
                            .filterDate('2016-05-01', '2020-04-30')
                            .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VV'))
                            .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VH'))
                            .filter(ee.Filter.eq('orbitProperties_pass', 'DESCENDING'));
                            
//print(s1_col, 'S1_col');

var s1_col_VV = s1_col.select('VV');
var s1_col_VH = s1_col.select('VH');

//Map.addLayer(S1_col.select('VV'), {}, 'S1_col');
//Map.addLayer(S1_col.select('VH'), {}, 'S1_col');

// Functions to convert from/to dB
function toNatural(img) {
  return ee.Image(10.0).pow(img.select(0).divide(10.0));
}

// convert sigma naught to gamma naught for S1

//function toGamma0(image) {
//  return image.select(1).subtract(image.select('angle').multiply(Math.PI/180.0).cos().log10().multiply(10.0));
//}

//Function applies Refined Lee to all images in collection

var s1_VV_rf = s1_col_VV.map(function(image){
  return toDB(RefinedLee(toNatural(image))).set("system:time_start", image.get('system:time_start'));
});

//print(s1_VV_rf, "s1_VV_rf");

//1 month VV composite from speckle filtered images

var months = ee.List.sequence(1, 12, 1);
//print(months);
var mon = ee.List(['January','February','March','April','May','June','July','August','September','October','November','December']);
var s1_VV_mon_composites = months.map(function(m) {
  var n = ee.Number(m).subtract(1);
  var s1_VV_image = s1_col_VV.filter(ee.Filter.calendarRange({
    start: m, 
    end: ee.Number(m).add(0), 
    field: 'month'
  })).median()
  .set('month', mon.get(n))
  .select(0).rename('VV_rf');
  
  var glcmVV = (s1_VV_image.select(0)).unitScale(0,1).multiply(255).toByte().glcmTexture({size:3});
  
  return s1_VV_image.addBands(glcmVV).float();
});

//print(s1_VV_mon_composites, "s1_VV_mon_composites");
//print(s1_VV_mon_composites.get(0),"s1_VV_mon_composites.get(0)");

var s1_VV_variables = ee.Image(s1_VV_mon_composites.get(0))
                                           .addBands(ee.Image(s1_VV_mon_composites.get(1)))
                                           .addBands(ee.Image(s1_VV_mon_composites.get(2)))
                                           .addBands(ee.Image(s1_VV_mon_composites.get(3)))
                                           .addBands(ee.Image(s1_VV_mon_composites.get(4)))
                                           .addBands(ee.Image(s1_VV_mon_composites.get(5)))
                                           .addBands(ee.Image(s1_VV_mon_composites.get(6)))
                                           .addBands(ee.Image(s1_VV_mon_composites.get(7)))
                                           .addBands(ee.Image(s1_VV_mon_composites.get(8)))
                                           .addBands(ee.Image(s1_VV_mon_composites.get(9)))
                                           .addBands(ee.Image(s1_VV_mon_composites.get(10)))
                                           .addBands(ee.Image(s1_VV_mon_composites.get(11)));


var s1_VH_rf = s1_col_VH.map(function(image){
  return toDB(RefinedLee(toNatural(image))).set("system:time_start", image.get('system:time_start'));
});

//print(s1_VH_rf, "s1_VH_rf");


//1 month VH composite from speckle filtered images

var months = ee.List.sequence(1, 12, 1);
//print(months);
var mon = ee.List(['January','February','March','April','May','June','July','August','September','October','November','December']);
var s1_VH_mon_composites = months.map(function(m) {
  var n = ee.Number(m).subtract(1);
  var s1_VH_image = s1_col_VH.filter(ee.Filter.calendarRange({
    start: m, 
    end: ee.Number(m).add(0), 
    field: 'month'
  })).median()
  .set('month', mon.get(n))
  .select(0).rename('VH_rf');
  
  var glcmVH = (s1_VH_image.select(0)).unitScale(0,1).multiply(255).toByte().glcmTexture({size:3});
  
  return s1_VH_image.addBands(glcmVH).float();
});

//print(s1_VH_mon_composites, "s1_VH_mon_composites");
//print(s1_VH_mon_composites.get(0),"s1_VH_mon_composites.get(0)");

var s1_VH_variables = ee.Image(s1_VH_mon_composites.get(0))
                                           .addBands(ee.Image(s1_VH_mon_composites.get(1)))
                                           .addBands(ee.Image(s1_VH_mon_composites.get(2)))
                                           .addBands(ee.Image(s1_VH_mon_composites.get(3)))
                                           .addBands(ee.Image(s1_VH_mon_composites.get(4)))
                                           .addBands(ee.Image(s1_VH_mon_composites.get(5)))
                                           .addBands(ee.Image(s1_VH_mon_composites.get(6)))
                                           .addBands(ee.Image(s1_VH_mon_composites.get(7)))
                                           .addBands(ee.Image(s1_VH_mon_composites.get(8)))
                                           .addBands(ee.Image(s1_VH_mon_composites.get(9)))
                                           .addBands(ee.Image(s1_VH_mon_composites.get(10)))
                                           .addBands(ee.Image(s1_VH_mon_composites.get(11)));
                                           

//--------------------------------------------------- Sentinel-2------------------------------------------------------

//Load Sentinel-2 SR
// Function to mask clouds using the Sentinel-2 QA band
// @param {ee.Image} image Sentinel-2 image
// @return {ee.Image} cloud masked Sentinel-2 image
 //
function maskS2clouds(image) {
  var qa = image.select('QA60');

  // Bits 10 and 11 are clouds and cirrus, respectively.
  var cloudBitMask = 1 << 10;
  var cirrusBitMask = 1 << 11;

  // Both flags should be set to zero, indicating clear conditions.
  var mask = qa.bitwiseAnd(cloudBitMask).eq(0)
      .and(qa.bitwiseAnd(cirrusBitMask).eq(0));
  var prop = image.toDictionary();

  return image.updateMask(mask).divide(10000).set("system:time_start", image.get('system:time_start'));
}

var s2collection = ee.ImageCollection('COPERNICUS/S2_SR')
                  .filterBounds(roi)
                  .filterDate('2015-04-01', '2020-04-30')
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',50))
                  .map(maskS2clouds)
                  .select('B[2-8]', 'B8A', 'B11', 'B12');
//print(s2collection.first());
//print(s2collection.size());

var s2_med = s2collection.median();
//Map.addLayer(s2_med, {min: 0.0, max: 0.3,bands: ['B11', 'B8', 'B3']}, 's2_med');
var s2_med_ndvi =s2_med.normalizedDifference(['B8A', 'B4']);
var s2_water_mask =s2_med_ndvi.lte(0);

//Map.addLayer(s2_water_mask.clip(roi), {}, "s2_water_mask");

//1 month composite

var months = ee.List.sequence(1, 12, 1);
//print(months);
var mon = ee.List(['January','February','March','April','May','June','July','August','September','October','November','December']);
var s2_mon_composites = months.map(function(m) {
  var n = ee.Number(m).subtract(1);
  var s2_img_all_10m = s2collection.filter(ee.Filter.calendarRange({
    start: m, 
    end: ee.Number(m).add(0), 
    field: 'month'
  })).median()
  .set('month', mon.get(n));

  return s2_img_all_10m.float();
});

// Map the function over the collection and display the result.
//print(s2_mon_composites,'s2_mon_composites');

var check0 = ee.Image(s2_mon_composites.get(0));
var check1 = ee.Image(s2_mon_composites.get(1));
var check2 = ee.Image(s2_mon_composites.get(2));
var check3 = ee.Image(s2_mon_composites.get(3));
var check4 = ee.Image(s2_mon_composites.get(4));
var check5 = ee.Image(s2_mon_composites.get(5));
var check6 = ee.Image(s2_mon_composites.get(6));
var check7 = ee.Image(s2_mon_composites.get(7));
var check8 = ee.Image(s2_mon_composites.get(8));
var check9 = ee.Image(s2_mon_composites.get(9));
var check10 = ee.Image(s2_mon_composites.get(10));
var check11 = ee.Image(s2_mon_composites.get(11));

Map.addLayer(check0, {min: 0.0, max: 0.3,bands: ['B11', 'B8', 'B3']}, 'checkjan');
Map.addLayer(check1, {min: 0.0, max: 0.3,bands: ['B11', 'B8', 'B3']}, 'checkfeb');
Map.addLayer(check2, {min: 0.0, max: 0.3,bands: ['B11', 'B8', 'B3']}, 'checkmar');
Map.addLayer(check3, {min: 0.0, max: 0.3,bands: ['B11', 'B8', 'B3']}, 'checkapr');
Map.addLayer(check10, {min: 0.0, max: 0.3,bands: ['B11', 'B8', 'B3']}, 'checknov');
Map.addLayer(check11, {min: 0.0, max: 0.3,bands: ['B11', 'B8', 'B3']}, 'checkdec');

var comp_list = ee.List([check0,check1,check2,check3,check10,check11]);

var image_indices = ee.List([]);
var i;
for (i = 0; i < 6; i++) {
  var image = ee.Image(comp_list.get(i));
  
  var b2 = image.select('B2');
  var b3 = image.select('B3');
  var b4 = image.select('B4');
  var b5 = image.select('B5');
  var b6 = image.select('B6');
  var b7 = image.select('B7');
  var b8 = image.select('B8');
  var b8a = image.select('B8A');
  var b11 = image.select('B11');
  var b12 = image.select('B12');
  var si_1 = (b2.divide(b3).rename('SI_1'));
  var si_2 = (b2.divide(b4).rename('SI_2'));
  var si_3 = (b2.divide(b5).rename('SI_3'));
  var si_4 = (b2.divide(b6).rename('SI_4'));
  var si_5 = (b2.divide(b7).rename('SI_5'));
  var si_6 = (b2.divide(b8).rename('SI_6'));
  var si_7 = (b2.divide(b8a).rename('SI_7'));
  var si_8 = (b2.divide(b11).rename('SI_8'));
  var si_9 = (b2.divide(b12).rename('SI_9'));
  
  var si_10 = (b3.divide(b4).rename('SI_10'));
  var si_11 = (b3.divide(b5).rename('SI_11'));
  var si_12 = (b3.divide(b6).rename('SI_12'));
  var si_13 = (b3.divide(b7).rename('SI_13'));
  var si_14 = (b3.divide(b8).rename('SI_14'));
  var si_15 = (b3.divide(b8a).rename('SI_15'));
  var si_16 = (b3.divide(b11).rename('SI_16'));
  var si_17 = (b3.divide(b12).rename('SI_17'));
  
  var si_18 = (b4.divide(b5).rename('SI_18'));
  var si_19 = (b4.divide(b6).rename('SI_19'));
  var si_20 = (b4.divide(b7).rename('SI_20'));
  var si_21 = (b4.divide(b8).rename('SI_21'));
  var si_22 = (b4.divide(b8a).rename('SI_22'));
  var si_23 = (b4.divide(b11).rename('SI_23'));
  var si_24 = (b4.divide(b12).rename('SI_24'));
  
  var si_25 = (b5.divide(b6).rename('SI_25'));
  var si_26 = (b5.divide(b7).rename('SI_26'));
  var si_27 = (b5.divide(b8).rename('SI_27'));
  var si_28 = (b5.divide(b8a).rename('SI_28'));
  var si_29 = (b5.divide(b11).rename('SI_29'));
  var si_30 = (b5.divide(b12).rename('SI_30'));
  
  var si_31 = (b6.divide(b7).rename('SI_31'));
  var si_32 = (b6.divide(b8).rename('SI_32'));
  var si_33 = (b6.divide(b8a).rename('SI_33'));
  var si_34 = (b6.divide(b11).rename('SI_34'));
  var si_35 = (b6.divide(b12).rename('SI_35'));
    
  var si_36 = (b7.divide(b8).rename('SI_36'));
  var si_37 = (b7.divide(b8a).rename('SI_37'));
  var si_38 = (b7.divide(b11).rename('SI_38'));
  var si_39 = (b7.divide(b12).rename('SI_39'));
    
  var si_40 = (b8.divide(b8a).rename('SI_40'));
  var si_41 = (b8.divide(b11).rename('SI_41'));
  var si_42 = (b8.divide(b12).rename('SI_42'));
    
  var si_43 = (b8a.divide(b11).rename('SI_43'));
  var si_44 = (b8a.divide(b12).rename('SI_44'));
    
  var si_45 = (b11.divide(b12).rename('SI_45'));
    

  var nd_1 = image.normalizedDifference(['B3', 'B2']).rename('ND_1');
  var nd_2 = image.normalizedDifference(['B4', 'B2']).rename('ND_2');
  var nd_3 = image.normalizedDifference(['B8A', 'B2']).rename('ND_3');
  var nd_4 = image.normalizedDifference(['B4', 'B3']).rename('ND_4');
  var nd_5 = image.normalizedDifference(['B8A', 'B3']).rename('ND_5');
    
  var nd_6 = image.normalizedDifference(['B5', 'B2']).rename('ND_6');
  var nd_7 = image.normalizedDifference(['B6', 'B2']).rename('ND_7');
  var nd_8 = image.normalizedDifference(['B7', 'B2']).rename('ND_8');
  var nd_9 = image.normalizedDifference(['B8', 'B2']).rename('ND_9');
  var nd_10 = image.normalizedDifference(['B11', 'B2']).rename('ND_10');
  var nd_11 = image.normalizedDifference(['B12', 'B2']).rename('ND_11');
  
  var nd_12 = image.normalizedDifference(['B5', 'B3']).rename('ND_12');
  var nd_13 = image.normalizedDifference(['B6', 'B3']).rename('ND_13');
  var nd_14 = image.normalizedDifference(['B7', 'B3']).rename('ND_14');
  var nd_15 = image.normalizedDifference(['B8', 'B3']).rename('ND_15');
  var nd_16 = image.normalizedDifference(['B11', 'B3']).rename('ND_16');
  var nd_17 = image.normalizedDifference(['B12', 'B3']).rename('ND_17');
    
  var nd_18 = image.normalizedDifference(['B5', 'B4']).rename('ND_18');
  var nd_19 = image.normalizedDifference(['B6', 'B4']).rename('ND_19');
  var nd_20 = image.normalizedDifference(['B7', 'B4']).rename('ND_20');
  var nd_21 = image.normalizedDifference(['B8', 'B4']).rename('ND_21');
  var nd_22 = image.normalizedDifference(['B11', 'B4']).rename('ND_22');
  var nd_23 = image.normalizedDifference(['B12', 'B4']).rename('ND_23');
  var nd_24 = image.normalizedDifference(['B6', 'B5']).rename('ND_24');
  var nd_25 = image.normalizedDifference(['B7', 'B5']).rename('ND_25');
  var nd_26 = image.normalizedDifference(['B8A', 'B5']).rename('ND_26');
  var nd_27 = image.normalizedDifference(['B8', 'B5']).rename('ND_27');
  var nd_28 = image.normalizedDifference(['B11', 'B5']).rename('ND_28');
  var nd_29 = image.normalizedDifference(['B12', 'B5']).rename('ND_29');
  
  var nd_30 = image.normalizedDifference(['B7', 'B6']).rename('ND_30');
  var nd_31 = image.normalizedDifference(['B8A', 'B6']).rename('ND_31');
  var nd_32 = image.normalizedDifference(['B8', 'B6']).rename('ND_32');
  var nd_33 = image.normalizedDifference(['B11', 'B6']).rename('ND_33');
  var nd_34 = image.normalizedDifference(['B12', 'B6']).rename('ND_34');
  
  var nd_35 = image.normalizedDifference(['B8A', 'B7']).rename('ND_35');
  var nd_36 = image.normalizedDifference(['B8', 'B7']).rename('ND_36');
  var nd_37 = image.normalizedDifference(['B11', 'B7']).rename('ND_37');
  var nd_38 = image.normalizedDifference(['B12', 'B7']).rename('ND_38');
    
  var nd_39 = image.normalizedDifference(['B8', 'B8A']).rename('ND_39');
  var nd_40 = image.normalizedDifference(['B11', 'B8A']).rename('ND_40');
  var nd_41 = image.normalizedDifference(['B12', 'B8A']).rename('ND_41');
    
  var nd_42 = image.normalizedDifference(['B11', 'B8']).rename('ND_42');
  var nd_43 = image.normalizedDifference(['B12', 'B8']).rename('ND_43');
    
  var nd_44 = image.normalizedDifference(['B12', 'B11']).rename('ND_44');
      

  
  var ndvi = image.normalizedDifference(['B8A', 'B4']).rename('NDVI');
    
  var evi = image.expression('2.5 * ((nir - red) / (nir + 6 * red - 7.5 * blue + 1))',{
       'nir': image.select('B8A'), 'red': image.select('B4'), 'blue': image.select('B2')});
    
    
  var savi = image.expression('1.5 * ((nir - red) / (nir + red + 0.5))',{
    'nir': image.select('B8A'), 'red': image.select('B4')});
        
  var wri = (b3.add(b4).divide(b8a.add(b11)).rename('WRI'));
    
  var awei = image.expression('4 * (green - swir1) - (0.25 * nir + 2.75 * swir1)',{
    'green': image.select('B3'), 'swir1': image.select('B11'), 'nir': image.select('B8A')});
  
  var ccci = image.expression('((nir - vre1) / (nir + vre2)) / ((nir - red) / (nir + red))', {
      'nir': image.select('B8A'), 'red': image.select('B4'),'vre1': image.select('B5'), 
      'vre2': image.select('B6')});
      
  var s2rep = image.expression('705.0 + 35.0 * ((((red + vre3) / 2.0) - vre1) / (vre2 - vre1))',{
    'red': image.select('B4'),'vre1': image.select('B5'), 'vre2': image.select('B6'),
    'vre3': image.select('B7')});
    
  var ireci = image.expression('(nir - red)/(vre1/vre2)', { 
    'nir': image.select('B8A'), 'red': image.select('B4'),'vre1': image.select('B5'), 
    'vre2': image.select('B6')});

  
  var glcm_b = b2.multiply(255).int().glcmTexture({size:3});
  var glcm_g = b3.multiply(255).int().glcmTexture({size:3});
  var glcm_r = b4.multiply(255).int().glcmTexture({size:3});
  var glcm_nir = b8.multiply(255).int().glcmTexture({size:3});
  var glcm_swir1 = b11.multiply(255).int().glcmTexture({size:3});
  var glcm_swir2 = b12.multiply(255).int().glcmTexture({size:3});
  var glcm_vre1 = b5.multiply(255).int().glcmTexture({size:3});
  var glcm_vre2 = b6.multiply(255).int().glcmTexture({size:3});
  var glcm_vre3 = b7.multiply(255).int().glcmTexture({size:3});
  var glcm_nnir = b8a.multiply(255).int().glcmTexture({size:3});
  
 
  var image = image
               .addBands(si_1)
               .addBands(si_2)
               .addBands(si_3)
               .addBands(si_4)
               .addBands(si_5)
               .addBands(si_6)
              
               .addBands(si_7)
               .addBands(si_8)
               .addBands(si_9)
               .addBands(si_10)
              
               .addBands(si_11)
               .addBands(si_12)
             
               
               .addBands(si_13)
               .addBands(si_14)
               .addBands(si_15)
               .addBands(si_16)
              
               .addBands(si_17)
               .addBands(si_18)
               
               
               .addBands(si_19)
               .addBands(si_20)
               .addBands(si_21)
               .addBands(si_22)
             
               .addBands(si_23)
               .addBands(si_24)
               
               
               .addBands(si_25)
               .addBands(si_26)
               .addBands(si_27)
               .addBands(si_28)
               
               .addBands(si_31)
               .addBands(si_32)
               .addBands(si_33)
               .addBands(si_34)
               .addBands(si_35)
               .addBands(si_36)
               .addBands(si_37)
               .addBands(si_38)
               .addBands(si_39)
               .addBands(si_40)
               
               .addBands(si_41)
               .addBands(si_42)
               
               .addBands(si_43)
               .addBands(si_44)
               
               .addBands(si_45)
               .addBands(nd_1)
               .addBands(nd_2)
               .addBands(nd_3)
               .addBands(nd_4)
               .addBands(nd_5)
              
               .addBands(nd_6)
               .addBands(nd_7)
               .addBands(nd_8)
               .addBands(nd_9)
             
               .addBands(nd_10)
               .addBands(nd_11)
               
               .addBands(nd_12)
               .addBands(nd_13)
               .addBands(nd_14)
               .addBands(nd_15)
              
               .addBands(nd_16)
               .addBands(nd_17)
               
               
               .addBands(nd_18)
               .addBands(nd_19)
               .addBands(nd_20)
               .addBands(nd_21)
              
               .addBands(nd_22)
               .addBands(nd_23)
               
               .addBands(nd_24)
               .addBands(nd_25)
               .addBands(nd_26)
               .addBands(nd_27)
               .addBands(nd_28)
               .addBands(nd_29)
               .addBands(nd_30)
               .addBands(nd_31)
               .addBands(nd_32)
               .addBands(nd_33)
               .addBands(nd_34)
               .addBands(nd_35)
               .addBands(nd_36)
               .addBands(nd_37)
               .addBands(nd_38)
               .addBands(nd_39)
               
               .addBands(nd_40)
               .addBands(nd_41)
               
               .addBands(nd_42)
               .addBands(nd_43)
               
               .addBands(nd_44)
               .addBands(ndvi)
               .addBands(evi.rename('EVI'))
               .addBands(savi.rename('SAVI'))
               .addBands(wri)
               .addBands(awei.rename('AWEI'))
               
               .addBands(ccci.rename('CCC1'))
               .addBands(s2rep.rename('S2REP'))
               .addBands(ireci.rename('IRECI'))
               
               .addBands(glcm_b)
               .addBands(glcm_g)
               .addBands(glcm_r)
               .addBands(glcm_nir)
               .addBands(glcm_swir1)
               .addBands(glcm_swir2)
               
               .addBands(glcm_vre1)
               .addBands(glcm_vre2)
               .addBands(glcm_vre3)
               .addBands(glcm_nnir);
  //print(image,i);
  
  var image_indices = image_indices.add(image);
}

//print(image_indices);

//Monthly NDVI

var Jan_composite = ee.Image(image_indices.get(0));
var Jan_ndvi = Jan_composite.select ("NDVI");
var Jan_ndvi_mask = Jan_ndvi.gte(0.5);

var Feb_composite = ee.Image(image_indices.get(1));
var Feb_ndvi = Feb_composite.select ("NDVI");
var Feb_ndvi_mask = Feb_ndvi.gte(0.5);

var Mar_composite = ee.Image(image_indices.get(2));
var Mar_ndvi = Mar_composite.select ("NDVI");
var Mar_ndvi_mask = Mar_ndvi.gte(0.5);

var Apr_composite = ee.Image(image_indices.get(3));
var Apr_ndvi = Apr_composite.select ("NDVI");
var Apr_ndvi_mask = Apr_ndvi.gte(0.5);

var Nov_composite = ee.Image(image_indices.get(4));
var Nov_ndvi = Nov_composite.select ("NDVI");
var Nov_ndvi_mask = Nov_ndvi.gte(0.5);

var Dec_composite = ee.Image(image_indices.get(5));
var Dec_ndvi = Dec_composite.select ("NDVI");
var Dec_ndvi_mask = Dec_ndvi.gte(0.5);

var six_month_ndvi = Jan_ndvi_mask.add(Feb_ndvi_mask).add(Mar_ndvi_mask)
                                  .add(Apr_ndvi_mask).add(Nov_ndvi_mask).add(Dec_ndvi_mask);

var nf_mask = six_month_ndvi.gte(6);                  
//print(nf_mask,{},"nf_mask");
Map.addLayer(nf_mask.updateMask(nf_mask), {},"nf_mask");

var forest1 = tc_gte25.unmask(0);
Map.addLayer(forest1.updateMask(forest1), {},"forest1");

var forest2 = nf_mask.eq(1).unmask(0);
Map.addLayer(forest2.updateMask(forest2), {},"forest2");

var forest = forest1.add(forest2);
forest= forest.gte(1);
Map.addLayer(forest.updateMask(forest), {},"forest");

var area_mask = ee.Image.constant(1).clip(table).mask();

//---------------------------------------------------Build-Classification-Composite---------------------------------------

// convert list of images to single image
var class_composite = ee.Image(image_indices.get(0)).addBands(image_indices.get(1))
                                                    .addBands(image_indices.get(2))
                                                    .addBands(image_indices.get(3))
                                                    .addBands(image_indices.get(4))
                                                    .addBands(image_indices.get(5))
                                                    .addBands(gedi_roi)
                                                    .addBands(pal_variables)
                                                    .addBands(s1_VV_variables)
                                                    .addBands(s1_VH_variables)
                                                    .addBands(elevation)
                                                    .addBands(slope)
                                                    .addBands(aspect)
                                                    .updateMask(forest)
                                                    .updateMask(area_mask);
                                                    
print(class_composite);

var run1 = ['B7_savg_3','SI_35_1','ND_38_3','B6_savg_5','SI_38','SI_17_1','SI_9_1',
'ND_38','SI_39_1','B8A_savg_3','SI_2_3','B4_prom_4','ND_11_3','ND_25_3','SI_39_3','ND_43_3',
'B4_sent_4','ND_43_4','SI_43_3','ND_37','ND_41_1','B4_contrast','B4_inertia_5','SI_44_1',
'B11_dvar','SI_43_5','B8A_3','ND_17','ND_38_5','ND_41_5','B3_diss_4','B6_savg','ND_33_4',
'ND_37_3','ND_34','ND_34_1','SI_44','ND_33_3','ND_41_3','B3_idm_5','ND_24_3','SI_42_1','ND_43_2'];

var run2 = ['ND_10_1','ND_11','ND_6_1','SI_9','ND_10','SI_3_3','SI_3_1','ND_11_1','B2_savg_1','SI_17_3',
'B3_dvar_3','SI_24','SI_1_1','B7_savg_3','SI_8_1','B6_savg_3','B4_savg_1','SI_9_2','ND_29_4','SI_35_4',
'SI_1_3','SI_9_1','SI_9_3','B8A_savg_3','B6_contrast_1','ND_6_3','B12_4'];

class_composite =class_composite.select(run2);
var bands = class_composite.bandNames();
print(bands.size());
Map.addLayer(class_composite, {}, 'class_composite');


//----------------------------------------------------Train--Classifier----------------------------------------------------

//Training

var training = class_composite.sampleRegions({
      // Get the sample from the polygons FeatureCollection.
      collection: training,
      // Keep this list of properties from the polygons.
      properties: ['Class'],
      // Set the scale to get Sentinel pixels in the polygons.
      scale: 20,
      tileScale:16
      });
//print(training.limit(10));
print(training.size());

var mdf_size = (training.filter(ee.Filter.eq('Class', 0))).size();
print(mdf_size,'mdf_size');

var up_evg_size = (training.filter(ee.Filter.eq('Class', 1))).size();
print(up_evg_size,'up_evg_size');

var pine = training.filter(ee.Filter.eq('Class', 2));
var pine_size = (training.filter(ee.Filter.eq('Class', 2))).size();
print(pine_size,'pine_size');

var bamboo_size = (training.filter(ee.Filter.eq('Class', 3))).size();
print(bamboo_size);

var low_evg_size = (training.filter(ee.Filter.eq('Class', 4))).size();
print(low_evg_size);

training = training.filter(ee.Filter.eq('Class', 0)).limit(100)
           .merge(training.filter(ee.Filter.eq('Class', 1)).limit(100))
           .merge(training.filter(ee.Filter.eq('Class', 2)).limit(20))
           .merge(training.filter(ee.Filter.eq('Class', 3)).limit(15))
           .merge(training.filter(ee.Filter.eq('Class', 4)).limit(10));
           

print(training, 'train for IV');


var classifier = ee.Classifier.smileRandomForest(500)
                .train({
                  features: training, 
                  classProperty:'Class', 
                  inputProperties:bands,
                });
                
var dict = classifier.explain();
//print('Explain:',dict);    


var variable_importance = ee.FeatureCollection(ee.Feature(null, ee.Dictionary(dict).get('importance')));

/*
var chart =ui.Chart.feature.byProperty(variable_importance)
.setChartType('ColumnChart')
.setOptions({
title: 'Random Forest Variable Importance',
legend: {position: 'none'},
hAxis: {title: 'Bands'},
vAxis: {title: 'Importance'}
});
 
print(chart);
/**/

//----------------------------------------------Export--Important--Variables-------------------------------------------


// Export the FeatureCollection to a KML file.
Export.table.toDrive({
  collection: variable_importance,
  description:'RF_IV_Kayah_Run2',
  fileFormat: 'CSV'
});

//----------------------------------------------Selected--Bands-------------------------------------


//----------------------------------------------Generate--Classified--Map-----------------------------------------

var classified = class_composite.classify(classifier).unmask(100);

// Define a palette from the IGBP classification.

//var Palette = ['152106', '225129', '369b47', '30eb5b', '387242', '6a2325', 'c3aa69'];

var Palette = ['#008000', '#00FF00', '#808000', '#FFFF00', '#FF00FF', '6a2325', 'c3aa69']; //green, lime, olive,yellow,fuchsia

Map.addLayer(classified, {palette: Palette, min: 0, max: 4}, 'classification');


//---------------------------------------------Export---Maps--------------------------------------------------------

// Export the image, specifying scale and region.
Export.image.toDrive({
  image: classified,
  description: 'FT_Kayah_Run3',
  scale: 20,
  region: roi,
  maxPixels:653997022
});



