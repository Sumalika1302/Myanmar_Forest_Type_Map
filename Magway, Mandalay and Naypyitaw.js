var table = ee.FeatureCollection("users/BiswasS/Magway_Mandalay_NPT"),
    tcc = ee.Image("users/BiswasS/tcc_myanmar_calib_2018_wgs84_bd"),
    geometry = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.2501219136733, 20.909408503099833],
              [95.2512028439063, 20.909426042120355],
              [95.25117333960713, 20.910197756992332],
              [95.25005754065694, 20.910160173567835]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry2 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.25956865382375, 20.913850820898865],
              [95.2611994369048, 20.913845809898234],
              [95.26118334365071, 20.915053456209595],
              [95.25966521334828, 20.915033412366803]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry3 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.23351903987111, 20.910242857089322],
              [95.23709174227895, 20.910272923813103],
              [95.23703809809865, 20.91249784464372],
              [95.2334439380187, 20.912367557396948]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry4 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.23227985930623, 20.924273339730956],
              [95.2332830054778, 20.924283361034902],
              [95.23325081896962, 20.92518026502399],
              [95.23233350348653, 20.92517024378003]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry5 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.25170441699208, 20.92587673983769],
              [95.25382872653188, 20.92590680342584],
              [95.253850184204, 20.927389932951534],
              [95.25170441699208, 20.927349848562788]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry6 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.26306088996114, 20.925205318130992],
              [95.26371534896077, 20.925205318130992],
              [95.26370998454274, 20.925460859582937],
              [95.26306625437917, 20.925460859582937]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry7 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.853184543373, 20.563752211172908],
              [93.85674651694478, 20.563852663294128],
              [93.85683234763326, 20.566584935651072],
              [93.85305579734029, 20.566524665464595]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry8 = /* color: #00ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.86015828681172, 20.5920871339534],
              [93.8627117497939, 20.592217697454426],
              [93.86273320746602, 20.593493196545708],
              [93.86022265982808, 20.593533369572125]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry9 = /* color: #0000ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.89191295933904, 20.593347569236222],
              [93.89202024769963, 20.593377699035802],
              [93.89201220107259, 20.593515793874385],
              [93.8918512685317, 20.593485664102086]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry10 = /* color: #999900 */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.89281149935903, 20.592498910769297],
              [93.89285173249425, 20.592358304176688],
              [93.89319773745717, 20.592436139985047],
              [93.8931306822318, 20.592579257335434]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry11 = /* color: #009999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.84926851821126, 20.631903816672075],
              [93.85132309031667, 20.6318787148555],
              [93.85129626822652, 20.6332593086188],
              [93.84925242495717, 20.63320408510877]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry12 = /* color: #ff00ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.85916050505818, 20.645458192700005],
              [93.8602977616805, 20.645478272361057],
              [93.86027630400838, 20.646336675391744],
              [93.85921414923848, 20.646316595844034]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry13 = /* color: #ff9999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.88036336732091, 20.64360332257511],
              [93.88041701150121, 20.643354833519286],
              [93.88067182135762, 20.64339750338603],
              [93.88059940171422, 20.643648502359834]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry14 = /* color: #99ff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.87736465764226, 20.64190154091038],
              [93.87774553132238, 20.642039591755108],
              [93.87764360737981, 20.642413583414033],
              [93.87729223799886, 20.642365893253658]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry15 = /* color: #9999ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.86761751008214, 20.64916535517657],
              [93.86783745122136, 20.649320968686343],
              [93.86759068799199, 20.649682392997722],
              [93.86737074685277, 20.649581997441857]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry16 = /* color: #ffff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.00045659375371, 20.624767203485284],
              [94.0015348417777, 20.624737079892483],
              [94.00152947735967, 20.62520399491122],
              [94.00051023793401, 20.62520399491122]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry17 = /* color: #99ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.91853656602086, 20.63063616975933],
              [93.91941096615972, 20.630626128949554],
              [93.91942169499578, 20.631258698671637],
              [93.91857411694707, 20.63126873943968]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry18 = /* color: #ff99ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.79668643307866, 19.030411159285507],
              [94.79743745160283, 19.030411159285507],
              [94.79743745160283, 19.030872640500814],
              [94.79668106866063, 19.030872640500814]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry19 = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.68285348248662, 18.98432758467068],
              [94.68345966172399, 18.984347875207163],
              [94.68347039056005, 18.984870355670207],
              [94.68287494015874, 18.984875428288028]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry20 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.68310561013402, 18.9877972304766],
              [94.68404438328923, 18.987751577711656],
              [94.68404974770726, 18.98851752800016],
              [94.68311633897008, 18.9884718754327]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry21 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.7799440844077, 19.110251121907655],
              [94.7799440844077, 19.1097949304625],
              [94.78062000107946, 19.1097949304625],
              [94.78061463666143, 19.110251121907655]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry22 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.43969240021886, 19.206362815464228],
              [95.43967630696477, 19.205638399652603],
              [95.44062044453801, 19.205638399652603],
              [95.44062580895604, 19.206261498759407],
              [95.44006254506291, 19.206276696269114],
              [95.44006254506291, 19.206367881297837]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry23 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.43361451459111, 19.21439703141927],
              [95.43360378575505, 19.213677716609133],
              [95.43466057610692, 19.21369291343344],
              [95.43466594052495, 19.21440209700537]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry24 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.787859223606, 19.268402496320267],
              [95.7892807943839, 19.268387304559987],
              [95.78929152321996, 19.269010165576447],
              [95.78786458802404, 19.269020293378297]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry25 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.79694654774846, 19.433625532816695],
              [95.79695191216649, 19.432952711816288],
              [95.79692509007634, 19.432032004877605],
              [95.79711820912541, 19.432042122564642],
              [95.79715576005162, 19.433114593815397],
              [95.79734351468267, 19.433129770244538],
              [95.79733815026464, 19.43360529763929]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry27 = /* color: #0000ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.587879024269, 19.458136068682546],
              [96.58835645747365, 19.458285280500213],
              [96.58865954709233, 19.45835356382862],
              [96.58875878882588, 19.45848254337049],
              [96.58873196673574, 19.458674747987644],
              [96.58793803286733, 19.45863934189108]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry28 = /* color: #999900 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.61235954594792, 19.431814474453986],
              [96.61296036076726, 19.431829651004627],
              [96.6129496319312, 19.432439241282705],
              [96.61235149932088, 19.432431653036048]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry29 = /* color: #009999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.60590078664006, 19.437753456281136],
              [96.60698439908208, 19.43776610294423],
              [96.60696562361898, 19.43871712918613],
              [96.60592224431218, 19.438707011914996]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry31 = /* color: #ff9999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.62279870343389, 19.50052440305496],
              [96.62278797459783, 19.499864501495185],
              [96.62353362870397, 19.49987208658588],
              [96.62355240416707, 19.50052440305496]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry32 = /* color: #99ff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.61610927415074, 19.50191751973119],
              [96.61725189519109, 19.501912463068034],
              [96.61721434426488, 19.50302998178362],
              [96.61608781647863, 19.5029945853816]]]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry33 = /* color: #9999ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.62499006819905, 19.51079424819418],
              [96.62595834565343, 19.510832171081468],
              [96.62594761681737, 19.511350449649775],
              [96.62493105960073, 19.511347921465674]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry34 = /* color: #ffff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.5390172226447, 19.604449257770533],
              [96.53985407185735, 19.604469471570184],
              [96.53987016511144, 19.60492933482609],
              [96.53910305333318, 19.604934388261157]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry35 = /* color: #99ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.52841713261785, 19.60799168737542],
              [96.52869071793737, 19.60802706074409],
              [96.5296884996909, 19.608850752700704],
              [96.52965631318273, 19.60968960029618],
              [96.52907159161748, 19.609709813437263],
              [96.52812745404424, 19.60916405773623]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry36 = /* color: #ff99ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.51877727341832, 19.83661330280985],
              [96.52011837792577, 19.83668394841173],
              [96.52006473374547, 19.83777390514394],
              [96.5188631041068, 19.837753720827983]]]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry37 = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.51655103993596, 19.857013437277665],
              [96.5165403110999, 19.856206160490213],
              [96.51732888055028, 19.856191024011217],
              [96.51731815171422, 19.857079028336198],
              [96.5165403110999, 19.857094164730476]]]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry38 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.27859618497075, 19.841775395112784],
              [96.27912189793767, 19.841795578917566],
              [96.27913262677373, 19.842764398529674],
              [96.27858545613469, 19.84275935260949]]]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry39 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.27916481328191, 19.841321258826945],
              [96.27994801831426, 19.841321258826945],
              [96.27995874715032, 19.84190658979798],
              [96.27917554211797, 19.841936865479177]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry40 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.07198026013555, 19.9083730156876],
              [96.07226993870916, 19.9083730156876],
              [96.07227530312718, 19.908009859389015],
              [96.07264544797124, 19.908004815545674],
              [96.07266154122533, 19.908892529498797],
              [96.0720070822257, 19.908912704758023]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry41 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.07266154122533, 19.909079150548482],
              [96.07284393143834, 19.9090690629298],
              [96.07284393143834, 19.90880678461838],
              [96.07303705048741, 19.908786609345658],
              [96.07303705048741, 19.90853946204585],
              [96.07342328858556, 19.90853441821938],
              [96.07342865300359, 19.909331340806364],
              [96.07268299889745, 19.90934647220907]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry42 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.65798666310491, 20.0512001088504],
              [95.66030409169377, 20.05107412723777],
              [95.66028799843968, 20.05296888001689],
              [95.65797593426885, 20.052928566366106]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry43 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.41520109009923, 20.195740048797983],
              [96.41671922040166, 20.19575011801086],
              [96.41669239831151, 20.197054075577455],
              [96.41519036126317, 20.197038971884343]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    table2 = ee.FeatureCollection("users/BiswasS/Rakhine"),
    table3 = ee.FeatureCollection("users/BiswasS/Chin"),
    table4 = ee.FeatureCollection("users/BiswasS/Sagaing"),
    table5 = ee.FeatureCollection("users/BiswasS/Kachin"),
    table6 = ee.FeatureCollection("users/BiswasS/Shan"),
    table7 = ee.FeatureCollection("users/BiswasS/Kayin"),
    table8 = ee.FeatureCollection("users/BiswasS/Bago"),
    geometry44 = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.90377094578923, 18.98328769136619],
              [94.90480091405095, 18.98325725536679],
              [94.90479018521489, 18.98417033292908],
              [94.9037816746253, 18.984175405568223]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry45 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.865726493122, 19.01510548467886],
              [94.86852671933354, 19.015069982801148],
              [94.86852135491552, 19.01669291803403],
              [94.86580159497441, 19.016718276271337]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry46 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.69511117768468, 18.96115925253984],
              [94.69703163933934, 18.96115925253984],
              [94.69699945283116, 18.962397142824415],
              [94.69514336419286, 18.962447875836784]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry47 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.75890483689489, 18.998687593480664],
              [94.76036395859899, 18.99871802665928],
              [94.76034250092687, 18.99997592650552],
              [94.758926294567, 18.99991506060286]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry48 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.75116934609593, 18.99438631492825],
              [94.75283231568517, 18.99436602561507],
              [94.75285377335729, 18.995522512519152],
              [94.75124444794835, 18.995481934167326]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry49 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.66225948167028, 19.140253082312665],
              [94.66346111130895, 19.14026321804541],
              [94.66345038247289, 19.140992989166904],
              [94.66233458352269, 19.140992989166904]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry50 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.66429259610356, 19.139350999606954],
              [94.66437306237401, 19.139356067501094],
              [94.66437842679204, 19.139178691113717],
              [94.6650543434638, 19.139168555314388],
              [94.66505970788182, 19.139700683937463],
              [94.66428723168553, 19.139710819704106]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry51 = /* color: #00ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.55796983075322, 19.288953126140015],
              [94.55799128842534, 19.2858543666445],
              [94.5610275490302, 19.285945507466742],
              [94.56096317601384, 19.28913540428387],
              [94.55827023816289, 19.28903413867345]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry52 = /* color: #0000ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.5312925798911, 19.325526205756763],
              [94.53430738282384, 19.325485708532298],
              [94.5343181116599, 19.327267576912277],
              [94.53131403756322, 19.327227080119478]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry53 = /* color: #999900 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.5142176373023, 19.352472350847453],
              [94.51707150769414, 19.352371124476814],
              [94.51701786351384, 19.355782418556345],
              [94.51443221402349, 19.35568119423982]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry54 = /* color: #009999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.47530414891423, 19.43451587812596],
              [94.47985317540349, 19.434617053420432],
              [94.47978880238713, 19.439756675433813],
              [94.47517540288152, 19.439695972186286]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry55 = /* color: #ff00ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.46071293187322, 19.488615420783365],
              [94.45940401387395, 19.48865587740804],
              [94.45933964085759, 19.48683531928964],
              [94.46161415410222, 19.486896004890063],
              [94.46285869908513, 19.488332224127596],
              [94.4627084953803, 19.489343638480673],
              [94.46131374669255, 19.489303182027868]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry56 = /* color: #ff9999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.42602660489263, 19.487002204636074],
              [94.4272818787116, 19.487012318893964],
              [94.42729797196569, 19.488251310706406],
              [94.42617680859746, 19.488251310706406]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry57 = /* color: #99ff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.4071116669196, 19.496615521621955],
              [94.40777149033727, 19.49665091941954],
              [94.40773930382909, 19.49780892881296],
              [94.40710093808354, 19.497803872021404]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry58 = /* color: #9999ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.38826646638097, 19.546101659317824],
              [94.38935812545003, 19.546078910553753],
              [94.389352761032, 19.54659454841846],
              [94.38828524184407, 19.54662993527033]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry59 = /* color: #ffff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.37649961543264, 19.550936962717916],
              [94.37721576523961, 19.550921797330005],
              [94.37721576523961, 19.551434892162625],
              [94.37652107310475, 19.551417199264524]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry60 = /* color: #99ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.36615969968022, 19.55535255752938],
              [94.36699386668386, 19.55533233756529],
              [94.36701532435598, 19.556014759952227],
              [94.36620797944249, 19.55604508976907]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry61 = /* color: #ff99ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.35093279910268, 19.566276022486903],
              [94.35264404845418, 19.566291186431044],
              [94.352611861946, 19.567858119636853],
              [94.35083623957814, 19.567812628242336]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry62 = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.35529675316991, 19.568891781752054],
              [94.35665931534948, 19.568896836318242],
              [94.35667540860356, 19.5700644368593],
              [94.35537721944036, 19.570044218740076]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry63 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.44485571217717, 19.715417511202578],
              [94.44934036565007, 19.715457910835784],
              [94.4492545349616, 19.720285593500883],
              [94.44489862752141, 19.720265394295552]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry64 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.55424692464055, 19.738297218531677],
              [94.55531980824651, 19.738297218531677],
              [94.55531444382848, 19.73968575122117],
              [94.55424692464055, 19.739675652845204]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry65 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.50047936272802, 19.726042262980478],
              [94.5004954559821, 19.72567364035953],
              [94.50106944871129, 19.72567868999021],
              [94.50102116894902, 19.726037213361277]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry66 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.51159443688573, 19.73280860932207],
              [94.5126512272376, 19.732813658727245],
              [94.51265659165563, 19.73352057387704],
              [94.51160516572179, 19.73353572202459]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry67 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.2700346930045, 19.938650760155443],
              [94.2730602247733, 19.9387617031616],
              [94.27294220757665, 19.94208995710783],
              [94.2701419813651, 19.942069786083053]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry68 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.47600688767614, 19.963573156547294],
              [94.47687324118795, 19.963583240685956],
              [94.47684373688878, 19.964263918554526],
              [94.47598006558599, 19.9642538344594]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry69 = /* color: #00ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.46127619576635, 19.937861549703698],
              [94.46126010251226, 19.937216058351527],
              [94.4618448240775, 19.93723622999622],
              [94.4618448240775, 19.93785650681274]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry70 = /* color: #0000ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[93.94446279835881, 20.542311705827892],
              [93.9461901409644, 20.542311705827892],
              [93.94623305630864, 20.545124734927665],
              [93.94436623883428, 20.545104642046205]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry71 = /* color: #999900 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.1111835463065, 20.71758478005209],
              [94.11204185319127, 20.717554674865344],
              [94.11203112435521, 20.71838758282492],
              [94.11123182606877, 20.718417687846138]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry72 = /* color: #009999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.10336222481908, 20.94519385681309],
              [94.10575475526036, 20.94519385681309],
              [94.10573329758824, 20.94680705275486],
              [94.1034373266715, 20.94684713193579]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry73 = /* color: #ff00ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.10262193513097, 21.045028887628703],
              [94.10363044572057, 21.045018874421803],
              [94.10360898804845, 21.045689757795056],
              [94.10255756211461, 21.045689757795056]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry74 = /* color: #ff9999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.14085414242925, 21.13197316789853],
              [94.14213087392034, 21.13197817157276],
              [94.1421255095023, 21.13324909935827],
              [94.14083268475713, 21.133259106620418]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry76 = /* color: #9999ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.85735257697286, 20.019608315167424],
              [95.85769858193578, 20.01961587558101],
              [95.8576851708907, 20.019814966341087],
              [95.85738208127202, 20.019814966341087]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry26 = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.11436732840718, 21.676261188043004],
              [94.1144772989768, 21.675942142769273],
              [94.11515321564855, 21.676248725350252],
              [94.11506202054204, 21.676430680557477]]]),
        {
          "Class": "Indaing",
          "system:index": "0"
        }),
    geometry30 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.12028696370305, 21.72905967466953],
              [94.12133838963689, 21.72905469142056],
              [94.12133838963689, 21.72962527230533],
              [94.12028159928502, 21.729622780690672]]]),
        {
          "Class": "Indaing",
          "system:index": "0"
        }),
    geometry75 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.1134875638503, 21.750444941876214],
              [94.11348219943227, 21.749353768637697],
              [94.11410983634175, 21.749363733727613],
              [94.11406155657949, 21.7504499243834]]]),
        {
          "Class": "Indaing",
          "system:index": "0"
        }),
    geometry77 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.2750476820487, 20.84437225516262],
              [95.27647461724462, 20.84437225516262],
              [95.27648534608068, 20.845074118177735],
              [95.2750476820487, 20.845094171358635]]]),
        {
          "Class": "Thorn",
          "system:index": "0"
        }),
    geometry78 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.20290698838414, 20.886332892966514],
              [95.20290698838414, 20.88580664047924],
              [95.20326640439214, 20.885811652416393],
              [95.20327176881017, 20.886332892966514]]]),
        {
          "Class": "Thorn",
          "system:index": "0"
        }),
    geometry79 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Polygon(
            [[[95.19626047444524, 20.90049841551602],
              [95.19714292121114, 20.900513449855307],
              [95.19715633225621, 20.901054685066104],
              [95.19628193211736, 20.901059696494123]]]),
        {
          "Class": "Thorn",
          "system:index": "0"
        }),
    geometry80 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.31382980179967, 20.709217816711245],
              [94.31434478593053, 20.70919774547912],
              [94.31433405709447, 20.70973966781348],
              [94.31390490365209, 20.70972963223232]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry81 = /* color: #00ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.31461300683202, 20.709358315261696],
              [94.31527819466771, 20.709358315261696],
              [94.31527819466771, 20.709910272591774],
              [94.31462373566808, 20.70992030816099]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry82 = /* color: #0000ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.31787457299413, 20.708555464647635],
              [94.31787457299413, 20.70804364516135],
              [94.31865777802648, 20.70808378792862],
              [94.31863632035436, 20.708565500306566]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry83 = /* color: #999900 */ee.Feature(
        ee.Geometry.Polygon(
            [[[94.31709136796178, 20.70793325249654],
              [94.31777801346959, 20.707903145392173],
              [94.31777801346959, 20.7083547513296],
              [94.31712355446996, 20.70837482267336]]]),
        {
          "Class": "DDF",
          "system:index": "0"
        }),
    geometry84 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.6663685066718, 19.528667583008755],
              [96.66729118657292, 19.528667583008755],
              [96.6672858221549, 19.52949673641404],
              [96.66635241341771, 19.529511903814743]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry85 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.65157344174565, 19.55889606708758],
              [96.65382113290013, 19.558815188992977],
              [96.65387477708043, 19.559618913256895],
              [96.65155734849156, 19.559618913256895]]]),
        {
          "Class": "Upland_Evergreen",
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
                                 geometry26,geometry27,geometry28,geometry29,geometry30,
                                 geometry31,geometry32,geometry33,geometry34,geometry35,
                                 geometry36,geometry37,geometry38,geometry39,geometry40,
                                 geometry41,geometry42,geometry43,geometry44,geometry45,
                                 geometry46,geometry47,geometry48,geometry49,geometry50,
                                 geometry51,geometry52,geometry53,geometry54,geometry55,
                                 geometry56,geometry57,geometry58,geometry59,geometry60,
                                 geometry61,geometry62,geometry63,geometry64,geometry65,
                                 geometry66,geometry67,geometry68,geometry69,geometry70,
                                 geometry71,geometry72,geometry73,geometry74,geometry75,
                                 geometry76,geometry77,geometry78,geometry79,geometry80,
                                 geometry81,geometry82,geometry83,geometry84,geometry85]);
