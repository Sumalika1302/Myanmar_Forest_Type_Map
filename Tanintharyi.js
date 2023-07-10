var tcc = ee.Image("users/BiswasS/tcc_myanmar_calib_2018_wgs84_bd"),
    table = ee.FeatureCollection("users/BiswasS/Tanintharyi_TS"),
    geometry = /* color: #d63000 */ee.Feature(
        ee.Geometry.Point([98.51770895784463, 10.015082777297101]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry2 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Point([98.50128310983743, 10.019963932333367]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry3 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Point([98.54018586938943, 10.09971072722213]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry4 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Point([98.58886796300973, 10.117774876771762]),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    geometry5 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Point([98.70392400091256, 10.458643702703508]),
        {
          "system:index": "0",
          "Class": "Upland_Evergreen"
        }),
    geometry6 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Point([98.47857016389932, 10.627820873286431]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry7 = /* color: #00ff00 */ee.Feature(
        ee.Geometry.Point([98.48217505281534, 10.581633829685966]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry8 = /* color: #0000ff */ee.Feature(
        ee.Geometry.Point([98.52973598306741, 10.568682596423066]),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    geometry9 = /* color: #999900 */ee.Feature(
        ee.Geometry.Point([98.54645687406625, 10.561803349919202]),
        {
          "system:index": "0",
          "Class": "Upland_Evergreen"
        }),
    geometry10 = /* color: #009999 */ee.Feature(
        ee.Geometry.Point([98.75549751585092, 10.809906456065077]),
        {
          "system:index": "0",
          "Class": "Upland_Evergreen"
        }),
    geometry11 = /* color: #d63000 */ee.Feature(
        ee.Geometry.Point([98.47105799710425, 10.706911030587607]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry12 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Point([98.56161473786506, 10.643725943729677]),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    geometry13 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Point([98.60150455033454, 10.640304317682789]),
        {
          "system:index": "0",
          "Class": "Upland_Evergreen"
        }),
    geometry14 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Point([98.87217162644538, 11.491699280935022]),
        {
          "system:index": "0",
          "Class": "Upland_Evergreen"
        }),
    geometry15 = /* color: #00ffff */ee.Feature(
        ee.Geometry.MultiPoint(),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry16 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.MultiPoint(),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    geometry17 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Point([98.70362161194953, 11.071648107100982]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry18 = /* color: #00ff00 */ee.Feature(
        ee.Geometry.Point([98.76230834519538, 11.067773354661409]),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    geometry19 = /* color: #0000ff */ee.Feature(
        ee.Geometry.MultiPoint(),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry20 = /* color: #999900 */ee.Feature(
        ee.Geometry.Point([98.60590337311896, 10.735624898749698]),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    geometry21 = /* color: #009999 */ee.Feature(
        ee.Geometry.Point([98.79575629768345, 11.753156591568406]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry22 = /* color: #ff00ff */ee.Feature(
        ee.Geometry.Point([98.7157620960233, 11.751644026104955]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry23 = /* color: #ff9999 */ee.Feature(
        ee.Geometry.Point([98.61439605293248, 12.379974480192224]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry24 = /* color: #99ff99 */ee.Feature(
        ee.Geometry.Point([98.74108214912388, 12.32313872626296]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry25 = /* color: #9999ff */ee.Feature(
        ee.Geometry.Point([98.8087489181516, 12.278325900744987]),
        {
          "system:index": "0",
          "Class": "Upland_Evergreen"
        }),
    geometry26 = /* color: #ffff99 */ee.Feature(
        ee.Geometry.Point([98.7947370582578, 12.213855437244598]),
        {
          "system:index": "0",
          "Class": "MDF"
        }),
    geometry27 = /* color: #99ffff */ee.Feature(
        ee.Geometry.Point([98.67623706397984, 12.17113208543703]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry28 = /* color: #ff99ff */ee.Feature(
        ee.Geometry.Point([98.78834267196629, 12.037412158277794]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry29 = /* color: #d63000 */ee.Feature(
        ee.Geometry.Point([98.7901451164243, 12.037810889188021]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry30 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Point([98.88129730758641, 11.92536639135376]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry31 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Point([98.87355870837605, 12.251434633278533]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry32 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Point([98.89893777007497, 12.281575834268569]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry33 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Point([98.90539652938283, 12.296210108731625]),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    geometry34 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Point([98.91202695006764, 12.307845662498218]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry35 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Point([98.91028887862599, 12.357862183381762]),
        {
          "system:index": "0",
          "Class": "Upland_Evergreen"
        }),
    geometry36 = /* color: #00ff00 */ee.Feature(
        ee.Geometry.Point([98.86083967322743, 12.519721213043413]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry37 = /* color: #0000ff */ee.Feature(
        ee.Geometry.Point([98.82393247718251, 12.607036278797247]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry38 = /* color: #999900 */ee.Feature(
        ee.Geometry.Point([98.71589309806264, 12.646903555542291]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry39 = /* color: #009999 */ee.Feature(
        ee.Geometry.Point([98.71309287185109, 12.645731077320496]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry40 = /* color: #ff00ff */ee.Feature(
        ee.Geometry.Point([98.69646317595875, 12.631022299582883]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry41 = /* color: #ff9999 */ee.Feature(
        ee.Geometry.Point([99.41179467576089, 11.94890055164591]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry42 = 
    /* color: #99ff99 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([99.31117965119424, 12.305089000144163]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry43 = 
    /* color: #9999ff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([99.14943171876016, 12.69266805216438]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry44 = 
    /* color: #ffff99 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([99.10926295655312, 12.969401158547106]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry45 = 
    /* color: #ff99ff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([99.39911319153848, 11.75199093214955]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry46 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([99.1714472903544, 11.885348079931717]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry47 = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([99.14367033379617, 11.968480822351218]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry48 = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([99.10602821248116, 11.913982125801693]),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    geometry49 = 
    /* color: #ffc82d */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.99397088425698, 11.92447177213923]),
        {
          "system:index": "0",
          "Class": "Upland_Evergreen"
        }),
    geometry50 = 
    /* color: #00ffff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.78074599640908, 12.12602890864529]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry51 = 
    /* color: #bf04c2 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.66481624156586, 12.735643252958871]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry52 = 
    /* color: #ff0000 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.73259029895416, 12.737045543113137]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry53 = 
    /* color: #00ff00 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.79741392642609, 12.749435590566934]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry54 = 
    /* color: #0000ff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.65997753650299, 12.801479718256918]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry55 = 
    /* color: #999900 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.72603498012177, 12.770248249697023]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry56 = 
    /* color: #009999 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.75364027530304, 13.440750340061134]),
        {
          "system:index": "0",
          "Class": "Upland_Evergreen"
        }),
    geometry57 = 
    /* color: #ff00ff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.55505488425842, 13.284477510442661]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry58 = 
    /* color: #ff9999 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.63370798141113, 13.087571164127832]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry59 = 
    /* color: #99ff99 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.68634901553742, 12.996904652931226]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry60 = 
    /* color: #9999ff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.86951706916443, 12.97472552918817]),
        {
          "system:index": "0",
          "Class": "Upland_Evergreen"
        }),
    geometry61 = 
    /* color: #ffff99 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.20168842194337, 13.76757846579222]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry62 = 
    /* color: #99ffff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.21209002850313, 13.881260193559992]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry63 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.13794304249544, 14.180500773732012]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry64 = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.08817197201509, 14.216756348888481]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry65 = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.12887449381608, 14.20551599935306]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry66 = 
    /* color: #ffc82d */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.13523132918138, 14.117351068566801]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry67 = 
    /* color: #00ffff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.17879576800127, 14.07132076513644]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry68 = 
    /* color: #bf04c2 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.09837241289873, 14.026074875507819]),
        {
          "system:index": "0",
          "Class": "Upland_Evergreen"
        }),
    geometry69 = 
    /* color: #ff0000 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.18331260798234, 13.652690711798117]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry70 = 
    /* color: #00ff00 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.16738028643388, 13.549427817969743]),
        {
          "system:index": "0",
          "Class": "Upland_Evergreen"
        }),
    geometry71 = 
    /* color: #0000ff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.40638478782364, 14.527268666896502]),
        {
          "system:index": "0",
          "Class": "Upland_Evergreen"
        }),
    geometry72 = 
    /* color: #999900 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.23541005637833, 14.038310517643787]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry73 = 
    /* color: #009999 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.20006390598007, 14.02216651155611]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry74 = 
    /* color: #ff00ff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.60218068149277, 13.886464214074499]),
        {
          "system:index": "0",
          "Class": "Upland_Evergreen"
        }),
    geometry75 = 
    /* color: #ff9999 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.95103951480576, 13.817879969074113]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry76 = 
    /* color: #99ff99 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.93507500674912, 13.622141710631634]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry77 = 
    /* color: #9999ff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([99.16965027835556, 13.439306301740006]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry78 = 
    /* color: #ffff99 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.7490799048204, 13.922040031635552]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry79 = 
    /* color: #99ffff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.63375028159805, 13.880740954426589]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry80 = 
    /* color: #ff99ff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.55859478500076, 13.838903232733138]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry81 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.4843381020324, 13.41626205350045]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry82 = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.4287412735717, 13.450291589369934]),
        {
          "system:index": "0",
          "Class": "Upland_Evergreen"
        }),
    geometry83 = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.46576648681328, 13.468812228590254]),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    geometry84 = 
    /* color: #ffc82d */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.38258582084343, 13.60907632145939]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry85 = 
    /* color: #00ffff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.36412149398491, 13.620139757491128]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry86 = 
    /* color: #bf04c2 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.32932787864372, 13.673747331023463]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry87 = 
    /* color: #ff0000 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.25355010955498, 13.734666916134069]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry88 = 
    /* color: #999900 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.26529282062218, 13.95317223649757]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry89 = 
    /* color: #009999 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.29632597892449, 13.931761030078814]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry90 = 
    /* color: #ff00ff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.55274516074822, 13.651054154170948]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry91 = 
    /* color: #ff9999 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.11823382452911, 14.261973354671508]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry92 = 
    /* color: #99ff99 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.26846971587128, 14.25159574476053]),
        {
          "system:index": "0",
          "Class": "Upland_Evergreen"
        }),
    geometry93 = 
    /* color: #9999ff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.14268215969986, 14.338831277435505]),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    geometry94 = 
    /* color: #ffff99 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.10406103209442, 14.363149452780627]),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    geometry95 = 
    /* color: #99ffff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.10190453604645, 14.36258820394858]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry96 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.0172111041922, 14.875900033600956]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry97 = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.14381136969513, 14.957671961288963]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry98 = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.23208823279327, 14.7923025280126]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry99 = 
    /* color: #ffc82d */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([97.99013152197784, 14.722935857812267]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry100 = 
    /* color: #00ffff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.27526106909698, 14.624398525648587]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry101 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.61575214125624, 10.230369932895282]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry102 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Point([98.59425691821089, 10.096114455773064]),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    geometry103 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Point([98.59824804522505, 10.093980783140571]),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry104 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Point([98.60021142222395, 10.094202601251327]),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry105 = 
    /* color: #00ffff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([98.59429983355513, 10.170147809194265]),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    geometry106 = 
    /* color: #bf04c2 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Point([99.09852025963774, 11.159536487201631]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry108 = 
    /* color: #0000ff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[99.4289684102725, 12.124253787612696],
              [99.4289684102725, 12.112673102772444],
              [99.43634984948149, 12.112673102772444],
              [99.43634984948149, 12.124253787612696]]], null, false),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    class_img = ee.Image("users/BiswasS/classified_urf_pal_urf_s1"),
    geometry109 = 
    /* color: #999900 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.07365892388334, 14.844948655752468],
              [98.07365892388334, 14.844108624471192],
              [98.07497857071867, 14.844108624471192],
              [98.07497857071867, 14.844948655752468]]], null, false),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry110 = 
    /* color: #009999 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.07265041329374, 14.84219002226681],
              [98.07265041329374, 14.841204787491545],
              [98.07406125523558, 14.841204787491545],
              [98.07406125523558, 14.84219002226681]]], null, false),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry111 = 
    /* color: #ff00ff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.06912599064817, 14.838132381800195],
              [98.06912599064817, 14.836721912585798],
              [98.07112155415525, 14.836721912585798],
              [98.07112155415525, 14.838132381800195]]], null, false),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry112 = 
    /* color: #ff9999 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.36855439402571, 13.672280167968614],
              [98.36855439402571, 13.671529579779246],
              [98.3696326420497, 13.671529579779246],
              [98.3696326420497, 13.672280167968614]]], null, false),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry113 = 
    /* color: #99ff99 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.36677877165785, 13.674594466494296],
              [98.36677877165785, 13.672770133968566],
              [98.36774436690321, 13.672770133968566],
              [98.36774436690321, 13.674594466494296]]], null, false),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry114 = 
    /* color: #9999ff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.35357693888655, 13.692138611226996],
              [98.35357693888655, 13.691012823036584],
              [98.3550628826808, 13.691012823036584],
              [98.3550628826808, 13.692138611226996]]], null, false),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry115 = 
    /* color: #ffff99 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.33638397910109, 13.695500307776365],
              [98.33638397910109, 13.694093091813253],
              [98.33952752806654, 13.694093091813253],
              [98.33952752806654, 13.695500307776365]]], null, false),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry116 = 
    /* color: #99ffff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[99.29563848235121, 12.444068039892725],
              [99.29563848235121, 12.433088140599294],
              [99.30980054594984, 12.433088140599294],
              [99.30980054594984, 12.444068039892725]]], null, false),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry117 = 
    /* color: #ff99ff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.51780859686842, 10.115501708639316],
              [98.51780859686842, 10.114392690027032],
              [98.51962177016249, 10.114392690027032],
              [98.51962177016249, 10.115501708639316]]], null, false),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    geometry118 = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.54428736426344, 10.143178403069394],
              [98.54428736426344, 10.142523610955873],
              [98.54475943305006, 10.142523610955873],
              [98.54475943305006, 10.143178403069394]]], null, false),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    class_img1 = ee.Image("users/BiswasS/classified_Run2"),
    geometry119 = 
    /* color: #98ff00 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.75650910593977, 10.95541917994232],
              [98.75650910593977, 10.952375038627107],
              [98.76162676074019, 10.952375038627107],
              [98.76162676074019, 10.95541917994232]]], null, false),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry120 = 
    /* color: #0b4a8b */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.79965512015333, 10.940924995084275],
              [98.79965512015333, 10.940156025062237],
              [98.80117325045576, 10.940156025062237],
              [98.80117325045576, 10.940924995084275]]], null, false),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    geometry121 = 
    /* color: #ffc82d */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.78265527941694, 10.930754415255903],
              [98.78265527941694, 10.928394748757002],
              [98.78668932177534, 10.928394748757002],
              [98.78668932177534, 10.930754415255903]]], null, false),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry122 = 
    /* color: #00ffff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.87343196131697, 10.864623990467114],
              [98.87343196131697, 10.861863408243465],
              [98.87742308833113, 10.861863408243465],
              [98.87742308833113, 10.864623990467114]]], null, false),
        {
          "system:index": "0",
          "Class": "Upland_Evergreen"
        }),
    geometry123 = 
    /* color: #bf04c2 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.91840724207869, 12.268905563785678],
              [98.91840724207869, 12.267118069715764],
              [98.92073003508558, 12.267118069715764],
              [98.92073003508558, 12.268905563785678]]], null, false),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    geometry124 = 
    /* color: #ff0000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.92387358405104, 12.2751590766308],
              [98.92387358405104, 12.274257489638888],
              [98.92539171435347, 12.274257489638888],
              [98.92539171435347, 12.2751590766308]]], null, false),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    geometry126 = 
    /* color: #0000ff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.92988709666243, 12.27083981790056],
              [98.92988709666243, 12.26979144344918],
              [98.93189338900557, 12.26979144344918],
              [98.93189338900557, 12.27083981790056]]], null, false),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    geometry127 = 
    /* color: #999900 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.93479017474165, 12.262138183586737],
              [98.93479017474165, 12.260209107679167],
              [98.93710760333052, 12.260209107679167],
              [98.93710760333052, 12.262138183586737]]], null, false),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry125 = 
    /* color: #009999 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.91553191401472, 11.833005311504698],
              [98.91553191401472, 11.812842951798043],
              [98.94634513117781, 11.812842951798043],
              [98.94634513117781, 11.833005311504698]]], null, false),
        {
          "system:index": "0",
          "Class": "Upland_Evergreen"
        }),
    geometry128 = 
    /* color: #ff00ff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[99.01642588831892, 11.729773110479227],
              [99.01642588831892, 11.728370717581786],
              [99.01794938303938, 11.728370717581786],
              [99.01794938303938, 11.729773110479227]]], null, false),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry107 = 
    /* color: #ff9999 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.96395115115156, 11.727866484685878],
              [98.96395115115156, 11.712991199983003],
              [98.99012951113691, 11.712991199983003],
              [98.99012951113691, 11.727866484685878]]], null, false),
        {
          "system:index": "0",
          "Class": "Upland_Evergreen"
        }),
    geometry129 = 
    /* color: #9999ff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.75124661185255, 12.760403337819115],
              [98.75124661185255, 12.756824673159583],
              [98.7555596039485, 12.756824673159583],
              [98.7555596039485, 12.760403337819115]]], null, false),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry130 = 
    /* color: #ffff99 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[99.10099057414045, 11.333919007205402],
              [99.10099057414045, 11.32912202593177],
              [99.10835055567732, 11.32912202593177],
              [99.10835055567732, 11.333919007205402]]], null, false),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry131 = 
    /* color: #99ffff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.74799309231749, 10.409537690185635],
              [98.74799309231749, 10.40811313257279],
              [98.74961314656248, 10.40811313257279],
              [98.74961314656248, 10.409537690185635]]], null, false),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry132 = 
    /* color: #ff99ff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.74667344548216, 10.393978002979384],
              [98.74667344548216, 10.392516439451873],
              [98.74910352684965, 10.392516439451873],
              [98.74910352684965, 10.393978002979384]]], null, false),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry133 = 
    /* color: #d63000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.70449839093199, 10.35602262466472],
              [98.70449839093199, 10.35509386596385],
              [98.70530841805449, 10.35509386596385],
              [98.70530841805449, 10.35602262466472]]], null, false),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    geometry134 = 
    /* color: #98ff00 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.70051799275389, 10.35628647606657],
              [98.70051799275389, 10.35488278405727],
              [98.7018161819171, 10.35488278405727],
              [98.7018161819171, 10.35628647606657]]], null, false),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry135 = 
    /* color: #0b4a8b */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.6917847202014, 10.35264530711224],
              [98.6917847202014, 10.350903863537898],
              [98.69359789349546, 10.350903863537898],
              [98.69359789349546, 10.35264530711224]]], null, false),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry136 = 
    /* color: #ffc82d */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.5789495513629, 10.316906839649578],
              [98.5789495513629, 10.310552439920306],
              [98.58832655407896, 10.310552439920306],
              [98.58832655407896, 10.316906839649578]]], null, false),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry137 = 
    /* color: #00ffff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.52696834065428, 10.309327989357199],
              [98.52696834065428, 10.306330176508304],
              [98.52947888829222, 10.306330176508304],
              [98.52947888829222, 10.309327989357199]]], null, false),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry138 = 
    /* color: #bf04c2 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.66612939097395, 11.711961666178098],
              [98.66612939097395, 11.709072647776974],
              [98.66968063570967, 11.709072647776974],
              [98.66968063570967, 11.711961666178098]]], null, false),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry139 = 
    /* color: #ff0000 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.66112975337019, 11.715386427054218],
              [98.66112975337019, 11.712161269970576],
              [98.66582898356428, 11.712161269970576],
              [98.66582898356428, 11.715386427054218]]], null, false),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry140 = 
    /* color: #00ff00 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.64487556673994, 11.697285139892333],
              [98.64487556673994, 11.69526797591786],
              [98.6484160826396, 11.69526797591786],
              [98.6484160826396, 11.697285139892333]]], null, false),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry141 = 
    /* color: #0000ff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.6873724863719, 11.689137598310637],
              [98.6873724863719, 11.68567048662512],
              [98.69338063456526, 11.68567048662512],
              [98.69338063456526, 11.689137598310637]]], null, false),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry142 = 
    /* color: #999900 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.69481829859724, 10.33256270967388],
              [98.69481829859724, 10.331892476027022],
              [98.6955854103755, 10.331892476027022],
              [98.6955854103755, 10.33256270967388]]], null, false),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    geometry143 = 
    /* color: #009999 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.68305949427595, 10.331077111120097],
              [98.68305949427595, 10.330143001151347],
              [98.68395535208693, 10.330143001151347],
              [98.68395535208693, 10.331077111120097]]], null, false),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    geometry144 = 
    /* color: #ff00ff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.68228970028868, 10.333214470943872],
              [98.68228970028868, 10.332554793536781],
              [98.68322847344389, 10.332554793536781],
              [98.68322847344389, 10.333214470943872]]], null, false),
        {
          "Class": "Oil_Palm",
          "system:index": "0"
        }),
    geometry145 = 
    /* color: #ff9999 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.72891453959456, 11.61470600674822],
              [98.72891453959456, 11.613161157682901],
              [98.73059896685591, 11.613161157682901],
              [98.73059896685591, 11.61470600674822]]], null, false),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry146 = 
    /* color: #99ff99 */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.74110249735823, 11.583991330619076],
              [98.74110249735823, 11.57903042282313],
              [98.74554423548689, 11.57903042282313],
              [98.74554423548689, 11.583991330619076]]], null, false),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    geometry147 = 
    /* color: #9999ff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.39317707278242, 12.347946778694011],
              [98.39317707278242, 12.346259389330921],
              [98.39614896037092, 12.346259389330921],
              [98.39614896037092, 12.347946778694011]]], null, false),
        {
          "Class": "Rubber",
          "system:index": "0"
        }),
    geometry149 = 
    /* color: #99ffff */
    /* shown: false */
    /* displayProperties: [
      {
        "type": "rectangle"
      }
    ] */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.39599875666609, 12.343576313039174],
              [98.39599875666609, 12.342376256345254],
              [98.39827863432875, 12.342376256345254],
              [98.39827863432875, 12.343576313039174]]], null, false),
        {
          "Class": "Mangrove",
          "system:index": "0"
        }),
    gc_map = ee.Image("users/BiswasS/tanintharyi_2016_v1_GC"),
    image = ee.Image("users/BiswasS/classified_urf_pal_urf_s1"),
    geometry151 = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[99.10692572593689, 13.323219399824326],
              [99.10852432250977, 13.323198519672454],
              [99.10849213600159, 13.324472205639257],
              [99.10712957382202, 13.324440885572956]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry153 = 
    /* color: #00ffff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.92496779221139, 14.076266706068466],
              [98.92741396683297, 14.075350916426999],
              [98.92734959381661, 14.078368845681373],
              [98.92494633453927, 14.078202340278722]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry148 = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.91457704760542, 13.938258918285378],
              [98.92024187304487, 13.930761483619515],
              [98.93225816943159, 13.939008648362591],
              [98.92384676196089, 13.941507731033829]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    TP_FE = ee.Image("users/BiswasS/TP_FE_val_0"),
    geometry150 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.MultiPoint(),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry152 = 
    /* color: #ffc82d */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.93746973704637, 14.033571890558646],
              [98.94065620135606, 14.033342900778786],
              [98.94031287860216, 14.03594504389766],
              [98.93777014445604, 14.035965860923499]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry155 = 
    /* color: #bf04c2 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.91449108379922, 14.077411437958977],
              [98.91451254147134, 14.076953545890968],
              [98.91495778816781, 14.076958749215082],
              [98.91495778816781, 14.077416641272672],
              [98.91515627163491, 14.077427047899683],
              [98.91516163605294, 14.07804103805417],
              [98.91487195747933, 14.078046241353515],
              [98.91487732189736, 14.07770282334267],
              [98.9146144654139, 14.0776976200355],
              [98.91459300774179, 14.077416641272672]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry156 = 
    /* color: #ff0000 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.91894355076394, 14.082742170692894],
              [98.91894891518197, 14.081836813434643],
              [98.91901865261636, 14.081847219860284],
              [98.91901865261636, 14.081774374870754],
              [98.91913130539498, 14.081758765227113],
              [98.91913130539498, 14.08130608509756],
              [98.91957655209146, 14.081300881872462],
              [98.91959264534555, 14.082091770726693],
              [98.9194048907145, 14.082081364312183],
              [98.9194048907145, 14.082742170692894],
              [98.91905083912454, 14.082742170692894]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry157 = 
    /* color: #00ff00 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.94865706223092, 14.085200665831913],
              [98.94960119980416, 14.08520586896816],
              [98.94961192864022, 14.085632525737122],
              [98.95015373486123, 14.085648135115987],
              [98.95016446369729, 14.085913494393523],
              [98.94997134464822, 14.085913494393523],
              [98.94996598023019, 14.086178853362684],
              [98.94943490284524, 14.086173650248599],
              [98.94942417400918, 14.085981134944358],
              [98.94922032612405, 14.085996744299395],
              [98.94923641937814, 14.085632525737122],
              [98.94886627453408, 14.08562211948394],
              [98.94886091011605, 14.08539318179416],
              [98.94866779106698, 14.085367166133071],
              [98.94865706223092, 14.0852683065939]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry158 = 
    /* color: #0000ff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.9398647810801, 14.089261677606315],
              [98.94070699471078, 14.089277286737072],
              [98.94071235912881, 14.089990102570981],
              [98.9398808743342, 14.089979696516421],
              [98.93987550991616, 14.08952703268402]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry159 = 
    /* color: #999900 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.87629642742715, 14.090903232011282],
              [98.87905373829446, 14.092901177704],
              [98.87817397373757, 14.09363999694194],
              [98.87565269726358, 14.09195423687362]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry160 = 
    /* color: #009999 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.19663334608244, 14.918313280843623],
              [98.19660115957426, 14.918043733260708],
              [98.19629002332853, 14.918033366039234],
              [98.19624710798429, 14.917483902585921],
              [98.19684792280363, 14.9175461060662],
              [98.19682646513151, 14.917141783122833],
              [98.19791007757352, 14.917172884914713],
              [98.19793153524564, 14.916841132236321],
              [98.19828558683561, 14.916820397676936],
              [98.19833923101591, 14.916436807967672],
              [98.19914389372038, 14.916447175266118],
              [98.19921899557279, 14.917338761062],
              [98.19958377599882, 14.91734912831696],
              [98.19954086065458, 14.917711981925645],
              [98.19999147176908, 14.917691247450202],
              [98.19999147176908, 14.918634664058644],
              [98.19701958418058, 14.91860356247818],
              [98.19701958418058, 14.918313280843623]]]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry161 = 
    /* color: #ff00ff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.14994145155119, 14.984694620458544],
              [98.15427590131925, 14.984497704344449],
              [98.15377164602445, 14.985181727962493],
              [98.1514756751077, 14.98546155517624]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    geometry162 = 
    /* color: #ff9999 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.1217567992227, 14.990555382915646],
              [98.12323201418089, 14.990633110782223],
              [98.12314081907438, 14.990881839765537],
              [98.12218059635364, 14.990975119698634],
              [98.12175143480466, 14.990912930868117],
              [98.12168169704758, 14.990773020820725]]]),
        {
          "Class": "Upland_Evergreen",
          "system:index": "0"
        }),
    table2 = ee.FeatureCollection("users/BiswasS/Tanintharyi_TS_envelope_dis"),
    table3 = ee.FeatureCollection("users/BiswasS/gadm36_THA_0"),
    geometry154 = 
    /* color: #d63000 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[99.17938668772578, 12.116930407078058],
              [99.18166120097041, 12.117161182821201],
              [99.18145735308528, 12.118776607435239],
              [99.17939741656184, 12.118671710029924]]]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry163 = 
    /* color: #98ff00 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[99.23181046292186, 12.13241947462123],
              [99.23283506676555, 12.132167733658017],
              [99.2331515674293, 12.132408985419174],
              [99.23328567788005, 12.133090782693962],
              [99.23311938092112, 12.133531327697755],
              [99.23224498078227, 12.133442169839093],
              [99.23161197945475, 12.133033092222872]]]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry164 = 
    /* color: #0b4a8b */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[99.23624683663249, 12.12902357389131],
              [99.23809219643474, 12.128918680515925],
              [99.23819948479533, 12.129946633815122],
              [99.2392938260734, 12.13089066906762],
              [99.238499892205, 12.132170355960952],
              [99.23858572289348, 12.133240253401874],
              [99.23650432869792, 12.13330318841171]]]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry165 = 
    /* color: #ffc82d */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[99.19594932839274, 12.082824543047508],
              [99.19749428078532, 12.083328117761553],
              [99.197075856179, 12.08463950579946],
              [99.19708658501506, 12.08488080049846],
              [99.19617463395, 12.085457808679067],
              [99.19518758103251, 12.084712943339584]]]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry166 = 
    /* color: #00ffff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[99.19487108036876, 12.058292488713398],
              [99.19578303143382, 12.057526563563187],
              [99.1973816280067, 12.05895349085187],
              [99.19634093090892, 12.059740396035433]]]),
        {
          "Class": "Lowland_Evergreen",
          "system:index": "0"
        }),
    geometry167 = 
    /* color: #bf04c2 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.95748217150569, 13.903226870962454],
              [98.95889837786555, 13.904705727058229],
              [98.95851213976741, 13.905143133388474],
              [98.95713884875178, 13.90412251733198]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry168 = 
    /* color: #ff0000 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.96546442553401, 13.905497223621753],
              [98.96548588320613, 13.90319562742189],
              [98.96611888453364, 13.90319562742189],
              [98.96609742686152, 13.905538881260638]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry169 = 
    /* color: #00ff00 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.96747071787715, 13.897915408492224],
              [98.96807153269648, 13.897946652745373],
              [98.96807153269648, 13.898571536923276],
              [98.96757800623774, 13.898561122200801]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry170 = 
    /* color: #0000ff */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.96796424433589, 13.893608868598612],
              [98.968704534024, 13.893614076071264],
              [98.96870989844203, 13.894238971939613],
              [98.96797497317195, 13.894238971939613]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry171 = 
    /* color: #999900 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.9740904097259, 13.788638952064876],
              [98.97582848116755, 13.789639236104156],
              [98.97402603670955, 13.791806503485532],
              [98.97209484621882, 13.791660630351085]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    geometry172 = 
    /* color: #009999 */
    /* shown: false */
    ee.Feature(
        ee.Geometry.Polygon(
            [[[98.98089249178767, 13.746602312902723],
              [98.99350981246221, 13.746602508909522],
              [98.99926025912166, 13.745935334607168],
              [99.00269348666072, 13.756606759359007],
              [98.97282440707087, 13.756106547190596]]]),
        {
          "Class": "MDF",
          "system:index": "0"
        }),
    image2 = ee.Image("users/BiswasS/FT_Tanintharyi_Run12"),
    table4 = ee.FeatureCollection("users/BiswasS/Myanmar/Tanintharyi"),
    table5 = ee.FeatureCollection("users/BiswasS/Myanmar/Mon"),
    geometry173 = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.88152424505847, 15.08057742631073],
              [97.88152692726749, 15.080458293816495],
              [97.88166908434528, 15.080455703978933],
              [97.88166640213626, 15.080592965326797]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry174 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.88234231880801, 15.080217438787336],
              [97.88261858633655, 15.080199309903135],
              [97.88261858633655, 15.080380598675609],
              [97.88235304764407, 15.080380598675609]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry175 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.88089660814899, 15.079002800128478],
              [97.8810441296448, 15.079002800128478],
              [97.8810441296448, 15.079137472560555],
              [97.88091270140308, 15.079140062414186]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry176 = /* color: #ffc82d */ee.Geometry.Polygon(
        [[[97.88076786211627, 15.078308717779914],
          [97.88088856152194, 15.078326846825306],
          [97.88084832838672, 15.078466699409134],
          [97.8806471627106, 15.078391593403316]]]),
    geometry177 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.88159398249286, 15.077894339178483],
              [97.88189975432056, 15.077902108784693],
              [97.88189707211154, 15.078041961647825],
              [97.88159934691089, 15.07803419204673]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry178 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.87992028406757, 15.073716839808405],
              [97.88003025463718, 15.073504466291318],
              [97.88013486078876, 15.073561444572807],
              [97.88002489021915, 15.073784177708585]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry179 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.88155106714862, 15.072779286830158],
              [97.88155374935764, 15.072525473434764],
              [97.88194535187381, 15.072530653303],
              [97.8819265764107, 15.072701588884124],
              [97.88182733467715, 15.072787056623193]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry180 = /* color: #00ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.88437006882327, 15.070291643503024],
              [97.88446126392978, 15.070141425692158],
              [97.88459805658954, 15.070043007068918],
              [97.88468388727802, 15.070112936095374],
              [97.88432447127002, 15.070584308933444],
              [97.8842493694176, 15.070418551570969]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry181 = /* color: #0000ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.88015095404285, 15.059373381426983],
              [97.88012949637073, 15.059109191655843],
              [97.88065520933765, 15.059109191655843],
              [97.8806659381737, 15.059420003117262]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry182 = /* color: #999900 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.8740381996979, 15.033675507398234],
              [97.87431178501743, 15.033675507398234],
              [97.87431178501743, 15.033908643855167],
              [97.87404088190692, 15.033898282240273]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry183 = /* color: #009999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.92156962565082, 15.071479137464896],
              [97.92182979992526, 15.071481727411769],
              [97.92180834225314, 15.071813240351132],
              [97.92155085018771, 15.07179252080755]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry184 = /* color: #ff00ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.94632641485828, 15.058789314386484],
              [97.94680653027194, 15.058776363879627],
              [97.94680921248096, 15.059146748064894],
              [97.94646588972705, 15.059157108452416]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry185 = /* color: #ff9999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.94900325945514, 15.072254825143855],
              [97.94916150978702, 15.071938852540871],
              [97.94937072209018, 15.072086479143293],
              [97.94918296745914, 15.07226518489338]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry186 = /* color: #99ff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.95282808951038, 15.075698119112056],
              [97.95268325022357, 15.075431359705712],
              [97.95280126742023, 15.075356252628033],
              [97.95293269566196, 15.075317404129176],
              [97.95310435703891, 15.07538733142201]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry187 = /* color: #9999ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.95900521687167, 15.075225462653627],
              [97.95937804392474, 15.075305749578154],
              [97.95920638254779, 15.075536250580177],
              [97.95895961931842, 15.075512941501428]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry188 = /* color: #ffff99 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.95769898108142, 15.080528219419094],
              [97.9578921001305, 15.080538578765655],
              [97.95796183756488, 15.080776843597404],
              [97.95766679457324, 15.080782023264693]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry189 = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.92391119412082, 15.069756815813706],
              [97.9239085119118, 15.069484869015486],
              [97.92454151323932, 15.069484869015486],
              [97.92452541998523, 15.069741276006027],
              [97.92416868618625, 15.069756815813706]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry190 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.9232406418671, 15.07052344491689],
              [97.92345253637927, 15.070215239629697],
              [97.923763672625, 15.070388767031192],
              [97.92358932903903, 15.070684022284606]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry191 = /* color: #d63000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.01421848944324, 15.101372792834276],
              [98.01467446497577, 15.100772008809031],
              [98.01494805029529, 15.10094810085461],
              [98.01449743918079, 15.10154888438159]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry192 = /* color: #98ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.01792530230182, 15.102662401078561],
              [98.01833836249011, 15.102807416776724],
              [98.01792530230182, 15.103232105037266],
              [98.0175444286217, 15.10319067207364]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry193 = /* color: #0b4a8b */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.01746396235126, 15.100606274985688],
              [98.01791993788379, 15.100823800602303],
              [98.01767317465442, 15.10109311772365],
              [98.01736203840869, 15.10084451731608]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry194 = /* color: #ffc82d */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.02005497625964, 15.102201457665867],
              [98.01986185721057, 15.101947679404766],
              [98.01993159464496, 15.101776767343702],
              [98.02023736647266, 15.101968396008877],
              [98.02023736647266, 15.102128949622212]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry195 = /* color: #00ffff */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.01400927714008, 15.09959115249508],
              [98.01461009195941, 15.099746528701036],
              [98.01436332873004, 15.100290344526606],
              [98.01373032740253, 15.100119431131505]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry196 = /* color: #bf04c2 */ee.Feature(
        ee.Geometry.Polygon(
            [[[98.00697652510303, 15.095437386448566],
              [98.00676731279987, 15.095199138052434],
              [98.00712672880786, 15.09500232395841],
              [98.00734398773807, 15.095284596746998]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry197 = /* color: #ff0000 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.99142239502567, 15.091420793529494],
              [97.99142239502567, 15.09123433476045],
              [97.99186764172214, 15.090928749201776],
              [97.99209294727939, 15.090923569781742],
              [97.99269912651675, 15.0913016671126],
              [97.99255428722995, 15.091415614121459]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry198 = /* color: #00ff00 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.98553226402896, 15.089721940921093],
              [97.9842233460297, 15.089033073035823],
              [97.98462567738193, 15.088447792551651],
              [97.98600969723361, 15.089203995350994]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry199 = /* color: #0000ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.89974717310565, 15.07334130112812],
              [97.90021924189227, 15.072849214957353],
              [97.90091661623615, 15.073118567528665],
              [97.90001539400714, 15.073833386160654]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry200 = /* color: #999900 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.87297604492801, 15.025085546563156],
              [97.87342129162448, 15.025137356772248],
              [97.8735339444031, 15.025435265230536],
              [97.87356076649326, 15.025702087235855],
              [97.87324694803851, 15.025699496732539]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry201 = /* color: #009999 */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.87324158362048, 15.015259513109907],
              [97.87365196159976, 15.015440857131527],
              [97.87350175789493, 15.015684376004069],
              [97.873155752932, 15.015604066619343]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        }),
    geometry202 = /* color: #ff00ff */ee.Feature(
        ee.Geometry.Polygon(
            [[[97.86848602703708, 14.999378361193083],
              [97.8686335485329, 14.999199594366509],
              [97.86927191427844, 14.999671123934137],
              [97.86907611302036, 14.99995093219698]]]),
        {
          "Class": "Bamboo",
          "system:index": "0"
        });
var Palette = ['#008000', '#00FF00', '#808000', '#FFFF00', '#FF00FF', '6a2325', 'c3aa69']; //green, lime, olive,yellow,fuchsia
Map.addLayer(image2, {palette: Palette, min: 0, max: 5}, 'GC_Map');

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
                                 geometry81,geometry82,geometry83,geometry84,geometry85,
                                 geometry86,geometry87,geometry88,geometry89,geometry90,
                                 geometry91,geometry92,geometry93,geometry94,geometry95,
                                 geometry96,geometry97,geometry98,geometry99,geometry100,
                                 geometry101,geometry102,geometry103,geometry104,geometry105,
                                 geometry106,geometry107,geometry108, geometry109,geometry110,
                                 geometry111,geometry112,geometry113,geometry114,geometry115,
                                 geometry116,geometry117,geometry118,geometry119,geometry120,
                                 geometry121,geometry122,geometry123,geometry124,geometry125,
                                 geometry126,geometry127,geometry128,geometry129,geometry130,
                                 geometry131,geometry132,geometry133,geometry134,geometry135,
                                 geometry136,geometry137,geometry138,geometry139,geometry140,
                                 geometry141,geometry142,geometry143,geometry144,geometry145,
                                 geometry146,geometry147,geometry148,geometry149,geometry150,
                                 geometry151,geometry152,geometry153,geometry154,geometry155,
                                 geometry156,geometry157,geometry158,geometry159,geometry160,
                                 geometry161,geometry162,geometry163,geometry164,geometry165, 
                                 geometry166,geometry167,geometry168,geometry169,geometry170,
                                 geometry171,geometry172,geometry173,geometry174,geometry175, 
                                 geometry176,geometry177,geometry178,geometry179,geometry180,
                                 geometry181,geometry182,geometry183,geometry184,geometry185, 
                                 geometry186,geometry187,geometry188,geometry189,geometry190,
                                 geometry191,geometry192,geometry193,geometry194,geometry195, 
                                 geometry196,geometry197,geometry198,geometry199,geometry200,
                                 geometry201,geometry202]);
                                 

