var table = ee.FeatureCollection("users/pawlokdass/Sumalika/Chin"),
    tcc = ee.Image("users/pawlokdass/Sumalika/tcc_myanmar_calib_2018_wgs84_bd"),
    geometry = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.24516669901354, 20.810667670340074],
              [93.24519083889467, 20.810136138662024],
              [93.24544296654207, 20.810136138662024],
              [93.24544296654207, 20.81068020644195]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry2 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.24581311138613, 20.81062755480713],
              [93.24582115801317, 20.81006844345528],
              [93.2464380660866, 20.810065936224813],
              [93.24644879492266, 20.81065764145785]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry3 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.25194732340319, 20.807796875560893],
              [93.25234965475542, 20.80781442643741],
              [93.25234965475542, 20.80811529828858],
              [93.2519500056122, 20.808112791025646]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry4 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.25911418589098, 20.805886325072542],
              [93.2591168681, 20.8055503464995],
              [93.25950847061617, 20.8055503464995],
              [93.25950578840715, 20.805911398070354]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry5 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.25408504398806, 20.80971492354837],
              [93.25408236177904, 20.809090620411535],
              [93.254795829377, 20.809088113164808],
              [93.25475023182375, 20.80973247420161]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry6 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.263440589032, 20.803221041628095],
              [93.26345131786806, 20.80235851272001],
              [93.26423452290041, 20.802368542154262],
              [93.26420233639223, 20.803241100381225]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry7 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.27124581726534, 20.80001912895913],
              [93.27125118168337, 20.799307026377203],
              [93.27184663208467, 20.79930201155837],
              [93.27182517441256, 20.80004420293243]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry8 = /* color: #00ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.28297779949648, 20.795420491777033],
              [93.28297779949648, 20.794412483870833],
              [93.28365371616823, 20.794402453907573],
              [93.28365908058626, 20.795410461880785]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry9 = /* color: #0000ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.61998931559069, 20.736844571420487],
              [93.62136260660631, 20.736859622097036],
              [93.62136260660631, 20.73813390728171],
              [93.61998395117266, 20.738138924131317]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry10 = /* color: #999900 */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.62420038374407, 20.751322630214574],
              [93.62598137052996, 20.751287515324357],
              [93.62594918402178, 20.752596793571804],
              [93.62411455305559, 20.75256167897748]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry11 = /* color: #009999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.50652382763369, 20.862024339284122],
              [93.50722656639559, 20.86201932655342],
              [93.50723461302263, 20.86263589117595],
              [93.50652382763369, 20.86262586575516]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry12 = /* color: #ff00ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.5554795065735, 20.869693621489475],
              [93.55548755320055, 20.869082098311857],
              [93.55610446127397, 20.869089617054563],
              [93.55610446127397, 20.869698633964255]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry13 = /* color: #ff9999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.62413064630968, 20.919982877924888],
              [93.62468318136675, 20.919982877924888],
              [93.62468854578478, 20.92044387041008],
              [93.62413064630968, 20.92045389197009]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry14 = /* color: #99ff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.70996669920427, 20.90193290577049],
              [93.71193007620317, 20.9019529513642],
              [93.71191398294908, 20.903205795656373],
              [93.70995597036821, 20.903200784300044]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry15 = /* color: #9999ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.8278497854088, 20.84773487176],
              [93.82786587866289, 20.847263629572737],
              [93.82864371927721, 20.847268642795264],
              [93.82861689718706, 20.847619567956958]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry16 = /* color: #ffff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[92.93801621588214, 21.178901419577475],
              [92.93886111172183, 21.178928931062323],
              [92.93884233625873, 21.179609213423294],
              [92.93798671158298, 21.17958920516324]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry17 = /* color: #99ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[92.70446018370136, 21.26236268790655],
              [92.70601586493, 21.262377685686356],
              [92.70599440725788, 21.263792469378025],
              [92.70448164137348, 21.263797468589583]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry18 = /* color: #ff99ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[92.69288913401111, 21.269628933272212],
              [92.6932834187363, 21.269631432778933],
              [92.69327268990024, 21.270081343293096],
              [92.6928864518021, 21.270078843794032]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry19 = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[92.69624725969776, 21.273383144482505],
              [92.69698486717685, 21.273378145596503],
              [92.69698486717685, 21.273958015240467],
              [92.69626335295185, 21.27396801297291]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry20 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[92.69559280069812, 21.280646346456315],
              [92.69620434435352, 21.28065384441486],
              [92.69619629772647, 21.281176201252247],
              [92.69556866081699, 21.281168703320347]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry21 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[92.68338070305332, 21.296366226396483],
              [92.68338070305332, 21.296173799235945],
              [92.68396006020053, 21.296183795458283],
              [92.68396006020053, 21.296363727344062],
              [92.6834128895615, 21.296361228291616]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry22 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Polygon(
            [[[92.66413853558048, 21.36101497183971],
              [92.66415731104358, 21.36047541329353],
              [92.66472862156375, 21.36047541329353],
              [92.66472862156375, 21.36101497183971],
              [92.6641599932526, 21.361009975936373]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry23 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[92.63808623941883, 21.986352604835954],
              [92.63809696825489, 21.98542738568352],
              [92.63867096098407, 21.985447282933052],
              [92.63865486772998, 21.98617850491856],
              [92.63828472288593, 21.986168556345394],
              [92.63827399404987, 21.986342656275]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry24 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Polygon(
            [[[92.66540990265354, 21.94774196669383],
              [92.66656325252994, 21.947756893590757],
              [92.66655788811191, 21.948562943698303],
              [92.66542599590763, 21.948548016885987]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry25 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[92.6557861367081, 21.892678429183647],
              [92.65579418333515, 21.892118452902427],
              [92.65620187910541, 21.892123430479067],
              [92.65618846806034, 21.89268340674073]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry26 = /* color: #00ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.92929897697908, 20.656588163606287],
              [93.92928824814302, 20.65567460310887],
              [93.9302377501343, 20.65567460310887],
              [93.93025384338839, 20.656578124509778]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry27 = /* color: #0000ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.03746978434069, 20.87808677623376],
              [94.03772727640612, 20.8781018128176],
              [94.03773800524218, 20.87770584894098],
              [94.03827444704515, 20.877735922183433],
              [94.03829054029924, 20.87832234920771],
              [94.0375073352669, 20.878327361394646]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry28 = /* color: #999900 */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.87765840681536, 20.860362609900488],
              [93.87832359465105, 20.860362609900488],
              [93.8782967725609, 20.86104434725415],
              [93.87766377123339, 20.86103933449077]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry30 = /* color: #ff00ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.87572721632463, 20.85758299435824],
              [93.87612686546785, 20.857580487918867],
              [93.8761349120949, 20.858229654318755],
              [93.87577817829592, 20.858224641461547]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry29 = /* color: #ff9999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.83759693296892, 20.870437972163607],
              [93.83827016743166, 20.870430453488357],
              [93.83827016743166, 20.87083646141319],
              [93.83759693296892, 20.87082643653936]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry31 = /* color: #99ff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.09520701559526, 21.535901729792045],
              [94.09522310884935, 21.535218109710698],
              [94.0961511531685, 21.535053441618814],
              [94.09614578875048, 21.535931669284086]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry32 = /* color: #9999ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.08418850096209, 21.54909446776236],
              [94.08518628271563, 21.549084488837412],
              [94.08515409620745, 21.549688212561335],
              [94.0842260518883, 21.549683223119374]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry33 = /* color: #ffff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.10289422663195, 21.562380797376616],
              [94.10353795679552, 21.56273002732454],
              [94.10335556658251, 21.563109190315576],
              [94.10264746340258, 21.562894664008244]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry34 = /* color: #99ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.10338775309069, 21.578130231354635],
              [94.10338775309069, 21.577042742306134],
              [94.10473958643419, 21.577042742306134],
              [94.10475031527025, 21.578190092900098]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry35 = /* color: #ff99ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.10236851366503, 21.60867137011977],
              [94.10236851366503, 21.60806789215202],
              [94.10306052359087, 21.608057917288427],
              [94.10302297266466, 21.608661395297784]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry36 = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.95977691801531, 21.857751613065467],
              [93.95977691801531, 21.857470311969397],
              [93.96025971563799, 21.857462843791147],
              [93.96025166901094, 21.857739166126024]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry37 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.85519222410662, 22.02708113706444],
              [93.85519222410662, 22.026081590403976],
              [93.8559647003029, 22.026071644630612],
              [93.85595933588488, 22.02708113706444]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry38 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.01179159049296, 22.029818772773464],
              [94.01178890828395, 22.02878940869053],
              [94.01207322243953, 22.028794381481852],
              [94.01206249360347, 22.02980634088474]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry39 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.0109171903541, 22.029338901076493],
              [94.01090914372706, 22.028625306478517],
              [94.01139462355876, 22.028615360883798],
              [94.01139998797679, 22.029341387462544]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry40 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.01653910044932, 22.111427969485984],
              [94.0165364182403, 22.11060545124439],
              [94.01721501712107, 22.11061042115753],
              [94.01722574595713, 22.111425484543826]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry41 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.02339482669139, 22.41227275754306],
              [94.02338946227336, 22.411533832777465],
              [94.02468228701854, 22.411528873537566],
              [94.02464473609233, 22.41229259439535]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry42 = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.57455805929644, 22.655244150929864],
              [93.57542173059923, 22.655254051920576],
              [93.5754163661812, 22.655516427913973],
              [93.57513741644365, 22.655516427913973],
              [93.57514278086168, 22.655427319142262],
              [93.57453660162432, 22.655427319142262]]]),
        {
          "Class": "Pine",
          "system:index": "0"
        }),
    geometry43 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.57327059896929, 22.65325898786865],
              [93.57356564196093, 22.65326393843568],
              [93.57356564196093, 22.653625329346664],
              [93.57327059896929, 22.653630279900483]]]),
        {
          "Class": "Pine",
          "system:index": "0"
        }),
    geometry44 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.57373730333788, 22.649204413528683],
              [93.57374803217394, 22.64865488325086],
              [93.57403234632952, 22.64865488325086],
              [93.5740108886574, 22.649209364241912]]]),
        {
          "Class": "Pine",
          "system:index": "0"
        }),
    geometry45 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.59391556175692, 22.61941769323968],
              [93.59457270296556, 22.61941521734635],
              [93.59457002075655, 22.619704896562236],
              [93.59392629059298, 22.619704896562236]]]),
        {
          "Class": "Pine",
          "system:index": "0"
        }),
    geometry46 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.00107757242662, 22.29651740317483],
              [94.00184468420488, 22.296514921507104],
              [94.00185541304094, 22.297150227006874],
              [94.00108293684465, 22.297150227006874]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry47 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.00520012768251, 22.303716535703863],
              [94.00588677319033, 22.3037041280042],
              [94.0058814087723, 22.30434436386804],
              [94.00518939884645, 22.304341882339354]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry48 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.00176958235247, 22.17772790772797],
              [94.00313750895006, 22.17772790772797],
              [94.00314287336809, 22.178994625836957],
              [94.0017749467705, 22.178989658337255]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        });
//----------------------------------------------------ROI--------------------------------------------

var state = ee.FeatureCollection(table);
//print(state);

var roi = state;
Map.centerObject(state,8);
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
                                 geometry26,geometry27,geometry28,geometry29,geometry30,
                                 geometry31,geometry32,geometry33,geometry34,geometry35,
                                 geometry36,geometry37,geometry38,geometry39,geometry40,
                                 geometry41,geometry42,geometry43,geometry44,geometry45,
                                 geometry46,geometry47,geometry48]);
                                 
print(train, 'Train');

var training = train.remap(['MDF','Bamboo', 'Upland_Evergreen', 'DDF', 'Pine'], [0, 1, 2, 3, 4], 'Class');
print(training, 'Training');

var mdf = training.filter(ee.Filter.eq('Class', 0));//.limit(2);
var mdf_size = mdf.size();
print(mdf_size,'mdf_size');

var bamboo = training.filter(ee.Filter.eq('Class', 1));//.limit(2);
var bamboo_size = bamboo.size();
print(bamboo_size,'bamboo_size');

var up_evg = training.filter(ee.Filter.eq('Class', 2));//.limit(2);
var up_evg_size = up_evg.size();
print(up_evg_size,'up_evg_size');

var ddf = training.filter(ee.Filter.eq('Class', 3));//.limit(2);
var ddf_size = ddf.size();
print(ddf_size,'ddf_size');
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

Map.addLayer(pal_HH_gn, {min:-25, max:0}, "pal_HH");
Map.addLayer(pal_HV_gn, {min:-25, max:0}, "pal_HH");
Map.addLayer(pal_HH_HV, {min:-25, max:0}, "pal_HH");


var pal_HH_urf = toDB(pal_HH_gn);
//print(pal_HH_urf,'pal_HH_urf');
Map.addLayer(pal_HH_urf.clip(roi),{min:-25.0, max:0.0}, "pal_HH_urf");

var pal_HH_rf = toDB(RefinedLee(pal_HH_gn)).rename('HH');
//print(pal_HH_rf,'pal_HH_rf');
//Map.addLayer(pal_HH_rf.clip(roi),{}, "pal_HH_rf");

var pal_HV_rf = toDB(RefinedLee(pal_HV_gn)).rename('HV');
//print(pal_HV_rf, 'pal_HV_rf');
//Map.addLayer(pal_HV_rf.clip(roi),{min:-25.0, max:0.0}, "pal_HV_rf");

//var pal_HH_HV = (pal_HH_rf.divide(pal_HV_rf)).rename('HH_HV');
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
                            .filterDate('2018-05-01', '2020-04-30')
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
                                         //  .addBands(ee.Image(s1_VV_mon_composites.get(5)))
                                         //  .addBands(ee.Image(s1_VV_mon_composites.get(6)))
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
                                           //.addBands(ee.Image(s1_VH_mon_composites.get(5)))
                                          // .addBands(ee.Image(s1_VH_mon_composites.get(6)))
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

//Monthly water NDVI

var Jan_composite = ee.Image(image_indices.get(0));
var Jan_ndvi = Jan_composite.select ("NDVI");
var Jan_ndvi_mask = Jan_ndvi.lte(0);

var Feb_composite = ee.Image(image_indices.get(1));
var Feb_ndvi = Feb_composite.select ("NDVI");
var Feb_ndvi_mask = Feb_ndvi.lte(0);

var Mar_composite = ee.Image(image_indices.get(2));
var Mar_ndvi = Mar_composite.select ("NDVI");
var Mar_ndvi_mask = Mar_ndvi.lte(0);

var Apr_composite = ee.Image(image_indices.get(3));
var Apr_ndvi = Apr_composite.select ("NDVI");
Map.addLayer(Apr_ndvi,{}, "Apr_ndvi");
var Apr_ndvi_mask = Apr_ndvi.lte(0);

var Nov_composite = ee.Image(image_indices.get(4));
var Nov_ndvi = Nov_composite.select ("NDVI");
var Nov_ndvi_mask = Nov_ndvi.lte(0);

var Dec_composite = ee.Image(image_indices.get(5));
var Dec_ndvi = Dec_composite.select ("NDVI");
Map.addLayer(Dec_ndvi,{}, "Dec_ndvi");

var Dec_ndvi_mask = Dec_ndvi.lte(0);
Map.addLayer(Dec_ndvi_mask,{}, "Dec_ndvi_mask");

var six_month_water_ndvi = Jan_ndvi_mask.add(Feb_ndvi_mask).add(Mar_ndvi_mask)
                                  .add(Apr_ndvi_mask).add(Nov_ndvi_mask).add(Dec_ndvi_mask);

var water_mask = six_month_water_ndvi.lt(1);                  
//print(water_mask,{},"water_mask");
Map.addLayer(water_mask.updateMask(water_mask), {}, "water_mask");

var area_mask1 = ee.Image.constant(1).clip(table).mask();


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
                                                    .updateMask(forest)
                                                    .updateMask(area_mask1);
                                                    
print(class_composite);

var sel_bands = (['B6_savg_3','B7_savg_4', 'B8_3', 'B6_3','SI_44_3','B7_savg_3','B8A_3','SI_42_3',
'B8A_savg_3','B5_savg_4','ND_41_3','B8_savg_3','ND_33_2','B6_savg_4','IRECI_3']);
class_composite = class_composite.select(sel_bands);

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

print(training.filter(ee.Filter.eq('Class', 0)).size(), 'MDF');
print(training.filter(ee.Filter.eq('Class', 1)).size(), 'Bamboo');
print(training.filter(ee.Filter.eq('Class', 2)).size(),'Up_Evg');
print(training.filter(ee.Filter.eq('Class', 3)).size(), 'DDF');


//'MDF','Bamboo', 'Upland_Evergreen', 'DDF'
training = training.filter(ee.Filter.eq('Class', 0))
           .merge(training.filter(ee.Filter.eq('Class', 1)))
           .merge(training.filter(ee.Filter.eq('Class', 2)))
           .merge(training.filter(ee.Filter.eq('Class', 3)))
           .merge(training.filter(ee.Filter.eq('Class', 4)));
           
/**/
print(training.size(), 'train for IV');
print(training.filter(ee.Filter.eq('Class', 1)));

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
  description:'RF_IV_Chin',
  fileFormat: 'CSV'
});


//----------------------------------------------Generate--Classified--Map-----------------------------------------

var classified = class_composite.classify(classifier).unmask(100);

// Define a palette from the IGBP classification.

//var Palette = ['152106', '225129', '369b47', '30eb5b', '387242', '6a2325', 'c3aa69'];

var Palette = ['#008000', '#00FF00', '#808000', '#FFFF00', '#FF00FF', '6a2325', 'c3aa69']; //green, lime, olive,yellow,fuchsia

Map.addLayer(classified, {palette: Palette, min: 0, max: 7}, 'classification');

//Map.addLayer(image, {palette: Palette, min: 0, max: 7}, 'classification');
//---------------------------------------------Export---Maps--------------------------------------------------------


// Export the image, specifying scale and region.
Export.image.toDrive({
  image: classified,
  description: 'FT_Chin_Run6',
  scale: 20,
  region: roi,
  maxPixels:703470267 
});

/**/