print(train);

var training = train.remap(['MDF', 'Bamboo', 'Upland_Evergreen', 'Lowland_Evergreen','Indaing', 'DDF', 'Thorn'], [0, 1, 2, 3, 4, 5, 6], 'Class');
//print(training);

var mdf = training.filter(ee.Filter.eq('Class', 0));
var mdf_size = mdf.size();
print(mdf_size,'mdf_size');

var bamboo = training.filter(ee.Filter.eq('Class', 1));
var bamboo_size = bamboo.size();
print(bamboo_size,'bamboo_size');

var up_evg = training.filter(ee.Filter.eq('Class', 2));
var up_evg_size = up_evg.size();
print(up_evg_size,'up_evg_size');

var low_evg = training.filter(ee.Filter.eq('Class', 3));
var low_evg_size = low_evg.size();
print(low_evg_size,'low_evg_size');

var ind = training.filter(ee.Filter.eq('Class', 4));
var ind_size = ind.size();
print(ind_size,'ind_size');

var ddf = training.filter(ee.Filter.eq('Class', 5));
var ddf_size = ddf.size();
print(ddf_size,'ddf_size');

var thorn = training.filter(ee.Filter.eq('Class', 6));
var thorn_size = thorn.size();
print(thorn);
print(thorn_size,'thorn_size');