print(train.size());    

var training = train.remap(['Mangrove','Lowland_Evergreen','Upland_Evergreen', 'Oil_Palm','Rubber', 'MDF', 'Bamboo'], [0, 1, 2, 3, 4, 5, 6], 'Class');
print(training.limit(2));
print(training.size());

var mangrove = training.filter(ee.Filter.eq('Class', 0)).randomColumn();
var mangrove_size = mangrove.size();
//print(mangrove_size,'mangrove_size');

var low_evg = training.filter(ee.Filter.eq('Class', 1)).randomColumn();
var low_evg_size = low_evg.size();
print(low_evg);
//print(low_evg_size,'low_evg_size');
 
var up_evg = training.filter(ee.Filter.eq('Class', 2)).randomColumn();
var up_evg_size = up_evg.size();
//print(up_evg_size,'up_evg_size');

var op = training.filter(ee.Filter.eq('Class', 3)).randomColumn();
var op_size = op.size();
//print(op_size,'op_size');

var rubber = training.filter(ee.Filter.eq('Class', 4)).randomColumn();
var rubber_size = rubber.size();
//print(rubber_size,'rubber_size');

var mdf = training.filter(ee.Filter.eq('Class', 5)).randomColumn();
var mdf_size = mdf.size();
//print(mdf_size,'mdf_size');

