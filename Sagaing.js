var table = ee.FeatureCollection("users/pawlokdass/Sumalika/Sagaing"),
    tcc = ee.Image("users/pawlokdass/Sumalika/tcc_myanmar_calib_2018_wgs84_bd"),
    geometry = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.60491836624679, 23.537693849245287],
              [95.60521340923843, 23.537688931159906],
              [95.60521072702942, 23.537873359235764],
              [95.60492373066482, 23.537875818275012]]]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry2 = /* color: #00ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.58396494942245, 23.542558975132657],
              [95.58435923414764, 23.542554057229204],
              [95.58435923414764, 23.542915522643018],
              [95.58397567825851, 23.542925358422696]]]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry3 = /* color: #0000ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.58874464588699, 23.537189744537464],
              [95.59062219219742, 23.53715531780401],
              [95.59062755661544, 23.53847828150942],
              [95.5887821968132, 23.5385028717869]]]),
        {
          "Class": "Indaing",
          "system:index": "0"
        }),
    geometry4 = /* color: #999900 */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.59252656059799, 23.54024754023971],
              [95.59252656059799, 23.539337708979907],
              [95.59330976563034, 23.539337708979907],
              [95.59330976563034, 23.5400557384977],
              [95.59271967964706, 23.54006557449128],
              [95.592708950811, 23.540242622249824]]]),
        {
          "system:index": "0",
          "Class": "Lowland_Evergreen"
        }),
    geometry5 = /* color: #009999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.58091795998153, 23.54694075402032],
              [95.5815053637558, 23.54693091854098],
              [95.58151341038284, 23.547658742023927],
              [95.58093405323562, 23.547666118592662]]]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry6 = /* color: #ff00ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.57933545666275, 23.54659528236795],
              [95.57933545666275, 23.546039575172156],
              [95.5802098568016, 23.546039575172156],
              [95.5802098568016, 23.546590364615458]]]),
        {
          "Class": "Indaing",
          "system:index": "0"
        }),
    geometry7 = /* color: #ff9999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.73560357647476, 27.35571666619055],
              [96.73574841576156, 27.355807192023534],
              [96.73571622925338, 27.35598824346751],
              [96.73556602554855, 27.35597633219738]]]),
        {
          "Class": "Pine",
          "system:index": "0"
        }),
    geometry8 = /* color: #99ff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.73478013830719, 27.356502809113255],
              [96.73470235424575, 27.356300318287957],
              [96.73487938004074, 27.35622646860073],
              [96.73505908804474, 27.35634319872894],
              [96.73494911747513, 27.356495662384543]]]),
        {
          "Class": "Oak",
          "system:index": "0"
        }),
    geometry9 = /* color: #9999ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.73098749476013, 27.3564658843433],
              [96.73122352915344, 27.356180014739977],
              [96.73130935984192, 27.356244335465075],
              [96.73101699905929, 27.356515911448007]]]),
        {
          "Class": "Pine",
          "system:index": "0"
        }),
    geometry10 = /* color: #ffff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.73140055494842, 27.35642300394985],
              [96.73133618193206, 27.356315802893565],
              [96.73144615250168, 27.356253864458196],
              [96.73152661877212, 27.356287215927683],
              [96.73153466539917, 27.356408710481666],
              [96.7314515169197, 27.3565730852543],
              [96.73129326658783, 27.35652305817542]]]),
        {
          "Class": "Oak",
          "system:index": "0"
        }),
    geometry11 = /* color: #99ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.72732091503677, 27.353603581645338],
              [96.72750866966781, 27.353527347852996],
              [96.72765619116363, 27.353701256115063],
              [96.72757036047516, 27.353889457899204]]]),
        {
          "Class": "Pine",
          "system:index": "0"
        }),
    geometry12 = /* color: #ff99ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.72542995768127, 27.35552727637957],
              [96.72583497124252, 27.355174700774366],
              [96.72603613691864, 27.3555558635416],
              [96.72566599207458, 27.35577741379718]]]),
        {
          "Class": "Oak",
          "system:index": "0"
        }),
    geometry13 = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.71465015965042, 27.363732680051623],
              [96.7146287019783, 27.363458739675735],
              [96.71488887625274, 27.363318196089384],
              [96.71508735971985, 27.363361073812616],
              [96.71514636831817, 27.363587372632324]]]),
        {
          "Class": "Oak",
          "system:index": "0"
        }),
    geometry14 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.678373282724, 27.3532926903817],
              [96.6786254103714, 27.3532545733851],
              [96.67869514780578, 27.353306984252058],
              [96.67873806315002, 27.353440393619614],
              [96.6786093171173, 27.353573802826485],
              [96.67843229132232, 27.353559508990582],
              [96.6783571894699, 27.35343086438441]]]),
        {
          "Class": "Pine",
          "system:index": "0"
        }),
    geometry15 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.71445441799698, 23.13762333991401],
              [95.71444368916092, 23.136977125321582],
              [95.71567750530777, 23.136952460580787],
              [95.71567750530777, 23.137588809442033],
              [95.714459782415, 23.137588809442033]]]),
        {
          "Class": "Thorn",
          "system:index": "0"
        }),
    geometry16 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.89039934235153, 23.571963518522683],
              [94.8903939779335, 23.571422669072128],
              [94.89096797066269, 23.571417752248728],
              [94.89097333508072, 23.571948768112673]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry17 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.91781151848373, 23.57360572047687],
              [94.91863763886032, 23.57355655305192],
              [94.91864032106933, 23.574146560936125],
              [94.91777933197555, 23.574146560936125]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry18 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.66452247458038, 23.079942599316972],
              [94.66452247458038, 23.079483639488576],
              [94.66531104403076, 23.079486107018738],
              [94.66531372623977, 23.079945066838697]]]),
        {
          "Class": "Indaing",
          "system:index": "0"
        }),
    geometry19 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.66385192232666, 23.071278851383845],
              [94.6638411934906, 23.07055828668579],
              [94.66422206717071, 23.070548415909705],
              [94.66422743158874, 23.071264045298772]]]),
        {
          "Class": "Indaing",
          "system:index": "0"
        }),
    geometry20 = /* color: #00ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.75280201988754, 22.983983510876765],
              [94.75367105560836, 22.983978572318104],
              [94.7536764200264, 22.98460576782325],
              [94.75280470209655, 22.98460576782325]]]),
        {
          "Class": "Indaing",
          "system:index": "0"
        }),
    geometry21 = /* color: #0000ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.7241935785347, 22.983926717441282],
              [94.72567415791092, 22.98391190175854],
              [94.72567415791092, 22.984548974649382],
              [94.7241935785347, 22.98455885172481]]]),
        {
          "Class": "Indaing",
          "system:index": "0"
        }),
    geometry22 = /* color: #999900 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.17903996067581, 22.679790726311147],
              [94.1788414772087, 22.679785776701213],
              [94.17886293488083, 22.678959189337064],
              [94.17940474110183, 22.678959189337064],
              [94.17942083435592, 22.680206492906997],
              [94.17903996067581, 22.680216392096288]]]),
        {
          "Class": "Indaing",
          "system:index": "0"
        }),
    geometry23 = /* color: #009999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.18086922722397, 22.67757823286341],
              [94.18085313396988, 22.67711296124177],
              [94.18169534760055, 22.67710801153519],
              [94.18166316109237, 22.67758813224247]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry24 = /* color: #ff00ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.18470478611526, 22.67713770977204],
              [94.18506956654129, 22.677145134330242],
              [94.18504810886917, 22.677600506465282],
              [94.1846940572792, 22.677598031620803]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry25 = /* color: #ff9999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.19337100344238, 22.664433701982844],
              [94.19359899120865, 22.6644312269008],
              [94.19359899120865, 22.66464408379398],
              [94.19340050774154, 22.66465398410656]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry26 = /* color: #99ff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.1978583391243, 22.64916902224896],
              [94.19785029249725, 22.64864177013251],
              [94.19814533548889, 22.64863186866496],
              [94.1981480176979, 22.64916407153427]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry27 = /* color: #9999ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.20280701475677, 22.65672608009206],
              [94.20375651674804, 22.656735980975878],
              [94.2037672455841, 22.65770626412493],
              [94.20282310801086, 22.657711214531567]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry28 = /* color: #ffff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.34330112295685, 22.312660221485988],
              [94.3442667182022, 22.312665184247702],
              [94.34429354029236, 22.31380165203178],
              [94.34331721621093, 22.31380165203178]]]),
        {
          "Class": "Indaing",
          "system:index": "0"
        }),
    geometry29 = /* color: #99ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.31727296667633, 22.31152374441048],
              [94.31832439261017, 22.311498930397352],
              [94.31834048586425, 22.31223342331964],
              [94.31728369551239, 22.312238386096507]]]),
        {
          "Class": "Indaing",
          "system:index": "0"
        }),
    geometry30 = /* color: #ff99ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.34645540075836, 22.13875635202514],
              [94.34715545731125, 22.138748898644078],
              [94.34715545731125, 22.139469390322716],
              [94.34646076517639, 22.1394718747704]]]),
        {
          "Class": "Indaing",
          "system:index": "0"
        }),
    geometry31 = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.39094251947937, 22.12381650009095],
              [94.39151651220855, 22.1238214695384],
              [94.39153796988067, 22.124447618514782],
              [94.39097470598755, 22.124472465639005]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry32 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.41813207226333, 22.00303213350612],
              [94.4201437290245, 22.00311668630327],
              [94.4201437290245, 22.00390750120012],
              [94.41814280109939, 22.003927395857637]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry33 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.48940373020706, 22.000657174047845],
              [94.48961294251022, 22.00068701671712],
              [94.48957002716598, 22.000905862766626],
              [94.48936886148987, 22.000888454570507]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry34 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.46717626410064, 21.995728073662086],
              [94.46766979055938, 21.99571812575854],
              [94.46766979055938, 21.996267746384323],
              [94.46717089968261, 21.996265259417957]]]),
        {
          "Class": "Indaing",
          "system:index": "0"
        }),
    geometry35 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.46798897343216, 21.999428645378394],
              [94.46847445326385, 21.99941621082328],
              [94.46847445326385, 22.000052858643695],
              [94.46801043110428, 22.000052858643695]]]),
        {
          "Class": "Indaing",
          "system:index": "0"
        }),
    geometry36 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.52798462467727, 21.793692045613557],
              [94.52874905424652, 21.793694536116238],
              [94.52874368982849, 21.79410048747485],
              [94.52799803572235, 21.79409799697922]]]),
        {
          "Class": "Indaing",
          "system:index": "0"
        }),
    geometry37 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.63162506180343, 24.412898301379176],
              [96.63286424236831, 24.412937379683925],
              [96.63287497120437, 24.414207418002583],
              [96.63164651947555, 24.414222072216315]]]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry38 = /* color: #00ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.63027322845993, 24.40303552746105],
              [96.63120127277908, 24.403094149492674],
              [96.6311690862709, 24.404159111662956],
              [96.63019276218948, 24.40418842242138]]]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry39 = /* color: #0000ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.2676117475563, 24.51249885973499],
              [96.2677726800972, 24.512398800686608],
              [96.26840031700668, 24.512398800686608],
              [96.26839495258865, 24.51298695151161],
              [96.26761979418335, 24.512989391965736]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry40 = /* color: #999900 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.31779587822494, 24.502214325212357],
              [96.32251656609115, 24.502175274592926],
              [96.32251656609115, 24.504986888184927],
              [96.31801045494613, 24.50494783842682]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry41 = /* color: #009999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.28136075096664, 24.40278149834296],
              [96.2833348568016, 24.40281569460016],
              [96.28330803471145, 24.40441313801005],
              [96.28137684422073, 24.40441313801005]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry42 = /* color: #ff00ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.27615994768676, 24.40613757258802],
              [96.27699143248138, 24.40614001511322],
              [96.27700216131744, 24.40691185070802],
              [96.2761840875679, 24.40691185070802]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry43 = /* color: #ff9999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.3044062908226, 24.419538997126413],
              [96.30492663937149, 24.419507247665432],
              [96.30494005041656, 24.420105601548208],
              [96.30440092640457, 24.420098274783133]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry44 = /* color: #99ff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.30096233444748, 24.406970470940177],
              [96.30105889397201, 24.406657829387566],
              [96.30265749054489, 24.406481968174027],
              [96.30270040588913, 24.407375926800796],
              [96.3016328867012, 24.407507821800102]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry45 = /* color: #9999ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.18983305054245, 23.958037054648592],
              [96.1904553230339, 23.958027250175377],
              [96.19046068745193, 23.95854198401107],
              [96.18988669472274, 23.958537081793743]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry46 = /* color: #ffff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.20465493755874, 24.00135573782586],
              [96.20503849344787, 24.001358188119898],
              [96.20503581123886, 24.001806591140703],
              [96.20467639523086, 24.001801690569685]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry47 = /* color: #99ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.18575609283981, 23.998148262945897],
              [96.18600822048721, 23.998155614011058],
              [96.1860055382782, 23.998336940151777],
              [96.1857534106308, 23.998336940151777]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry48 = /* color: #ff99ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.24921179371414, 24.027233140368963],
              [96.24920911150512, 24.026711331686744],
              [96.24988502817688, 24.026721130930337],
              [96.24987429934082, 24.02706655378982],
              [96.24969459133682, 24.027044505549927],
              [96.24968386250076, 24.027250288975146]]]),
        {
          "Class": "Indaing",
          "system:index": "0"
        }),
    geometry50 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.26434749918518, 24.05884148406087],
              [96.26434749918518, 24.0583908308034],
              [96.26482225018081, 24.05838838159658],
              [96.26482493238983, 24.058839034862665]]]),
        {
          "Class": "Indaing",
          "system:index": "0"
        }),
    geometry51 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.15806496697006, 23.83021175796673],
              [96.15833318787155, 23.830201943798393],
              [96.15833855228958, 23.83056997460241],
              [96.158054238134, 23.830565067531893]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry52 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.13152987318573, 23.797217238871127],
              [96.13224870520172, 23.797229509698724],
              [96.1322460229927, 23.797833232985607],
              [96.13154060202179, 23.79784304960124]]]),
        {
          "Class": "Thorn",
          "system:index": "0"
        }),
    geometry53 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.13465196447906, 23.79807619400449],
              [96.13541371183929, 23.798086010601768],
              [96.13541907625732, 23.798505669441585],
              [96.13461441355285, 23.798500761158902]]]),
        {
          "Class": "Thorn",
          "system:index": "0"
        }),
    geometry54 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.12813687878189, 23.80561512223099],
              [96.12835950213012, 23.80525192869003],
              [96.12861431198654, 23.80526910678579],
              [96.12843192177353, 23.805620030244853],
              [96.12834072666702, 23.805867884704004],
              [96.12814224319992, 23.80586297669951]]]),
        {
          "Class": "Thorn",
          "system:index": "0"
        }),
    geometry55 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.1168823297554, 23.853275455041608],
              [96.11791766243515, 23.853275455041608],
              [96.117890840345, 23.85434991082441],
              [96.11681259232101, 23.854354816994764]]]),
        {
          "Class": "Thorn",
          "system:index": "0"
        }),
    geometry56 = /* color: #00ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.89827961283264, 24.998503696422045],
              [95.89896894054947, 24.998508558295004],
              [95.89895552950439, 24.999422586990452],
              [95.8982903416687, 24.999420156072077]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry57 = /* color: #0000ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.96976316528854, 25.058861165290544],
              [95.9703505690628, 25.058861165290544],
              [95.97034788685379, 25.05924992325208],
              [95.96976852970657, 25.059252352985453]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry58 = /* color: #999900 */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.95740622835693, 25.08056169074355],
              [95.95824039536056, 25.080595701088168],
              [95.95822698431549, 25.081171446202298],
              [95.95742232161102, 25.081171446202298]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry59 = /* color: #009999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.00679910736618, 25.097152758017348],
              [96.00748575287399, 25.09721834049579],
              [96.00746429520187, 25.0976944196557],
              [96.00686348038253, 25.09770413553763]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry60 = /* color: #ff00ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.04209161358413, 25.109165909704334],
              [96.0420862491661, 25.107966104900534],
              [96.04402816849289, 25.107990392563938],
              [96.04401743965683, 25.10919991209805],
              [96.0420862491661, 25.10919991209805]]]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry61 = /* color: #ff9999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.7760915811592, 24.971724013957616],
              [95.78009880142746, 24.971806683775124],
              [95.78009880142746, 24.973503834223088],
              [95.77613449650345, 24.973542737110733]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry62 = /* color: #99ff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.92852688389358, 25.665681449937374],
              [95.92918938952026, 25.66568870265669],
              [95.92916524963913, 25.66623507290997],
              [95.92853224831161, 25.66622782022391]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry63 = /* color: #9999ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.90530163603363, 25.666771770455696],
              [95.9085739310318, 25.666771770455696],
              [95.90857929544983, 25.668729970742074],
              [95.90536064463195, 25.668729970742074]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry64 = /* color: #ffff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.74083394365844, 25.500977224663224],
              [95.74082053261337, 25.500427678495214],
              [95.74128455477295, 25.500434941236282],
              [95.74131405907211, 25.500955436537037]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry65 = /* color: #99ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.62509930687484, 25.522734326845846],
              [95.65462506371078, 25.522734326845846],
              [95.65411007957992, 25.538417908490985],
              [95.62522805290756, 25.538108129200605]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry66 = /* color: #ff99ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.2316728885704, 25.202546921383487],
              [95.23764885025558, 25.202634289194446],
              [95.23770249443588, 25.205643586632124],
              [95.2315656002098, 25.205604757461522]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry67 = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.40639460640487, 27.28025792823642],
              [96.4091358240181, 27.28028176704277],
              [96.40913045960006, 27.282012450718465],
              [96.40641606407699, 27.281969541531783]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry68 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.42002022820053, 27.269887562457377],
              [96.42002827482757, 27.269398820192986],
              [96.42083293753204, 27.269410740761607],
              [96.42082220869598, 27.26987087373257]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry69 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.14196098404464, 27.08504263504734],
              [96.15037239151535, 27.085214574926024],
              [96.15015781479416, 27.08903539303182],
              [96.14206827240524, 27.08882525142257]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry70 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.1004940326744, 26.90846241251752],
              [96.10221601086197, 26.908512640476744],
              [96.10219723539886, 26.909019702432442],
              [96.10051817255554, 26.90899578446684]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry71 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.12215567188797, 23.11218183865975],
              [94.12322050886688, 23.112174437870394],
              [94.12322855549392, 23.11289724637152],
              [94.12216640072403, 23.112899713288066]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry72 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.12231124001083, 23.14510884300741],
              [94.12301397877273, 23.14513350624763],
              [94.12302470760879, 23.145587309057998],
              [94.12234879093704, 23.145597174319413]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry73 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.12966585712967, 23.180535372367242],
              [94.1303203161293, 23.180535372367242],
              [94.13033640938339, 23.18128986584523],
              [94.12967658596573, 23.181294797161158]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry49 = /* color: #00ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.65665549593506, 24.23189988658946],
              [95.65695322113571, 24.231892548936457],
              [95.65695858555374, 24.23198304662727],
              [95.6573475058609, 24.23198304662727],
              [95.65735287027893, 24.232161595936702],
              [95.6566635425621, 24.232168933574187]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry74 = /* color: #0000ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.66785371857223, 24.22621063267251],
              [95.66864228802261, 24.226195956710278],
              [95.66864228802261, 24.22655796328478],
              [95.66786981182632, 24.226572639205287]]]),
        {
          "Class": "MDF",
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
                                 geometry46,geometry47,geometry48,geometry49,geometry50,
                                 geometry51,geometry52,geometry53,geometry54,geometry55,
                                 geometry56,geometry57,geometry58,geometry59,geometry60,
                                 geometry61,geometry62,geometry63,geometry64,geometry65,
                                 geometry66,geometry67,geometry68,geometry69,geometry70,
                                 geometry71,geometry72,geometry73,geometry74]); 
                                 
print(train, 'Train');

var training = train.remap(['MDF','Bamboo', 'Upland_Evergreen', 'Lowland_Evergreen', 'DDF', 'Indaing', 'Thorn', 'Pine', 'Oak', 'Mangrove'], [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 'Class');
print(training, 'Training');

var mdf = training.filter(ee.Filter.eq('Class', 0));//.limit(1);
var mdf_size = mdf.size();
print(mdf_size,'mdf_size');

var bamboo = training.filter(ee.Filter.eq('Class', 1));//.limit(1);
var bamboo_size = bamboo.size();
print(bamboo_size,'bamboo_size');

var up_evg = training.filter(ee.Filter.eq('Class', 2));//.limit(1);
var up_evg_size = up_evg.size();
print(up_evg_size,'up_evg_size');
print(up_evg, 'up_evg');

var low_evg = training.filter(ee.Filter.eq('Class', 3));//.limit(1);
var low_evg_size = low_evg.size();
print(low_evg_size,'low_evg_size');

var ddf = training.filter(ee.Filter.eq('Class', 4));//.limit(1);
var ddf_size = ddf.size();
print(ddf_size,'ddf_size');
print(ddf);

var ind = training.filter(ee.Filter.eq('Class', 5));//.limit(1);
var ind_size = ind.size();
print(ind_size,'ind_size');

var thorn = training.filter(ee.Filter.eq('Class', 6));//.limit(1);
var thorn_size = thorn.size();
print(thorn_size,'thorn_size');

var pine = training.filter(ee.Filter.eq('Class', 7));//.limit(2);
var pine_size = pine.size();
print(pine_size,'pine_size');
print(pine);

var oak = training.filter(ee.Filter.eq('Class', 8));//.limit(2);
var oak_size = oak.size();
print(oak_size,'oak_size');

var mangrove = training.filter(ee.Filter.eq('Class', 9));//.limit(2);
var mangrove_size = mangrove.size();
print(mangrove_size,'mangrove_size');

training = mdf.merge(bamboo).merge(up_evg).merge(low_evg).merge(ddf).merge(ind).merge(thorn).merge(pine).merge(oak).merge(mangrove);


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
                                          // .addBands(ee.Image(s1_VV_mon_composites.get(5)))
                                          // .addBands(ee.Image(s1_VV_mon_composites.get(6)))
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
                                          // .addBands(ee.Image(s1_VH_mon_composites.get(5)))
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

var forest1 = tc_gte10.unmask(0);
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
                                                   // .addBands(gedi_roi)
                                                    .addBands(pal_variables)
                                                    .addBands(s1_VV_variables)
                                                    .addBands(s1_VH_variables)
                                                    .addBands(elevation)
                                                    .addBands(slope)
                                                    .updateMask(forest)
                                                    .updateMask(area_mask1);
                                                    
print(class_composite);

var sel_bands = (['B3_savg_2','B12_savg_2','SI_8_4','B4_savg_5','B5_savg_3','B4_savg_2','SI_38_3',
'B11_savg_3','B2_savg_2','VH_rf_savg_2','B4_savg_3','B11_savg_2','B7_savg_5','B7_savg_2','B6_savg_3',
'B12_savg_1','ND_15_3','ND_37_3','VH_rf_dvar_2']);

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
print(training.filter(ee.Filter.eq('Class', 3)).size(), 'Low_Evg');
print(training.filter(ee.Filter.eq('Class', 4)).size(), 'DDF');
print(training.filter(ee.Filter.eq('Class', 5)).size(), 'Indaing');
print(training.filter(ee.Filter.eq('Class', 6)).size(), 'Thorn');
print(training.filter(ee.Filter.eq('Class', 7)).size(), 'Pine');
print(training.filter(ee.Filter.eq('Class', 8)).size(), 'Oak');
print(training.filter(ee.Filter.eq('Class', 9)).size(), 'Mangrove');


//'MDF','Bamboo', 'Upland_Evergreen', 'DDF'
training = training.filter(ee.Filter.eq('Class', 0))
           .merge(training.filter(ee.Filter.eq('Class', 1)))
           .merge(training.filter(ee.Filter.eq('Class', 2)))
           .merge(training.filter(ee.Filter.eq('Class', 3)))
           .merge(training.filter(ee.Filter.eq('Class', 4)))
           .merge(training.filter(ee.Filter.eq('Class', 5)))
           .merge(training.filter(ee.Filter.eq('Class', 6)).limit(10))
           .merge(training.filter(ee.Filter.eq('Class', 7)))
           .merge(training.filter(ee.Filter.eq('Class', 8)))
           .merge(training.filter(ee.Filter.eq('Class', 9)));
           
print(training.size(), 'train for IV');
//print(training.filter(ee.Filter.eq('Class', 1)));

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
  description:'RF_IV_Sagaing',
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
  description: 'FT_Sagaing_Run6',
  scale: 20,
  region: roi,
  maxPixels:703470267 
});

/**/