//var training1 = mangrove.merge(mdf).merge(rubber).merge(bamboo).merge(up_evg).merge(ind).merge(ddf).merge(op);
//print(training1);



//----------------------------------------------------TP_PCT----------------------------------------------
//Load TP_PCT_Map
var tc = ee.Image(tcc);
var tc_gte25 = tc.gte(25);
var tc_gte10 = tc.gte(10);
//Map.addLayer(tc.clip(roi), {}, 'PCT');
//Map.addLayer(tc_gte10.updateMask(tc_gte10), {}, 'tc_gte10');


//---------------------------------------------------Rainfall----------------------------------------------
//Load CHIRPS data
//-----------------------------------------------------SRTM------------------------------------------------
// Load SRTM
var dataset = ee.Image('CGIAR/SRTM90_V4');
var elevation = dataset.select('elevation').unmask(0);
var slope = ee.Terrain.slope(elevation);

//Map.addLayer(dataset, {}, 'elevation');
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

//Map.addLayer(check0, {min: 0.0, max: 0.3,bands: ['B11', 'B8', 'B3']}, 'checkjan');
//Map.addLayer(check1, {min: 0.0, max: 0.3,bands: ['B11', 'B8', 'B3']}, 'checkfeb');
//Map.addLayer(check2, {min: 0.0, max: 0.3,bands: ['B11', 'B8', 'B3']}, 'checkmar');
Map.addLayer(check3, {min: 0.0, max: 0.3,bands: ['B11', 'B8', 'B3']}, 'checkapr');
Map.addLayer(check10, {min: 0.0, max: 0.3,bands: ['B11', 'B8', 'B3']}, 'checknov');
//Map.addLayer(check11, {min: 0.0, max: 0.3,bands: ['B11', 'B8', 'B3']}, 'checkdec');

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
//Map.addLayer(nf_mask.updateMask(nf_mask), {},"nf_mask");