var bamboo = training.filter(ee.Filter.eq('Class', 6)).randomColumn();
var bamboo_size = bamboo.size();
print(bamboo_size, 'bamboo size');


//----------------------------------------------------ROI--------------------------------------------

var state = ee.FeatureCollection(table4);
//print(state);


var roi = table4 ;
Map.centerObject(table4,10);


var empty = ee.Image().byte();
var outline_roi = empty.paint({
  featureCollection: roi,
  color: 'AREA',
  width: 4
});

var palette = ['FF0000'];
//Map.addLayer(outline_roi, {palette: palette, max: 14}, 'different color edges');


//----------------------------------------------------TP_Forest----------------------------------------------
//Load TP_PCT_Map
var tc = ee.Image(tcc);
var tc_gte10 = tc.gte(10);
var tc_gte25 = tc.gte(25);
var tp_fe = ee.Image(TP_FE);
//print(tp_fe);
var tp_fe_0 = tp_fe.eq(0);
//Map.addLayer(tp_fe_0, {}, 'TP_FE');


//Map.addLayer(tc, {}, 'PCT');
//Map.addLayer(tc_gte10.updateMask(tc_gte10), {}, 'PCT10');
//Map.addLayer(tc_gte25.updateMask(tc_gte25), {}, 'PCT25');


