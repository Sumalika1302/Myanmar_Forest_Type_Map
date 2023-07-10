var tcc = ee.Image("users/BiswasS/tcc_myanmar_calib_2018_wgs84_bd"),
    geometry12 = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.20647417512356, 15.24163373258029],
              [98.206734349398, 15.24183299803288],
              [98.20666461196362, 15.241905458150653],
              [98.20670752730786, 15.241972742523345],
              [98.20682554450451, 15.241889930984646],
              [98.2070401212257, 15.242107311204176],
              [98.20687918868481, 15.242249643369018],
              [98.20670752730786, 15.242241879798879],
              [98.20645003524243, 15.242068493324313],
              [98.20628105607449, 15.241864052372117]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry13 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.20474415030895, 15.238154320316596],
              [98.20553808417736, 15.238247484950211],
              [98.20549516883312, 15.239334402626486],
              [98.20478706565319, 15.239344754196404]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry14 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.20948093142925, 15.236513580839713],
              [98.20943265166699, 15.236272903467853],
              [98.20975451674877, 15.236130567258131],
              [98.21002541985928, 15.236492877420691],
              [98.21005492415844, 15.236686971893944],
              [98.21019976344525, 15.236749082087549],
              [98.21003883090435, 15.236953528011995],
              [98.20972501244961, 15.23680860433921]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry15 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.23539643493115, 15.24592436772298],
              [98.23585777488171, 15.246162446240252],
              [98.23580413070141, 15.246359119594617],
              [98.23538302388607, 15.246493685467897],
              [98.23512284961163, 15.246397936682293]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry16 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.27013640609204, 15.26476279049172],
              [98.27106981482922, 15.264752440173888],
              [98.27106981482922, 15.26519750337945],
              [98.270131041674, 15.265187153083067]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry17 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.26522259917675, 15.259132142239974],
              [98.26596825328289, 15.259134729888729],
              [98.26597093549191, 15.25976611523349],
              [98.26521991696774, 15.259763527592506]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry18 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.20013075080334, 15.281684877450582],
              [98.20237307753979, 15.281736624858477],
              [98.20238380637585, 15.283154498866178],
              [98.20015220847546, 15.2831751976858]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry19 = /* color: #00ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.19171934333264, 15.299141140786938],
              [98.19593577590405, 15.299399856148382],
              [98.19578557219921, 15.302618248527764],
              [98.19185881820141, 15.302535460919152]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry20 = /* color: #0000ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.15668969359814, 15.330790004662218],
              [98.1626441976112, 15.329662172564365],
              [98.16266565528332, 15.33378028232215],
              [98.1567004224342, 15.333728547778291]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry21 = /* color: #999900 */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.49939017501293, 15.442407434167324],
              [98.50280194487988, 15.442397092657133],
              [98.50278048720776, 15.444765285030693],
              [98.49947600570141, 15.444765285030693]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry22 = /* color: #009999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.87559955325543, 15.677682191836006],
              [97.87639885154186, 15.677718345754819],
              [97.8763881227058, 15.678493071047738],
              [97.87562637534558, 15.678487906222177]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry23 = /* color: #ff00ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.42607735600888, 16.909550609568868],
              [98.42721997704922, 16.90956600703233],
              [98.42720388379513, 16.910479587612098],
              [98.42607735600888, 16.910474455149306]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry24 = /* color: #ff9999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.43086778130947, 16.911748584748903],
              [98.43076585736691, 16.911746018534796],
              [98.43077390399395, 16.911386748215783],
              [98.43161611762463, 16.911399579310405],
              [98.4316107532066, 16.912115553005492],
              [98.43085973468243, 16.912115553005492]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry25 = /* color: #99ff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.42821239438473, 16.9180703470889],
              [98.42934696879803, 16.918067780960897],
              [98.42933892217098, 16.918804258260934],
              [98.42821239438473, 16.918811956614718]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry26 = /* color: #9999ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.1093326112312, 16.865504871286344],
              [98.10918777194439, 16.864652677491957],
              [98.10920922961651, 16.86358999671449],
              [98.11120479312359, 16.86375940999239],
              [98.11111359801708, 16.86480668870313],
              [98.1105771562141, 16.864858025745615],
              [98.11053424086987, 16.865114710748948],
              [98.1099817058128, 16.86553053971451],
              [98.1096222898048, 16.86604390754578],
              [98.10928433146893, 16.86594636776514]]]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry27 = /* color: #ffff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.1092253228706, 16.866593209580866],
              [98.10959010329663, 16.866377595888288],
              [98.1100353499931, 16.866110645261426],
              [98.11036257949291, 16.865674282847834],
              [98.1118914386314, 16.866444333486086],
              [98.11151056495129, 16.8671219754522],
              [98.11118333545147, 16.8682924422156],
              [98.11011581626354, 16.868015227058432],
              [98.10939698424755, 16.86738379101559]]]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry28 = /* color: #99ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.06355803218304, 16.891104828444682],
              [98.0634239217323, 16.890180887967503],
              [98.06469528880535, 16.89019115399766],
              [98.06548385825573, 16.890309213304313],
              [98.06504934039532, 16.891310147936334],
              [98.06413738933026, 16.891094562464243]]]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry29 = /* color: #ff99ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.66558258738934, 16.815711832636683],
              [97.66758887973248, 16.812322678189478],
              [97.6691767474693, 16.813339430884508],
              [97.6671060821098, 16.816338306066807]]]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry30 = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.97509877887188, 16.98287572661266],
              [97.97445504870831, 16.981941975654554],
              [97.98065631595074, 16.9820548468964],
              [97.98059194293438, 16.98431225747328],
              [97.97637551036297, 16.984568779683688]]]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry31 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.11621515956341, 17.156877271820907],
              [98.11785667148052, 17.156774757694173],
              [98.11787812915264, 17.159194075983624],
              [98.11631171908795, 17.159194075983624]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry32 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.15997271743237, 17.176665281691683],
              [98.1630948087257, 17.176696032637697],
              [98.16306262221752, 17.17917659214459],
              [98.15998344626843, 17.178992088861296]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry33 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.83719836678921, 17.3311267809083],
              [97.83917515483319, 17.3311267809083],
              [97.83917515483319, 17.33204085368723],
              [97.8371956845802, 17.3320280515789]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry34 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.44204192367016, 17.4623826400985],
              [97.44736342635571, 17.46242357764899],
              [97.44736342635571, 17.466599159461264],
              [97.442192127375, 17.46650705207165]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry35 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.7545836469215, 17.66706234750128],
              [97.75794177260815, 17.666980564903927],
              [97.75786667075573, 17.670006496242515],
              [97.7545836469215, 17.669934937643145]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry36 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.72001533713757, 17.987408809514974],
              [97.72135107722698, 17.987413911743797],
              [97.7213349839729, 17.988322106123235],
              [97.72003679480969, 17.98830169731211]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry37 = /* color: #00ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.70295648780285, 18.01375730247558],
              [97.7037933370155, 18.014328665802367],
              [97.7027848264259, 18.01622639498287],
              [97.70131497588574, 18.01610396145907]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry38 = /* color: #0000ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.70453362670361, 18.013879737630166],
              [97.7035787602943, 18.01394095517555],
              [97.70362167563854, 18.012022795312614],
              [97.70471601691662, 18.0120432013785]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry39 = /* color: #999900 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.44167714324414, 18.31462810656892],
              [97.44168250766216, 18.31407809572098],
              [97.44251935687481, 18.31408318842202],
              [97.44251399245678, 18.314551716277887],
              [97.4422296783012, 18.314551716277887],
              [97.44222431388317, 18.314643384623082]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry40 = /* color: #009999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.33180313315808, 18.611855391661525],
              [97.33180313315808, 18.610792859137742],
              [97.33579962459027, 18.610711516661542],
              [97.33584790435253, 18.611890978760393],
              [97.33190505710064, 18.611870643276234]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry41 = /* color: #ff00ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.9794896146339, 18.491520911832765],
              [96.98568015304028, 18.491622660929693],
              [96.98565869536816, 18.49613008528484],
              [96.97932868209301, 18.496089386724254]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry42 = /* color: #ff9999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.97189359870373, 18.56176426252697],
              [96.97691469397961, 18.56176426252697],
              [96.97727947440563, 18.56534432309002],
              [96.97212963309704, 18.56540534619843]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry43 = /* color: #99ff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.9975891610664, 18.737474577545797],
              [96.99956326690136, 18.737444096907673],
              [96.99957399573742, 18.738541396414703],
              [96.99757843223034, 18.738480435517996]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry44 = /* color: #9999ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.70585065093456, 18.674945965884326],
              [96.70653193202435, 18.674976457782442],
              [96.70653729644238, 18.67571334365241],
              [96.70580773559033, 18.675703179731176]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry45 = /* color: #ffff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.42301975694119, 19.44551052443963],
              [96.4234730502647, 19.44549281995572],
              [96.42346500363766, 19.44594807749955],
              [96.42302512135922, 19.445937960679114]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    table = ee.FeatureCollection("users/BiswasS/Kayin"),
    geometry = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.81893697447407, 19.3121227144002],
              [96.82003668017018, 19.31213790210226],
              [96.82002595133412, 19.31295803591879],
              [96.81894770331013, 19.312942848292902]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry2 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.81909254259693, 19.313889540942572],
              [96.81922128862965, 19.313302288393675],
              [96.82027271456349, 19.313454164255102],
              [96.81999376482594, 19.314127478874823]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry3 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.82108810610401, 19.289253497959656],
              [96.82172110743153, 19.289233244857193],
              [96.82174256510365, 19.290134505491668],
              [96.82105591959584, 19.290124378995255]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry4 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.82021907038319, 19.289410459418786],
              [96.82073941893208, 19.289415522689147],
              [96.82073941893208, 19.289871216381144],
              [96.82021370596516, 19.289871216381144]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry5 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.04596450991261, 18.79526162979068],
              [97.05012729830372, 18.795444450842595],
              [97.04993417925465, 18.798846917520198],
              [97.04546025461781, 18.798653943637884]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry6 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.07876256174671, 18.732318775940243],
              [97.08397677607167, 18.732745517320293],
              [97.08286097712147, 18.735732676799746],
              [97.0815520591222, 18.73752088304992],
              [97.07850506968128, 18.73715511512972]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry7 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.07350269026387, 15.434070019229397],
              [98.07427516646015, 15.434007967666941],
              [98.07429662413227, 15.434768098028758],
              [98.0734919614278, 15.434793952754]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry8 = /* color: #00ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.11571261353123, 15.383067725028],
              [98.11679622597325, 15.38310910287615],
              [98.11659237808811, 15.384629733092709],
              [98.1154551214658, 15.384536633602657]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry9 = /* color: #0000ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.87419846720326, 15.68293794928587],
              [97.87583997912037, 15.6829276198596],
              [97.87587216562855, 15.684167147279508],
              [97.87440231508839, 15.68423945281324]]]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry10 = /* color: #999900 */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.00819090075123, 15.558239286140099],
              [98.00919941134083, 15.558332307540065],
              [98.00921014017689, 15.559200505245364],
              [98.00820162958729, 15.559117819907437]]]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry11 = /* color: #009999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.91425725884068, 15.878163245781604],
              [97.91681608624089, 15.878158086039385],
              [97.91685900158512, 15.879917550475348],
              [97.9142787165128, 15.879902071383096]]]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry46 = /* color: #ff00ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.01126739449131, 15.901225972214997],
              [98.01267287201512, 15.899121027603094],
              [98.01465770668614, 15.899234530080328],
              [98.01550528473484, 15.901731568374895],
              [98.01504394478428, 15.903248349228194],
              [98.01134249634373, 15.903196758230656]]]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry47 = /* color: #ff9999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.20616743034947, 15.958040825416074],
              [98.20686480469334, 15.957009284554438],
              [98.20948264069187, 15.956988653683043],
              [98.20954701370823, 15.95854627849966],
              [98.20632836289036, 15.95850501707125]]]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry48 = /* color: #99ff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.58893475002873, 16.002985056705366],
              [98.59095713562596, 16.003088187329357],
              [98.59080693192112, 16.004093708123122],
              [98.5890366739713, 16.00406792560189]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry49 = /* color: #9999ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.39939376778233, 16.022816096073473],
              [98.39941522545445, 16.020954764045584],
              [98.40116939015019, 16.020928983701673],
              [98.40156635708439, 16.02161473971546],
              [98.40151807732212, 16.022491266527098]]]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry50 = /* color: #ffff99 */ee.Geometry.Polygon(
        [[[98.86908611721623, 16.374690347509357],
          [98.87072762913334, 16.374700641168562],
          [98.87078127331364, 16.37623439031569],
          [98.86920413441288, 16.376244683893372]]]),
    geometry51 = /* color: #99ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.8972493118726, 16.400041981774606],
              [98.89855822987187, 16.4000625664138],
              [98.89856895870793, 16.401019749732647],
              [98.89728149838078, 16.400988872924874]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry52 = /* color: #ff99ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.43697151608097, 16.343163468587726],
              [98.4473141140424, 16.34334878429968],
              [98.4472068256818, 16.35039065109733],
              [98.43692860073674, 16.350287701656967]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry53 = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.71983465618717, 16.833314511461115],
              [97.72049447960484, 16.831717656700324],
              [97.7211167520963, 16.832092482339004],
              [97.7204515642606, 16.833478817296292]]]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry54 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.71912655300724, 16.832534056797204],
              [97.72001704640019, 16.83245703807048],
              [97.71950206226933, 16.833992272112436],
              [97.7188315100156, 16.83384337035908]]]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry55 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.6586038476907, 16.860528287934212],
              [97.65967673129666, 16.861098141222428],
              [97.65939241714108, 16.86132402853694],
              [97.65893107719052, 16.861457507277738],
              [97.65823370284664, 16.861128944053934]]]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry56 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.68058991498577, 16.79465246932631],
              [97.68105661935437, 16.79461138446858],
              [97.68116927213299, 16.795515249284648],
              [97.68067038125622, 16.795576876274477]]]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry57 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.48750305242169, 16.948817055067174],
              [97.48896217412579, 16.94886836923518],
              [97.48821115560162, 16.95100815757116],
              [97.48697733945477, 16.950777246333153]]]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry58 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.4835253364526, 16.950035762773386],
              [97.48457676238644, 16.950092207991506],
              [97.48446410960781, 16.951215977442846],
              [97.48344487018215, 16.95118518932821]]]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry59 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.4642724401437, 16.990122989854136],
              [97.46480888194668, 16.986039235530264],
              [97.46845668620693, 16.98632653773721],
              [97.4716753370248, 16.98798877758147],
              [97.47534459895718, 16.993837282135587],
              [97.46925062007534, 16.99387832362822]]]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry60 = /* color: #00ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.4989963180505, 17.19184981141145],
              [97.5000048286401, 17.191870310362575],
              [97.49980098075497, 17.193284732510197],
              [97.49914652175534, 17.193243734918834]]]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry61 = /* color: #0000ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.40587002105343, 17.676184017584582],
              [97.40912085837948, 17.676245351397178],
              [97.40911012954342, 17.679148461258094],
              [97.40597730941403, 17.679128016986382]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry62 = /* color: #999900 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.28979206151593, 17.596552555508776],
              [97.28982156581509, 17.596335235419414],
              [97.29004955358135, 17.5963786994582],
              [97.29000932044613, 17.596639483471325]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry63 = /* color: #009999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.19748652047741, 17.55872469878367],
              [97.19781374997723, 17.558719584303226],
              [97.19875788755047, 17.559788507577117],
              [97.19875788755047, 17.56049941477713],
              [97.19829118318188, 17.5605454446435],
              [97.19745969838726, 17.56026415083291]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry64 = /* color: #ff00ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.16947352952587, 17.697248395692963],
              [97.16950035161602, 17.696548248601705],
              [97.16999387807476, 17.696538027456054],
              [97.17002606458294, 17.69696220451108],
              [97.17050349778759, 17.696982646753497],
              [97.17049276895153, 17.697325053967795]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry65 = /* color: #ff9999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.17308646506893, 17.698973198960708],
              [97.17348611421215, 17.69926194218497],
              [97.17332786388027, 17.69960434505263],
              [97.172917485901, 17.69947402762027]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry66 = /* color: #99ff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.18486136264431, 17.767274845403442],
              [97.18904560870754, 17.767366799385698],
              [97.18888467616665, 17.770646460495946],
              [97.18490427798855, 17.770523857424806]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry67 = /* color: #9999ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.61474436587918, 17.76929782208888],
              [97.61848872966397, 17.76942042600082],
              [97.61835998363125, 17.77303720357662],
              [97.6144976026498, 17.77280221742582]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry68 = /* color: #ffff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.66122168368923, 17.784755468830106],
              [97.66390389270413, 17.78479633327518],
              [97.66371077365505, 17.788014378965556],
              [97.66106075114834, 17.78790200374392]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry69 = /* color: #99ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.59064203567135, 18.237006438185023],
              [97.59167200393307, 18.23700134322098],
              [97.59167200393307, 18.237454794435674],
              [97.59064740008938, 18.237449699484774]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry70 = /* color: #ff99ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.6065368062936, 18.268235761076863],
              [97.60782426662075, 18.268276513457486],
              [97.60778135127651, 18.271057840822493],
              [97.60647243327725, 18.271037464959935]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry71 = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.53616911239254, 19.120144203525452],
              [96.53627103633511, 19.118988585242047],
              [96.53816467589962, 19.11912543519738],
              [96.53759068317044, 19.120326668831577]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry72 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[96.49784839219677, 19.13182157692892],
              [96.49834728307354, 19.131841849428888],
              [96.49829363889324, 19.132835198879086],
              [96.49778938359844, 19.132809858406155]]]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry73 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.36361584133732, 17.681472704240402],
              [97.36445000834095, 17.6814880372444],
              [97.3644392795049, 17.682032358038807],
              [97.3636131591283, 17.68200935860198]]]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry74 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.36313572592366, 17.693223790305996],
              [97.36387601561177, 17.69321101363735],
              [97.36388406223881, 17.69350998744563],
              [97.36314109034168, 17.693502321456766]]]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry75 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.36293992466557, 17.692500629430086],
              [97.36412277884114, 17.692515961493005],
              [97.36406913466084, 17.693009142151986],
              [97.36291578478443, 17.692991254794237]]]),
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
                                 geometry26,geometry27,geometry28,geometry29,geometry30,
                                 geometry31,geometry32,geometry33,geometry34,geometry35,
                                 geometry36,geometry37,geometry38,geometry39,geometry40,
                                 geometry41,geometry42,geometry43,geometry44,geometry45,
                                 geometry46,geometry47,geometry48,geometry49,geometry50,
                                 geometry51,geometry52,geometry53,geometry54,geometry55,
                                 geometry56,geometry57,geometry58,geometry59,geometry60,
                                 geometry61,geometry62,geometry63,geometry64,geometry65,
                                 geometry66,geometry67,geometry68,geometry69,geometry70,
                                 geometry71,geometry72,geometry73,geometry74,geometry75]);
print(train, 'train');

var training = train.remap(['MDF','Rubber', 'Bamboo', 'Upland_Evergreen','Lowland_Evergreen'], [0, 1, 2, 3, 4 ], 'Class');
print(training, 'training');

var mdf = training.filter(ee.Filter.eq('Class', 0));
var mdf_size = mdf.size();
print(mdf_size,'mdf_size');
print(mdf, 'mdf');

var rubber = training.filter(ee.Filter.eq('Class', 1));
var rubber_size = rubber.size();
print(rubber_size,'rubber_size');

var bamboo = training.filter(ee.Filter.eq('Class', 2));
var bamboo_size = bamboo.size();
print(bamboo_size,'bamboo_size');
print(bamboo);

var up_evg = training.filter(ee.Filter.eq('Class', 3));
var up_evg_size = up_evg.size();
print(up_evg_size,'up_evg_size');

var low_evg = training.filter(ee.Filter.eq('Class', 4));
var low_evg_size = low_evg.size();
//print(low_evg);
print(low_evg_size,'low_evg_size');


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

var sel_bands = ['ND_1_2','SI_1_2','ND_11_3','ND_29_3','SI_9_3','HH_HV_prom','SI_3_2','ND_17_1','ND_37_1',
'B7_savg','SI_39_1','ND_29_1','ND_38_1','ND_6_2','B8A_savg_1','HH_HV_contrast','B4_savg_2','ND_40_1','B5_asm',
'B5_asm_5','B8_savg','B6_savg_5','B7_savg_5','SI_34_1','ND_18_2','SI_6_2','ND_11','B8A_savg_2','B6_savg'];

class_composite =class_composite.select(sel_bands);
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

var rubber_size = (training.filter(ee.Filter.eq('Class', 1))).size();
print(rubber_size,'rubber_size');

var bamboo_size = (training.filter(ee.Filter.eq('Class', 2))).size();
print(bamboo_size,'bamboo_size');

var up_evg_size = (training.filter(ee.Filter.eq('Class', 3))).size();
print(up_evg_size,'up_evg_size');

var low_evg = training.filter(ee.Filter.eq('Class', 4));
var low_evg_size = (training.filter(ee.Filter.eq('Class', 4))).size();
print(low_evg_size,'low_evg_size');


training = training.filter(ee.Filter.eq('Class', 0))//.limit(100)
           .merge(training.filter(ee.Filter.eq('Class', 1)))//.limit(100))
           .merge(training.filter(ee.Filter.eq('Class', 2)))//.limit(100))
           .merge(training.filter(ee.Filter.eq('Class', 3)))//.limit(150))
           .merge(training.filter(ee.Filter.eq('Class', 4)));//.limit(75));
           

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
  description:'RF_IV_Kayah_and_Kayin',
  fileFormat: 'CSV'
});

//----------------------------------------------Selected--Bands-------------------------------------


//----------------------------------------------Generate--Classified--Map-----------------------------------------

var classified = class_composite.classify(classifier).unmask(100);

// Define a palette from the IGBP classification.

//var Palette = ['152106', '225129', '369b47', '30eb5b', '387242', '6a2325', 'c3aa69'];

var Palette = ['#008000', '#00FF00', '#808000', '#FFFF00', '#FF00FF', '6a2325', 'c3aa69']; //green, lime, olive,yellow,fuchsia

Map.addLayer(classified, {palette: Palette, min: 0, max: 5}, 'classification');


//---------------------------------------------Export---Maps--------------------------------------------------------

// Export the image, specifying scale and region.
Export.image.toDrive({
  image: classified,
  description: 'FT_Kayin_Run5',
  scale: 20,
  region: roi,
  maxPixels:653997022
});