var forest1 = tc_gte10.unmask(0);
//Map.addLayer(forest1.updateMask(forest1), {},"forest1");

var forest2 = nf_mask.eq(1).unmask(0);
//Map.addLayer(forest2.updateMask(forest2), {},"forest2");

var forest = forest1.add(forest2);
forest= forest.gte(1);
//Map.addLayer(forest.updateMask(forest), {},"forest");


var water = Jan_ndvi.lte(0)
            .and(Feb_ndvi.lte(0))
            .and(Mar_ndvi.lte(0))
            .and(Apr_ndvi.lte(0))
            .and(Nov_ndvi.lte(0))
            .and(Dec_ndvi.lte(0));
            
water = water.gte(1);            
//Map.addLayer(water.updateMask(water), {},"water");

//NDVI Plot

var six_month_ndvi =Jan_ndvi.addBands(Feb_ndvi).addBands(Mar_ndvi).addBands(Apr_ndvi).addBands(Nov_ndvi).addBands(Dec_ndvi);
print(six_month_ndvi);
var plot_thorn = ee.FeatureCollection(thorn).limit(1);

// Define a dictionary that associates band names with values and labels.
var precipInfo = {
  'NDVI': {v: 1, f: 'Jan'},
  'NDVI_1': {v: 2, f: 'Feb'},
  'NDVI_2': {v: 3, f: 'Mar'},
  'NDVI_3': {v: 4, f: 'Apr'},
  'NDVI_4': {v: 5, f: 'Nov'},
  'NDVI_5': {v: 6, f: 'Dec'}
};