//---------------------------------------------------Rainfall----------------------------------------------
//Load CHIRPS data
//-----------------------------------------------------SRTM------------------------------------------------
// Load SRTM
var dataset = ee.Image('CGIAR/SRTM90_V4');
var elevation = dataset.select('elevation').clip(roi);
var slope = ee.Terrain.slope(elevation);

//Map.addLayer(elevation, {}, 'elevation');
//print(elevation);

var elev5m = elevation.lte(5);
//Map.addLayer(elev5m, {}, 'elev5m');
//-----------------------------------------------------GEDI-------------------------------------------
// Load GEDI
var gedi = ee.ImageCollection('users/potapovpeter/GEDI_V27');
//print(gedi);

var gedi_sasia= gedi.filterMetadata('system:index', 'equals', 'GEDI_SASIA_v27').first();
//print(gedi_sasia,"gedi_sasia");

var gedi_roi  = ee.Image(gedi_sasia).clip(roi).rename('ht');
//print(gedi_roi);
//Map.addLayer(gedi_roi, {min:0, max:3}, 'gedi_roi');

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
                  .filterDate('2017-01-01', '2018-01-01') // No data for 2018 to 2019
                  .select('HH', 'HV');
print(palsar,'PALSAR');

var pal_HH = palsar.select('HH');
//print(pal_HH, 'pal_HH');
//Map.addLayer(pal_HH, {},'pal_HH');

var pal_HV = palsar.select('HV');
//print(pal_HV, 'pal_HV');
//Map.addLayer(pal_HV, {},'pal_HV');

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

var pal_HH_rf = toDB(RefinedLee(pal_HH_gn)).rename('HH_rf');
//print(pal_HH_rf,'pal_HH_rf');
//Map.addLayer(pal_HH_rf.clip(roi),{min:-25.0, max:0.0}, "pal_HH_rf");

var pal_HV_urf = toDB(pal_HV_gn).rename('HV_urf');
//print(pal_HV_rf, 'pal_HV_rf');
//Map.addLayer(pal_HV_rf,{min:-25.0, max:0.0}, "pal_HV_rf");

var pal_HV_rf = toDB(RefinedLee(pal_HV_gn)).rename('HV_rf');
//print(pal_HV_rf, 'pal_HV_rf');
//Map.addLayer(pal_HV_rf,{min:-25.0, max:0.0}, "pal_HV_rf");

var pal_HH_HV_urf = (pal_HH_urf.divide(pal_HV_urf)).rename('HH_HV_urf');
//print(pal_HH_HV, 'pal_HH_HV');
//Map.addLayer(pal_HH_HV,{min:-1.0, max:1.0}, "pal_HH_HV");

var pal_HH_HV_rf = (pal_HH_rf.divide(pal_HV_rf)).rename('HH_HV_rf');
//print(pal_HH_HV, 'pal_HH_HV');
//Map.addLayer(pal_HH_HV,{min:-1.0, max:1.0}, "pal_HH_HV");