// Organize precipitation information into objects for defining x values and
// their tick labels. Note that chart options provided to the .setOptions()
// function must be client-side objects, which is why a client-side for
// loop is used to iteratively populate lists from the above dictionary.
var xPropVals = [];    // List to codify x-axis band names as values.
var xPropLabels = [];  // Holds dictionaries that label codified x-axis values.
for (var key in precipInfo) {
  xPropVals.push(precipInfo[key].v);
  xPropLabels.push(precipInfo[key]);
}

// Define the chart and print it to the console.
var chart = ui.Chart.image
                .regions({
                  image: six_month_ndvi,
                  regions:plot_thorn,
                  reducer: ee.Reducer.mean(),
                  scale: 20,
                  seriesProperty: 'label',
                  xLabels: xPropVals
                })
                .setChartType('LineChart')
                .setOptions({
                  title: '',
                  
                  
                  hAxis: {
                    title: 'Month',
                    titleTextStyle: {fontName: 'arial', fontSize: 12, italic: false, bold: true},
                    textStyle : {color: 'black', fontName: 'arial', fontSize: 12},
                    ticks: xPropLabels
                  },
                  vAxis: {
                    title: 'NDVI',
                    titleTextStyle: {fontName: 'arial', fontSize: 12, italic: false, bold: true},
                    textStyle : {color: 'black', fontName: 'arial', fontSize: 12},
                    viewWindow: {min: 0, max: 1}
                  },
                  colors: ['black'],
                  lineSize: 2
                });