var glcmHH = pal_HH_gn.unitScale(0,1).multiply(255).toByte().glcmTexture({size:3});
//print(glcmHH, 'glcmHH');

var glcmHV = pal_HV_gn.unitScale(0,1).multiply(255).toByte().glcmTexture({size:3});
var glcmHH_HV =pal_HH_HV.unitScale(0,1).multiply(255).toByte().glcmTexture({size:3});

var pal_variables = pal_HH_gn.addBands(pal_HV_gn).addBands(pal_HH_HV)
                             .addBands(glcmHH).addBands(glcmHV).addBands(glcmHH_HV).float();

//----------------------------------------------------Sentinel-1----------------------------------------------------
//Load Sentinel-1
var s1_col = ee.ImageCollection('COPERNICUS/S1_GRD')
                            .filterBounds(roi)
                            .filter(ee.Filter.eq('instrumentMode', 'IW'))
                            .filterDate('2016-05-01', '2020-04-30')
                            .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VV'))
                            .filter(ee.Filter.listContains('transmitterReceiverPolarisation', 'VH'))
                            .filter(ee.Filter.eq('orbitProperties_pass', 'DESCENDING'))
                            .map(function(image) {
          var edge = image.lt(-30.0);
          var maskedImage = image.mask().and(edge.not());
          return image.updateMask(maskedImage);
        });
                            
//print(s1_col, 'S1_col');
//Map.addLayer(s1_col,{min:-1.0, max:1.0}, "s1_col");

var s1_col_VV = s1_col.select('VV');
var s1_col_VH = s1_col.select('VH');
//Map.addLayer(s1_col.select('VV'), {}, 's1_col');
//Map.addLayer(s1_col.select('VH'), {}, 's1_col');

// Functions to convert from/to dB
function toNatural(img) {
  return ee.Image(10.0).pow(img.select(0).divide(10.0));
}

/*
// convert sigma naught to gamma naught for S1

//function toGamma0(image) {
//  return image.select(1).subtract(image.select('angle').multiply(Math.PI/180.0).cos().log10().multiply(10.0));
//}

//Function applies Refined Lee to all images in collection. 
Shows strips if applied to entire collection at once. 
Apply to monthly composite to get rid of strips.

var s1_VV_urf = s1_col_VV.map(function(image){
  return toDB(toNatural(image)).set("system:time_start", image.get('system:time_start'));
});
Map.addLayer(s1_VV_urf, {min:-25, max:0}, 's1_VV_urf');


var s1_VV_rf = s1_col_VV.map(function(image){
  return toDB(RefinedLee(toNatural(image))).set("system:time_start", image.get('system:time_start'));
});

//print(s1_VV_rf, "s1_VV_rf");
Map.addLayer(s1_VV_rf, {min:-25, max:0}, 's1_VV_rf');

/**/

//1 month VV composite from image collection

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
  .set('month', mon.get(n));
  
  var glcmVV = (s1_VV_image).unitScale(0,1).multiply(255).toByte().glcmTexture({size:3});
  
 // s1_VV_image = toDB(RefinedLee(toNatural(s1_VV_image)));
  
  return s1_VV_image.addBands(glcmVV).float();
});

//print(s1_VV_mon_composites, "s1_VV_mon_composites");
//print(s1_VV_mon_composites.get(0),"s1_VV_mon_composites.get(0)");

var s1_VV_jan =ee.Image(s1_VV_mon_composites.get(11));
//Map.addLayer(s1_VV_jan,{min:-25, max:0}, "s1_VV_jan");


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


//1 month VH composite from image collection

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
  .set('month', mon.get(n));
  
  var glcmVH = (s1_VH_image).unitScale(0,1).multiply(255).toByte().glcmTexture({size:3});
  
  //s1_VH_image = toDB(RefinedLee(toNatural(s1_VH_image)));
  
  return s1_VH_image.addBands(glcmVH).float();
});

//print(s1_VH_mon_composites, "s1_VH_mon_composites");
//print(s1_VH_mon_composites.get(0),"s1_VH_mon_composites.get(0)");
//Map.addLayer(ee.Image(s1_VH_mon_composites.get(4)),{min:-25.0, max:0}, "s1_VH_jan");


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
                  .filterDate('2015-05-01', '2020-04-30')
                  .filter(ee.Filter.lt('CLOUDY_PIXEL_PERCENTAGE',50))
                  .map(maskS2clouds)
                  .select('B[2-8]', 'B8A', 'B11', 'B12');

//print(s2collection.first());
//print(s2collection.size());

//var s2_med = s2collection.median().clip(roi);
//Map.addLayer(s2_med, {min: 0.0, max: 0.3,bands: ['B11', 'B8', 'B3']}, 's2_med');
//var s2_med_ndvi =s2_med.normalizedDifference(['B8A', 'B4']);
//var s2_water_mask =s2_med_ndvi.lte(0);

//Map.addLayer(s2_water_mask.clip(roi), {}, "s2_water_mask");

//1 month composite