print(chart);



var area_mask1 = ee.Image.constant(1).clip(table).mask()

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

class_composite= class_composite.select('B11_contrast_5','IRECI_1','B2_savg_3','B7_3','B12_idm','ND_17',
'ND_10_1','ND_29_1','ND_1_3','B12_idm_5','ND_11_3','ND_15_1','ND_29','B2_savg_1','SAVI_1','B3_asm_5',
'SI_44_1', 'B12_4','SI_3_5','SI_9_5');

var bands = class_composite.bandNames();
print(bands.size());
//Map.addLayer(class_composite, {}, 'class_composite');


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

var bamboo_size = (training.filter(ee.Filter.eq('Class', 1))).size();
print(bamboo_size,'bamboo_size');

var up_evg_size = (training.filter(ee.Filter.eq('Class', 2))).size();
print(up_evg_size,'up_evg_size');

var low_evg_size = (training.filter(ee.Filter.eq('Class', 3))).size();
print(low_evg_size,'low_evg_size');

var ind = training.filter(ee.Filter.eq('Class', 4));
var ind_size = (training.filter(ee.Filter.eq('Class', 4))).size();
print(ind_size,'ind_size');

var ddf = training.filter(ee.Filter.eq('Class', 5));
var ddf_size = (training.filter(ee.Filter.eq('Class', 5))).size();
print(ddf_size,'ddf_size');