var months = ee.List.sequence(1, 12, 1);
//print(months);
var mon = ee.List(['January','February','March','April','May','June','July','August','September','October','November','December']);
var s2_mon_composites = months.map(function(m) {
  var n = ee.Number(m).subtract(1);
  var s2_image = s2collection.filter(ee.Filter.calendarRange({
    start: m, 
    end: ee.Number(m).add(0), 
    field: 'month'
  })).median()
  .set('month', mon.get(n));

  return s2_image.float();
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
//Map.addLayer(check1, {min: 0.0, max: 0.3,bands: ['B11', 'B8', 'B3']}, 'checkfeb');
//Map.addLayer(check2, {min: 0.0, max: 0.3,bands: ['B11', 'B8', 'B3']}, 'checkmar');
Map.addLayer(check3, {min: 0.0, max: 0.3,bands: ['B11', 'B8', 'B3']}, 'checkapr');
//Map.addLayer(check10, {min: 0.0, max: 0.3,bands: ['B11', 'B8', 'B3']}, 'checknov');
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

//-------------------------------------------------Masks------------------------------------------------
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

var forest1 = tc_gte25.unmask(0).clip(roi);
//Map.addLayer(forest1.updateMask(forest1), {},"forest1");

var forest2 = nf_mask.eq(1).unmask(0).clip(roi);
//Map.addLayer(forest2.updateMask(forest2), {},"forest2");

var forest3 = tp_fe_0.eq(1).unmask(0).clip(roi);
//Map.addLayer(forest3.updateMask(forest3), {},"forest3");

var forest = forest1.add(forest2).add(forest3);
forest= forest.gte(1).clip(roi);
//Map.addLayer(forest.updateMask(forest), {},"forest");

var del_ndvi = Nov_ndvi.subtract(Apr_ndvi);
//Map.addLayer(del_ndvi, {},"del_ndvi");

var area_mask1 = ee.Image.constant(1).clip(table3).mask().not(); //Thailand
var area_mask2 = ee.Image.constant(1).clip(table5).mask().not(); //Mon

/*
//flooded mangrove

var Jan_mangrove_mask = Jan_ndvi.gte(0.5);
var Feb_mangrove_mask = Feb_ndvi.gte(0.5);
var Mar_mangrove_mask = Mar_ndvi.gte(0.3);
var Apr_mangrove_mask = Apr_ndvi.gte(0.3);
var Nov_mangrove_mask = Nov_ndvi.gte(0.2);
var Dec_mangrove_mask = Dec_ndvi.gte(0.5);
var mangrove_mask = Jan_mangrove_mask.and(Feb_mangrove_mask).add(Mar_mangrove_mask)
                                  .add(Apr_mangrove_mask).add(Nov_mangrove_mask).add(Dec_mangrove_mask);

//Map.addLayer(mangrove_mask, {}, "mangrove");
/**/


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
                                                    .updateMask(area_mask1)
                                                    .updateMask(area_mask2);
//Map.addLayer(class_composite, {}, "class_composite");                                                    
/*                                                    
//print(class_composite);
var s2_jan_class_composite = ee.Image(image_indices.get(0)).updateMask(forest);
var s2_feb_class_composite = ee.Image(image_indices.get(1)).updateMask(forest);
var s2_mar_class_composite = ee.Image(image_indices.get(2)).updateMask(forest);
var s2_apr_class_composite = ee.Image(image_indices.get(3)).updateMask(forest);
var s2_nov_class_composite = ee.Image(image_indices.get(4)).updateMask(forest);
var s2_dec_class_composite = ee.Image(image_indices.get(5)).updateMask(forest);

var s1_VV_class_composite = ee.Image(s1_VV_variables).updateMask(forest);
var s1_VH_class_composite = ee.Image(s1_VH_variables).updateMask(forest);

var rest_class_composite = ee.Image(gedi_roi)
                                            .addBands(pal_variables)
                                            .addBands(elevation)
                                            .addBands(slope)
                                            .updateMask(forest);

//var class_composite = s2_jan_class_composite;
/**/

var bands = class_composite.bandNames();

print(bands.size());

/* Run1_palsar_rf
var class_composite = class_composite.select('B5_shade_3','SI_41_5','B8A_savg_2','SI_16_3','SI_24_3',
'B7_corr_2','SI_43_5','ND_16_3','B3_prom_2','ND_10_2','SI_39_4','SI_35_5','B5_svar_3','VH_rf_var_3',
'ND_2_5','ND_33_4','elevation','B11_shade_2','HH_HV_var','ND_40_4','B7_savg_2','ND_34_5','ND_33_5',
'SI_33_4','ND_23_2','B11_savg_4','B12_prom_3','B8A_shade_4','SI_23_2','ND_21_2','ND_34_4','B7_imcorr1_3',
'SI_26_5','ND_23_3','HH_HV_dent','ND_38_5','B8_savg_2','B12_3','B8_savg','ND_11_3','B7_sent_3','ND_42_5',
'B12_shade','B11_prom_3','ND_24_4','B6_corr_2','B12_savg_5','VV_rf_4','B12_shade_3','B6_savg_2','SI_31_5',
'VH_rf_shade_11','VH_rf_shade_7','ND_29','B6_ent_4','ND_37_5','ND_25_4','B11_savg_1','SI_38_4','ND_10_3','B6_idm_4',
'VH_rf_dvar_1','VH_rf_asm_3','B8_5','ND_40');

//Run1_palsar_urf
var class_composite = class_composite.select('B5_shade_3','B8A_savg_2','SI_41_5','VH_rf_var_3','SI_16_3',
'SI_43_5','SI_24_3','elevation','HV_sent','B7_corr_2','ND_16_3','ND_34_5','B3_prom_2','ND_10_2','SI_39_4',
'B12_prom_3','B5_svar_3','ND_2_5','ND_33_4','SI_33_4','ND_40_4','ND_23_3','SI_26_5','B8_savg_2','B11_shade_2',
'ND_42_5','ND_33_5','HV_dent','SI_35_5','B8A_shade_4','ND_21_2','ND_34_4','VH_rf_shade_7','B12_shade_3',
'B6_savg_2','ND_38_5','B12_3','B8_savg','ND_11_3','B12_shade','B11_savg_4','SI_23_2','B11_prom_3','ND_24_4',
'B12_savg_5','SI_16_2','B7_savg_2','ND_29','ND_37_5','B6_ent_4','ND_25_4','B11_savg_1','SI_38_4','SI_31_5',
'B6_idm_4','VH_rf_dvar_1','HV_savg','VH_rf_asm_3','ND_40','B7_imcorr1_3');


//Run1_palsar_urf_s1_urf-run4 
var class_composite = class_composite.select('B5_shade_3','B8A_savg_2','elevation','HV_sent','ND_10_2',
'SI_24_3','ND_16_3','HV_dent','SI_43_5','SI_16_3','B8_savg_2','ND_34_5','ND_40_4','B7_savg_2','VH_rf_dent_1',
'ND_23_3','B5_svar_3','SI_39_4','SI_41_5','SI_23_3','HV_savg','ND_33_4','SI_35_5','B12_savg_5','ND_22_3',
'ND_24_4','B8A_shade_4','B12_shade_3','ND_2_5','B7_savg_1','B8_savg_3','ND_38_5','B8_idm_4','VH_rf_dvar_1',
'B8_savg','SI_33_4','ND_33_5','ND_25_2','B11_savg_4','B6_idm_4','VH_rf_imcorr2_7','ND_34_4','ND_42_5',
'B5_shade','B11_ent_2','B11_shade_2','B6_savg_2','SI_41_4','ND_37_5','VV_rf_dvar_2','SI_38_4','ND_25_4',
'HV_svar','SI_24_2','SI_26_5','SI_31_5','VH_rf_imcorr2','ND_43_5','ND_11_3','VH_rf_6','ND_5_5','SI_9',
'B7_imcorr1_3','B6_ent_4','B8A_savg');


//Run2_palsar_urf_s1_urf_with_pol_train_data_and_more_than_50_gini_value.

var class_composite = class_composite.select('elevation','SI_9','HV_svar','B8_savg_3','B8_savg_2','B6_savg_2','ND_33_4',
'HV_savg','B11_savg_4','B11_ent_2','B8A_savg_2','B6_idm_4','B7_savg_1','B7_savg_2','ND_34_4','SI_39_4','ND_5_5','SI_24_2',
'HV_dent','SI_23_3','ND_24_4','ND_10_2','B12_savg_5','B6_ent_4','HV_sent','ND_22_3','ND_25_4','ND_25_2','VH_rf_imcorr2',
'SI_26_5','SI_31_5','ND_2_5','ND_40_4','B8_idm_4','ND_16_3','B8_savg','SI_16_3','ND_23_3','VH_rf_imcorr2_7','VH_rf_dent_1',
'B5_svar_3','SI_24_3','B8A_savg','VH_rf_dvar_1','SI_38_4','SI_33_4');
/**/

//Run6
//var class_composite = class_composite.select('elevation','AWEI_2','ND_29_4','B12_5','ND_28_3','ND_16_3',
//'AWEI_5','B11_5','ND_28','SI_24_3','ND_23_3','B12_savg_4','B11_savg_5','ND_28_2','ND_28_5','B11_savg_1',
//'B12_savg_5','ND_33_5','SI_16_2','ND_29_2','SI_38_5');

//Run12
var class_composite = class_composite.select('elevation', 'ND_37_4', 'B11_savg_5','B12_savg_2','ND_40_4','B11_savg_1',
'SI_38_4','SI_23', 'SI_43_4','B12_dent_3','ND_28_2','B11_idm_5','SI_23_3','B5_ent_5','ND_28_3','SI_17_5','ND_29_4',
'B12_1','ND_27_5','ND_16','SI_7_5','S2REP_5','ND_42_4','ND_25_5','ND_28','ND_23_5','SI_17_2','ND_24_5','B12_savg_5',
'B11_5','ND_21_5','AWEI_4','B11_savg_2','S2REP', 'ND_23_2','B3_asm_5','SI_41_4','B12_savg_3','B4_savg_2','SI_34_4',
'B2_savg_5','SI_19_5','AWEI_1','ht','B11_savg_4','B5_5','B7_idm_5','SI_24_3','B12_savg','B12_2','SI_5_5','B6_idm_5',
'ND_22_3','B12_4');


var bands = class_composite.bandNames();
print(bands);
//print(bands.size());

var bands_set1 = bands.slice(0,250);
var bands_set2 = bands.slice(250,500);
var bands_set3 = bands.slice(500,750);
var bands_set4 = bands.slice(750,1000);
var bands_set5 = bands.slice(1000,1250);
var bands_set6 = bands.slice(1250,1500);
var bands_set7 = bands.slice(1500,1750);
var bands_set8 = bands.slice(1750,2000);

//print(bands_set3);
//----------------------------------------------------Train--Classifier----------------------------------------------------

//Training

var training1 = class_composite.sampleRegions({
      // Get the sample from the polygons FeatureCollection.
      collection: training,
      // Keep this list of properties from the polygons.
      properties: ['Class'],
      // Set the scale to get Sentinel pixels in the polygons.
      scale: 20,
      tileScale:16,
      geometries: true
      });
//print(training1.limit(10));
print(training1.size());


mangrove = training1.filter(ee.Filter.eq('Class', 0));//.limit(656);//.limit(30);
var mangrove_size = mangrove.size();
print(mangrove_size,'mangrove_size');


low_evg = training1.filter(ee.Filter.eq('Class', 1));//.limit(12509);//.limit(30);//;
var low_evg_size = low_evg.size();
print(low_evg_size,'low_evg_size');


up_evg = training1.filter(ee.Filter.eq('Class', 2));//.limit(19070);//.limit(30);//;
var up_evg_size = up_evg.size();
print(up_evg_size,'up_evg_size');


op = training1.filter(ee.Filter.eq('Class', 3)); //.limit(153);//.limit(30);//;
var op_size = op.size();
print(op_size,'op_size');

rubber = training1.filter(ee.Filter.eq('Class', 4));//.limit(30);//;.limit(385);//
var rubber_size = rubber.size();
print(rubber_size,'rubber_size');


mdf = training1.filter(ee.Filter.eq('Class', 5));//.limit(10891);//.limit(30);//;
var mdf_size = mdf.size();
print(mdf_size,'mdf_size');

bamboo = training1.filter(ee.Filter.eq('Class', 6));//.limit(10891);//.limit(30);//;
var bamboo_size = bamboo.size();
print(bamboo_size,'bamboo_size');

var training2 = mangrove.merge(low_evg).merge(up_evg).merge(op).merge(rubber).merge(mdf).merge(bamboo);
print(training2.size());
/*
// Export the FeatureCollection to a KML file.
Export.table.toDrive({
  collection: training3,
  description:'training_class_composite_run12',
  fileFormat: 'CSV'
});
/**/

var classifier = ee.Classifier.smileRandomForest(500)
                .train({
                  features: training2, 
                  classProperty:'Class', 
                  inputProperties:bands ,
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
  description:'RF_IV_Tanintharyi_run13',
  fileFormat: 'CSV'
});


//----------------------------------------------Generate--Classified--Map-----------------------------------------


var classified = class_composite.classify(classifier).unmask(100);
// Define a palette from the IGBP classification.
//var Palette = ['152106', '225129', '369b47', '30eb5b', '387242', '6a2325', 'c3aa69'];

var Palette = ['#008000', '#00FF00', '#808000', '#FFFF00', '#FF00FF', '6a2325', 'c3aa69']; //green, lime, olive,yellow,fuchsia
print(Palette);
          
Map.addLayer(classified, {palette: Palette, min: 0, max: 6}, 'classification');


//---------------------------------------------Export---Maps--------------------------------------------------------

// Export the image, specifying scale and region.
Export.image.toDrive({
  image: classified,
  description: 'FT_Tanintharyi_Run15',
  scale: 20,
  region: roi,
  maxPixels:375582411
});