var thorn = training.filter(ee.Filter.eq('Class', 6));
var thorn_size = (training.filter(ee.Filter.eq('Class', 6))).size();
print(thorn_size,'thorn_size');


training = training.filter(ee.Filter.eq('Class', 0)).limit(30)
           .merge(training.filter(ee.Filter.eq('Class', 1)).limit(50))
           .merge(training.filter(ee.Filter.eq('Class', 2)).limit(1000))
           .merge(training.filter(ee.Filter.eq('Class', 3)).limit(10))
           .merge(training.filter(ee.Filter.eq('Class', 4)).limit(22))
           .merge(training.filter(ee.Filter.eq('Class', 5)).limit(90))
           .merge(training.filter(ee.Filter.eq('Class', 6)).limit(30));
           

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
  description:'RF_IV_Magway_mandalay_NPT',
  fileFormat: 'CSV'
});

//----------------------------------------------Selected--Bands-------------------------------------


//----------------------------------------------Generate--Classified--Map-----------------------------------------

var classified = class_composite.classify(classifier).unmask(100);

// Define a palette from the IGBP classification.

//var Palette = ['152106', '225129', '369b47', '30eb5b', '387242', '6a2325', 'c3aa69'];

var Palette = ['#008000', '#00FF00', '#808000', '#FFFF00', '#FF00FF', '6a2325', 'c3aa69']; //green, lime, olive,yellow,fuchsia

Map.addLayer(classified, {palette: Palette, min: 0, max: 7}, 'classification');


//---------------------------------------------Export---Maps--------------------------------------------------------

// Export the image, specifying scale and region.
Export.image.toDrive({
  image: classified,
  description: 'FT_Magway_Mandalay_NPT_Run4',
  scale: 20,
  region: roi,
  maxPixels:653997022
});
