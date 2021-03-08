const db = [
  {
    km: 5,
    scenery: 'River',
    favourite: true,
    routeName: 'Ada-Dorćol',
    description:
      'The running track that follows Sava river from Old Town side gives you the opportunity to run all the way to the Danube and Sava confluence and further. We certainly recommend you to try this track, especially if you have just started running, because there are enough benches if you are looking for the rest.',
    coordinates: [
      { latitude: 44.78875773961665, longitude: 20.416642355124797 },
      { latitude: 44.788421826560615, longitude: 20.417848652527287 },
      { latitude: 44.78882885140137, longitude: 20.41952453726285 },
      { latitude: 44.79050622726397, longitude: 20.42310810933113 },
      { latitude: 44.79333456245305, longitude: 20.427566859722507 },
      { latitude: 44.797110787393926, longitude: 20.43415808581139 },
      { latitude: 44.800210696958125, longitude: 20.4399835502073 },
      { latitude: 44.80166049430508, longitude: 20.4422658711096 },
      { latitude: 44.80304482156024, longitude: 20.44399792867607 },
      { latitude: 44.804089946006165, longitude: 20.445060301632623 },
      { latitude: 44.805817989130304, longitude: 20.44659007662769 },
      { latitude: 44.80819308477778, longitude: 20.448499567276432 },
      { latitude: 44.80845780222557, longitude: 20.448675283193044 },
      { latitude: 44.8097967264408, longitude: 20.449212613405006 },
      { latitude: 44.8103902107358, longitude: 20.449402341504626 },
      { latitude: 44.8118506524524, longitude: 20.449588862130767 },
      { latitude: 44.81338728357341, longitude: 20.449887746011967 },
      { latitude: 44.81397124211035, longitude: 20.449929111315566 },
      { latitude: 44.81481048871818, longitude: 20.44982569805392 },
      { latitude: 44.815139141417184, longitude: 20.44978846928004 },
      { latitude: 44.81525358253764, longitude: 20.44961887153198 },
      { latitude: 44.81583458781742, longitude: 20.44957336969711 },
      { latitude: 44.816826391367, longitude: 20.449345860523604 },
      { latitude: 44.81871605270367, longitude: 20.448663333005605 },
      { latitude: 44.82047513691558, longitude: 20.44760649875285 },
      { latitude: 44.82151593144574, longitude: 20.446806639271355 },
      { latitude: 44.82213478361549, longitude: 20.446265332069856 },
    ],
    initialRegion: {
      latitude: 44.80456679556077,
      longitude: 20.432008598585142,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045,
    },
  },
  ,
  {
    km: 7,
    scenery: 'River',
    favourite: false,
    routeName: 'Ada',
    description:
      'The trail is asphalted; wide enough not to collide with other people and the abundance of trees that offers more than the necessary shade during the hot months of the summer. Also, there are more sports facilities if you want to make your running training more like a combined training.',
    coordinates: [
      { latitude: 44.78772435667875, longitude: 20.415284961094482 },
      { latitude: 44.78743500542501, longitude: 20.41456881130622 },
      { latitude: 44.78721228011695, longitude: 20.413841932678224 },
      { latitude: 44.78693434818385, longitude: 20.41123214329526 },
      { latitude: 44.78690388980898, longitude: 20.411081939597878 },
      { latitude: 44.786852491264945, longitude: 20.41098538007813 },
      { latitude: 44.78675996522496, longitude: 20.409455784628083 },
      { latitude: 44.7867161811731, longitude: 20.40896225816774 },
      { latitude: 44.78667239708756, longitude: 20.408600159935027 },
      { latitude: 44.786584755490075, longitude: 20.408074912762604 },
      { latitude: 44.78563518271043, longitude: 20.404185666348962 },
      { latitude: 44.7853537971852, longitude: 20.40290375165933 },
      { latitude: 44.78527084886991, longitude: 20.40239036405347 },
      { latitude: 44.78493230229717, longitude: 20.399918845035014 },
      { latitude: 44.78380036946646, longitude: 20.395095820662913 },
      { latitude: 44.783469111710126, longitude: 20.394769381308453 },
      { latitude: 44.7833805104017, longitude: 20.39449091391875 },
      { latitude: 44.78335552026449, longitude: 20.394241253500393 },
      { latitude: 44.78346002440269, longitude: 20.393661913298818 },
      { latitude: 44.783073005861844, longitude: 20.39193772769811 },
      { latitude: 44.7817528117994, longitude: 20.38767521955955 },
      { latitude: 44.77944807745101, longitude: 20.381571912839284 },
      { latitude: 44.77621260001853, longitude: 20.3745977104842 },
      { latitude: 44.77623340755129, longitude: 20.37435955019516 },
      { latitude: 44.7762932291662, longitude: 20.374212990017288 },
      { latitude: 44.777767709267195, longitude: 20.372638533749477 },
      { latitude: 44.777858458840605, longitude: 20.37261576692624 },
      { latitude: 44.77795542398061, longitude: 20.372614015632145 },
      { latitude: 44.77807973802446, longitude: 20.372645538925855 },
      { latitude: 44.778205294937074, longitude: 20.372731352336505 },
      { latitude: 44.77859936783957, longitude: 20.373424864815714 },
      { latitude: 44.778949928861714, longitude: 20.37415865710347 },
      { latitude: 44.77935642779029, longitude: 20.37471381733154 },
      { latitude: 44.77966572052106, longitude: 20.37550154661754 },
      { latitude: 44.779854672164966, longitude: 20.37587457225974 },
      { latitude: 44.780062269649264, longitude: 20.37617754616883 },
      { latitude: 44.78026613710205, longitude: 20.376578592540092 },
      { latitude: 44.7807279461635, longitude: 20.377732339780927 },
      { latitude: 44.78182231293261, longitude: 20.38014509089194 },
      { latitude: 44.782963248543986, longitude: 20.382713607556745 },
      { latitude: 44.783154384086544, longitude: 20.382934195167447 },
      { latitude: 44.78321945136788, longitude: 20.38330948065586 },
      { latitude: 44.783573253394565, longitude: 20.384214749352513 },
      { latitude: 44.784018552863785, longitude: 20.385664325216702 },
      { latitude: 44.78458273516836, longitude: 20.38738245022721 },
      { latitude: 44.784743365898144, longitude: 20.388021294942476 },
      { latitude: 44.785145229478395, longitude: 20.389424366140855 },
      { latitude: 44.78517776200755, longitude: 20.389662142496594 },
      { latitude: 44.78540955571652, longitude: 20.390481467972997 },
      { latitude: 44.785557984532126, longitude: 20.390899725017583 },
      { latitude: 44.78587517360176, longitude: 20.392008392732045 },
      { latitude: 44.78597073663164, longitude: 20.392438108856794 },
      { latitude: 44.78603986723879, longitude: 20.3928936080268 },
      { latitude: 44.78618829443586, longitude: 20.393414996963852 },
      { latitude: 44.786298089648874, longitude: 20.393965033668483 },
      { latitude: 44.78648514768382, longitude: 20.394810142123628 },
      { latitude: 44.78663764019782, longitude: 20.39582427225765 },
      { latitude: 44.78684407647171, longitude: 20.39699305154063 },
      { latitude: 44.78684407647171, longitude: 20.397634760953586 },
      { latitude: 44.787093097055056, longitude: 20.39916755497735 },
      { latitude: 44.78709999156486, longitude: 20.39971294414516 },
      { latitude: 44.78758007067776, longitude: 20.401845343534628 },
      { latitude: 44.78777028373995, longitude: 20.402002996788045 },
      { latitude: 44.78818033720499, longitude: 20.404251786323737 },
      { latitude: 44.788812227408435, longitude: 20.40851052359245 },
      { latitude: 44.788975789818956, longitude: 20.410205210701285 },
      { latitude: 44.7892400658849, longitude: 20.410901551340064 },
      { latitude: 44.78935606073248, longitude: 20.413823926415112 },
      { latitude: 44.78924467533721, longitude: 20.414993678147805 },
      { latitude: 44.788657078666944, longitude: 20.415788854097542 },
      { latitude: 44.787733316507406, longitude: 20.415628778410614 },
      { latitude: 44.78772691777377, longitude: 20.415277607095078 },
    ],
    initialRegion: {
      latitude: 44.79484036634265,
      longitude: 20.40353214063323,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045,
    },
  },
  {
    km: 10,
    scenery: 'River',
    favourite: false,
    routeName: 'Zemun',
    description:
      'If you love running along the river, this is a great place for you. The trail is well arranged and provides you with sufficient amount of shade and benches for rest, however, sunny afternoons could be crowded. Make sure you take water with yourself, because there is only one fountain, near the hotel Yugoslavia. There are often swans along the river, which will definitely make your running special.',
    coordinates: [
      { latitude: 44.82129161707733, longitude: 20.43929995242231 },
      { latitude: 44.82124472721845, longitude: 20.43947072722554 },
      { latitude: 44.82151043591451, longitude: 20.43960018554413 },
      { latitude: 44.82167845696574, longitude: 20.43903828128055 },
      { latitude: 44.82159234612999, longitude: 20.43818037549455 },
      { latitude: 44.82127947567171, longitude: 20.43694207745123 },
      { latitude: 44.82130817945368, longitude: 20.43633548851854 },
      { latitude: 44.82115317886129, longitude: 20.4355868443185 },
      { latitude: 44.82117614193829, longitude: 20.43538855477362 },
      { latitude: 44.821440216666666, longitude: 20.4350729101919 },
      { latitude: 44.82158660539716, longitude: 20.43481796649142 },
      { latitude: 44.82159521648739, longitude: 20.43453584758019 },
      { latitude: 44.82155503138869, longitude: 20.43385599771204 },
      { latitude: 44.821774742806966, longitude: 20.4307092165912 },
      { latitude: 44.82202726255694, longitude: 20.42925550062451 },
      { latitude: 44.822797381289426, longitude: 20.4276680476748 },
      { latitude: 44.822935155685116, longitude: 20.4271136462943 },
      { latitude: 44.82319635207316, longitude: 20.4268141886143 },
      { latitude: 44.824298459163145, longitude: 20.4249502701914 },
      { latitude: 44.824313576095314, longitude: 20.4247030357574 },
      { latitude: 44.82618076301775, longitude: 20.42249369869048 },
      { latitude: 44.826555765465166, longitude: 20.4223277401294 },
      { latitude: 44.8273297170039, longitude: 20.42221691090039 },
      { latitude: 44.828471456547476, longitude: 20.4218878510703 },
      { latitude: 44.83195953882349, longitude: 20.42034755200741 },
      { latitude: 44.83453771990528, longitude: 20.41958742561948 },
      { latitude: 44.836880779494294, longitude: 20.4190136814161 },
      { latitude: 44.83721306633065, longitude: 20.4191578640935 },
      { latitude: 44.84075024442102, longitude: 20.41807429148393 },
      { latitude: 44.84335577538287, longitude: 20.41711243616225 },
      { latitude: 44.845473668133444, longitude: 20.4158697925807 },
      { latitude: 44.84620877962777, longitude: 20.41531943583727 },
      { latitude: 44.84609377543628, longitude: 20.41499502481317 },
      { latitude: 44.84744871838313, longitude: 20.41394486650012 },
      { latitude: 44.848980239375074, longitude: 20.4118626967535 },
      { latitude: 44.849968853604295, longitude: 20.4093514194339 },
    ],
    initialRegion: {
      latitude: 44.833829851886954,
      longitude: 20.425149343746934,
      latitudeDelta: 0.045,
      longitudeDelta: 0.045,
    },
  },
  {
    km: 5,
    scenery: 'Scenic',
    favourite: false,
    routeName: 'Tašmajdan',

    description:
      'Tašmajdan is the second largest park in downtown Belgrade, and one of the most important in the city both historically and in terms of attractions and activities.The course is not too wide – only two can run simultaneously, but among the runners there is an unwritten rule to move in the opposite direction of the clock. At the top there are about a dozen exercise machines that are far more crowded than the trail itself. In several places it is crossed with hiking trails, and it is necessary to take care, especially during the day and in the early evening hours.',
    coordinates: [
      { latitude: 44.809414089686584, longitude: 20.470824749776785 },
      { latitude: 44.80944287428792, longitude: 20.470781278870383 },
      { latitude: 44.80954362027947, longitude: 20.470717521540983 },
      { latitude: 44.809539508201645, longitude: 20.470720419601406 },
      { latitude: 44.80957034877829, longitude: 20.470662458392862 },
      { latitude: 44.80964025402438, longitude: 20.470610293305178 },
      { latitude: 44.809808848681065, longitude: 20.470587108821757 },
      { latitude: 44.80996716272711, longitude: 20.470485676706808 },
      { latitude: 44.81000828318745, longitude: 20.470511759250652 },
      { latitude: 44.8100103392097, longitude: 20.470549434036204 },
      { latitude: 44.809911650059135, longitude: 20.470653764211583 },
      { latitude: 44.809634085917835, longitude: 20.470743604084827 },
      { latitude: 44.809566236701436, longitude: 20.470804463356714 },
      { latitude: 44.80955595650824, longitude: 20.470810259488957 },
      { latitude: 44.809494275323004, longitude: 20.470830545911948 },
      { latitude: 44.80919203656073, longitude: 20.47128843948355 },
      { latitude: 44.809165307885905, longitude: 20.471410158026796 },
      { latitude: 44.80918175630222, longitude: 20.47162171643798 },
      { latitude: 44.80915887782008, longitude: 20.47172844772484 },
      { latitude: 44.808868973680134, longitude: 20.472061724673967 },
      { latitude: 44.80875910617217, longitude: 20.472164314484495 },
      { latitude: 44.80872620909375, longitude: 20.472297625264144 },
      { latitude: 44.80862546167445, longitude: 20.472480203071058 },
      { latitude: 44.808582284155165, longitude: 20.472512081735758 },
      { latitude: 44.808514433702406, longitude: 20.472422241862514 },
      { latitude: 44.80856172342033, longitude: 20.472254154357735 },
      { latitude: 44.8086069570273, longitude: 20.472216479572182 },
      { latitude: 44.808847516977394, longitude: 20.471822343354084 },
      { latitude: 44.8088619094212, longitude: 20.471804954991523 },
      { latitude: 44.809085095419874, longitude: 20.471706689327846 },
      { latitude: 44.80912502282024, longitude: 20.471651817616845 },
      { latitude: 44.809142990141225, longitude: 20.47151815576831 },
      { latitude: 44.80910605730865, longitude: 20.471405598422177 },
      { latitude: 44.809184913870446, longitude: 20.471121391087426 },
      { latitude: 44.80940880327357, longitude: 20.47082901175708 },
      { latitude: 44.809414089686584, longitude: 20.470824749776785 },
    ],
    initialRegion: {
      latitude: 44.80957013826695,
      longitude: 20.470769756476784,
      latitudeDelta: 0.005,
      longitudeDelta: 0.005,
    },
  },
  {
    km: 7,
    scenery: 'Scenic',
    favourite: false,
    routeName: 'Hayd Park',
    description:
      'The park is triangular in shape. Hyde Park was laid out in the 1930s. Though called park, it is officially classified as an urban forest. It covers an area of 8.28 ha (20.5 acres). This route has an elevation gain of about 0 ft and is rated as easy.',
    coordinates: [
      { latitude: 44.79094710454892, longitude: 20.451541368385396 },
      { latitude: 44.790855927683516, longitude: 20.450385088390185 },
      { latitude: 44.7904285477647, longitude: 20.447602764292714 },
      { latitude: 44.79010159445886, longitude: 20.445634354396848 },
      { latitude: 44.79018365471673, longitude: 20.445615083063593 },
      { latitude: 44.79089939758845, longitude: 20.44618679927087 },
      { latitude: 44.79166071942138, longitude: 20.44701546660077 },
      { latitude: 44.79226133115826, longitude: 20.447384102654475 },
      { latitude: 44.79278558340114, longitude: 20.447904428652322 },
      { latitude: 44.79282205294519, longitude: 20.448020056651846 },
      { latitude: 44.79284028770859, longitude: 20.448720248426724 },
      { latitude: 44.792484708783135, longitude: 20.449728781533654 },
      { latitude: 44.79142399735482, longitude: 20.451343018932093 },
      { latitude: 44.79094532115965, longitude: 20.45153573226463 },
      { latitude: 44.79094710454892, longitude: 20.451541368385396 },
    ],
    initialRegion: {
      latitude: 44.791270207484985,
      longitude: 20.449616582466454,
      latitudeDelta: 0.015,
      longitudeDelta: 0.015,
    },
  },
  {
    km: 10,
    scenery: 'Scenic',
    favourite: false,
    routeName: 'Ušće',
    description: 'One of the biggest parks in Belgrade. ',
    coordinates: [
      { latitude: 44.81514486569136, longitude: 20.439300516951377 },
      { latitude: 44.8154496900962, longitude: 20.439908029269787 },
      { latitude: 44.81572998697745, longitude: 20.44040194172378 },
      { latitude: 44.81584560905505, longitude: 20.43971046428758 },
      { latitude: 44.815891157078255, longitude: 20.43962156004586 },
      { latitude: 44.8163816719711, longitude: 20.439478325434205 },
      { latitude: 44.816938751681974, longitude: 20.439285699577148 },
      { latitude: 44.81714196180918, longitude: 20.43915728233911 },
      { latitude: 44.81782136816983, longitude: 20.438976066867756 },
      { latitude: 44.818007057368526, longitude: 20.438951371245057 },
      { latitude: 44.81820676017897, longitude: 20.43900076249045 },
      { latitude: 44.818224277946086, longitude: 20.439005701614906 },
      { latitude: 44.81860966726224, longitude: 20.43919338834742 },
      { latitude: 44.81876732579443, longitude: 20.43925759696549 },
      { latitude: 44.81915971848111, longitude: 20.439287231712726 },
      { latitude: 44.819468025138264, longitude: 20.43932674470905 },
      { latitude: 44.819898951011304, longitude: 20.43949961406654 },
      { latitude: 44.82001106127635, longitude: 20.439549005311942 },
      { latitude: 44.82060313999792, longitude: 20.439860170157953 },
      { latitude: 44.82071875229319, longitude: 20.44001328301869 },
      { latitude: 44.82072575909154, longitude: 20.440433108604584 },
      { latitude: 44.81987096478447, longitude: 20.441137215779957 },
      { latitude: 44.81963731989877, longitude: 20.441511521672094 },
      { latitude: 44.81964085997882, longitude: 20.441516512412537 },
      { latitude: 44.81881163220096, longitude: 20.44238502532586 },
      { latitude: 44.81874082951992, longitude: 20.442409979052258 },
      { latitude: 44.818716048561015, longitude: 20.442489830976744 },
      { latitude: 44.81861692461888, longitude: 20.442564692155944 },
      { latitude: 44.81850009975406, longitude: 20.442769312712425 },
      { latitude: 44.81794756365081, longitude: 20.443098913017803 },
      { latitude: 44.81750857904352, longitude: 20.443563052326034 },
      { latitude: 44.81750503882169, longitude: 20.443553070833357 },
      { latitude: 44.8170271082077, longitude: 20.443742719153995 },
      { latitude: 44.81691382037028, longitude: 20.443812589587917 },
      { latitude: 44.81672264663992, longitude: 20.443987265672718 },
      { latitude: 44.81604677369898, longitude: 20.44441662745661 },
      { latitude: 44.8160644752044, longitude: 20.44425692360765 },
      { latitude: 44.81576354887311, longitude: 20.44364805268348 },
      { latitude: 44.815512185675004, longitude: 20.44290443163675 },
      { latitude: 44.81558546519122, longitude: 20.441476796801094 },
      { latitude: 44.81574778628473, longitude: 20.440397935086423 },
      { latitude: 44.815142388389376, longitude: 20.439304961870093 },
      { latitude: 44.81514486569136, longitude: 20.439300516951377 },
    ],
    initialRegion: {
      latitude: 44.81827387956986,
      longitude: 20.440823787877783,
      latitudeDelta: 0.015,
      longitudeDelta: 0.015,
    },
  },
  {
    km: 5,
    scenery: 'Forest',
    favourite: false,
    routeName: 'Banjička Šuma',
    description:
      'If the shade, nature and a lot of benches are your criteria for a good path, then head to Banjička forest. Not only is the surface of the track perfect, but for nature lovers, this is a real oasis. The park is protected and has various birds that give the impression that you have left the city. A dense forest drastically reduces the sounds of traffic so you can enjoy really peaceful running. The trail has a small climb.',
    coordinates: [
      { latitude: 44.763371573802154, longitude: 20.477831479562653 },
      { latitude: 44.7635751393503, longitude: 20.477814135020633 },
      { latitude: 44.76487332192421, longitude: 20.47676333103559 },
      { latitude: 44.76602972439582, longitude: 20.476364025522745 },
      { latitude: 44.76626100210537, longitude: 20.47627996120394 },
      { latitude: 44.76713388060208, longitude: 20.475880655689625 },
      { latitude: 44.76716372239416, longitude: 20.47587014764781 },
      { latitude: 44.767260708029504, longitude: 20.475681002930504 },
      { latitude: 44.76729054973067, longitude: 20.475386777814695 },
      { latitude: 44.767477060013796, longitude: 20.47515560093799 },
      { latitude: 44.767991825291816, longitude: 20.474945440126856 },
      { latitude: 44.76820071423236, longitude: 20.47506102856521 },
      { latitude: 44.76896166041315, longitude: 20.474861375808054 },
      { latitude: 44.76908848380198, longitude: 20.4747457873697 },
      { latitude: 44.77020004158778, longitude: 20.47405225673957 },
      { latitude: 44.770520822787006, longitude: 20.47490340796351 },
      { latitude: 44.771438396254645, longitude: 20.474577658728148 },
      { latitude: 44.77331079775708, longitude: 20.473264153718425 },
      { latitude: 44.774019459758144, longitude: 20.47294891252291 },
      { latitude: 44.775377082693865, longitude: 20.472570623081754 },
      { latitude: 44.77540692022647, longitude: 20.47256011503369 },
      { latitude: 44.776205067837765, longitude: 20.47218182559908 },
      { latitude: 44.77665262241858, longitude: 20.47184556832386 },
      { latitude: 44.7774805892794, longitude: 20.47079476431369 },
      { latitude: 44.77813698697784, longitude: 20.46950227541209 },
      { latitude: 44.778688952011535, longitude: 20.468987381434143 },
      { latitude: 44.77903952164688, longitude: 20.46839893120252 },
      { latitude: 44.77943484229926, longitude: 20.468115214126556 },
    ],
    initialRegion: {
      latitude: 44.77165827347977,
      longitude: 20.475622970971017,
      latitudeDelta: 0.02,
      longitudeDelta: 0.02,
    },
  },
  {
    km: 7,
    scenery: 'Forest',
    favourite: false,
    routeName: 'Zvezdara',
    description:
      'Zvezdara is the largest forest in the urban zone of Belgrade and with them, the most important source of the oxygen for the city. After the run you can visit the only Observatory in the city',
    coordinates: [
      { latitude: 44.80957663087998, longitude: 20.505834579517163 },
      { latitude: 44.80957663087998, longitude: 20.505848493095154 },
      { latitude: 44.80896820175775, longitude: 20.50666391479746 },
      { latitude: 44.808838535687926, longitude: 20.5073387465674 },
      { latitude: 44.8085393052237, longitude: 20.508069814300505 },
      { latitude: 44.80840963820711, longitude: 20.508224463244044 },
      { latitude: 44.80769147714492, longitude: 20.509827188658928 },
      { latitude: 44.80679050247659, longitude: 20.509944156257756 },
      { latitude: 44.80617206918193, longitude: 20.51012692319103 },
      { latitude: 44.805503754756025, longitude: 20.510689282996132 },
      { latitude: 44.80500500762039, longitude: 20.510843931939675 },
      { latitude: 44.80391772391816, longitude: 20.511603117662517 },
      { latitude: 44.80350874034104, longitude: 20.512390421375088 },
      { latitude: 44.80329043636291, longitude: 20.513199791397085 },
      { latitude: 44.801674417996345, longitude: 20.51456351389922 },
      { latitude: 44.79933011332404, longitude: 20.515322699622942 },
      { latitude: 44.798811360704896, longitude: 20.512637431603274 },
      { latitude: 44.799220377582024, longitude: 20.512539018639202 },
      { latitude: 44.79913059364606, longitude: 20.511161237121232 },
      { latitude: 44.79957951196977, longitude: 20.51123153209557 },
      { latitude: 44.80083646469457, longitude: 20.5106129363214 },
      { latitude: 44.80093622167446, longitude: 20.510472346372726 },
      { latitude: 44.801464930788214, longitude: 20.509628806680684 },
      { latitude: 44.801474906433114, longitude: 20.508883679922466 },
      { latitude: 44.80175422245122, longitude: 20.508897738917334 },
      { latitude: 44.802492408275334, longitude: 20.508560323040516 },
      { latitude: 44.802681940949526, longitude: 20.508180730179095 },
      { latitude: 44.80259216239201, longitude: 20.507126305564043 },
      { latitude: 44.80244253115233, longitude: 20.5062405888874 },
      { latitude: 44.80336026334531, longitude: 20.505748524054123 },
      { latitude: 44.80492635951395, longitude: 20.505340813202967 },
      { latitude: 44.80618319579623, longitude: 20.505059633305127 },
      { latitude: 44.80694127425488, longitude: 20.505214282248666 },
      { latitude: 44.80737018268454, longitude: 20.50512992827142 },
      { latitude: 44.80760957203222, longitude: 20.505382990179033 },
      { latitude: 44.80790880731965, longitude: 20.505382990179033 },
      { latitude: 44.808008552070504, longitude: 20.505453285153372 },
      { latitude: 44.80813821998874, longitude: 20.505860996004525 },
      { latitude: 44.80840752934908, longitude: 20.505593875102047 },
      { latitude: 44.80845740131485, longitude: 20.50562199309178 },
      { latitude: 44.808616991315574, longitude: 20.50569228806612 },
      { latitude: 44.80901596438556, longitude: 20.505312695204697 },
      { latitude: 44.809135655768415, longitude: 20.50581881901992 },
      { latitude: 44.80948475421639, longitude: 20.505776642035322 },
      { latitude: 44.80957663087998, longitude: 20.505834579517163 },
    ],
    initialRegion: {
      latitude: 44.80485286953397,
      longitude: 20.50651133993096,
      latitudeDelta: 0.025,
      longitudeDelta: 0.025,
    },
  },
  {
    km: 10,
    scenery: 'Forest',
    favourite: false,
    routeName: 'Košutnjak',
    description:
      'Košutnjak offers various options for anyone who decides to visit Belgrade forest. You can run on a trim track, but also make your own path in open fields and forest paths if you are looking for hilly running. For beginners, we recommend you to keep track on the arranged path since there are lots of benches, fountains and exercise equipment that can be of interest to you. This is a great place for relaxing from stress and because of the greenery, the temperature is several degrees lower, so Košutnjak can provide you with some relief during hot summer days. ',
    coordinates: [
      { latitude: 44.767118092330115, longitude: 20.43670887064592 },
      { latitude: 44.766371601385885, longitude: 20.43623680160557 },
      { latitude: 44.764604359882995, longitude: 20.43505662972706 },
      { latitude: 44.764573889727785, longitude: 20.434799137680844 },
      { latitude: 44.7661735511488, longitude: 20.434992256715507 },
      { latitude: 44.76618878580653, longitude: 20.43497079904499 },
      { latitude: 44.76698098247175, longitude: 20.434670391657733 },
      { latitude: 44.766219255109924, longitude: 20.4342841535884 },
      { latitude: 44.76501570540512, longitude: 20.433640423472852 },
      { latitude: 44.764421538710735, longitude: 20.433232727733003 },
      { latitude: 44.76367501291936, longitude: 20.432267132559673 },
      { latitude: 44.763873071722564, longitude: 20.432031098183973 },
      { latitude: 44.76463483002212, longitude: 20.43228859023019 },
      { latitude: 44.76538134341029, longitude: 20.432674828299525 },
      { latitude: 44.76626495903489, longitude: 20.432331505571227 },
      { latitude: 44.76894619267662, longitude: 20.430850926305464 },
      { latitude: 44.771104155418904, longitude: 20.43022909072082 },
      { latitude: 44.771484988146206, longitude: 20.430186175379788 },
      { latitude: 44.77206384908226, longitude: 20.42900600350128 },
      { latitude: 44.77226187912317, longitude: 20.42883434213713 },
      { latitude: 44.772749334819, longitude: 20.42737522027776 },
      { latitude: 44.77316062233981, longitude: 20.42643108277495 },
      { latitude: 44.77369376847029, longitude: 20.425401114590073 },
      { latitude: 44.77389179292231, longitude: 20.42542257226059 },
      { latitude: 44.774424932302765, longitude: 20.42499341885022 },
      { latitude: 44.775323641830965, longitude: 20.425873183341473 },
      { latitude: 44.77588723219594, longitude: 20.427031897549465 },
      { latitude: 44.77649651288941, longitude: 20.429284952953893 },
      { latitude: 44.776862078219736, longitude: 20.430980108924846 },
      { latitude: 44.77602432091249, longitude: 20.429971598410482 },
      { latitude: 44.77524748054896, longitude: 20.429006003237152 },
      { latitude: 44.77489713735797, longitude: 20.429134749260264 },
      { latitude: 44.77472958116745, longitude: 20.42947807198856 },
      { latitude: 44.77453155957431, longitude: 20.429799937262448 },
      { latitude: 44.774516327117034, longitude: 20.43055095573059 },
      { latitude: 44.77454679202761, longitude: 20.430486582719038 },
      { latitude: 44.774181212039984, longitude: 20.432203196360508 },
      { latitude: 44.773145389507015, longitude: 20.432997130169685 },
      { latitude: 44.77294736249559, longitude: 20.43387689466094 },
      { latitude: 44.772231412999666, longitude: 20.433812521758234 },
      { latitude: 44.771591620852284, longitude: 20.434391878862233 },
      { latitude: 44.7710736886847, longitude: 20.434649370908453 },
      { latitude: 44.770220613813, longitude: 20.432546519197654 },
      { latitude: 44.76964173440266, longitude: 20.43346919902994 },
      { latitude: 44.769139018598295, longitude: 20.43295421494871 },
      { latitude: 44.76927612333418, longitude: 20.435872458139205 },
      { latitude: 44.76862106443674, longitude: 20.43595828882128 },
      { latitude: 44.76846872409354, longitude: 20.435507677740397 },
      { latitude: 44.76743279910423, longitude: 20.43462791324914 },
      { latitude: 44.76734139306613, longitude: 20.434692286260695 },
      { latitude: 44.76750897069214, longitude: 20.43565788143402 },
      { latitude: 44.767118092330115, longitude: 20.43670887064592 },
    ],
    initialRegion: {
      latitude: 44.77257622818309,
      longitude: 20.43444096707723,
      latitudeDelta: 0.025,
      longitudeDelta: 0.025,
    },
  },
  {
    km: 5,
    scenery: 'City',
    favourite: false,
    routeName: 'Bulevar Zorana Đinđića',
    description: '',
    coordinates: [
      { latitude: 44.8116548640539, longitude: 20.431661044402485 },
      { latitude: 44.81896627894438, longitude: 20.414758003865884 },
      { latitude: 44.813200783337145, longitude: 20.40922181637306 },
      { latitude: 44.80530362572224, longitude: 20.42630154374454 },
      { latitude: 44.8116548640539, longitude: 20.431661044402485 },
    ],
    initialRegion: {
      latitude: 44.812466950185645,
      longitude: 20.420300488594506,
      latitudeDelta: 0.025,
      longitudeDelta: 0.025,
    },
  },
  {
    km: 7,
    scenery: 'City',
    favourite: false,
    routeName: 'NBG Blokovi',
    description: '',
    coordinates: [
      { latitude: 44.80357509181753, longitude: 20.387984252246348 },
      { latitude: 44.80466082761235, longitude: 20.3871570956864 },
      { latitude: 44.8105293157889, longitude: 20.382566377069764 },
      { latitude: 44.80383919152639, longitude: 20.36635410868352 },
      { latitude: 44.80046449240916, longitude: 20.369249156459777 },
      { latitude: 44.79785263324354, longitude: 20.371275689903158 },
      { latitude: 44.7999362607556, longitude: 20.37632134512344 },
      { latitude: 44.80175570493962, longitude: 20.381036137216203 },
      { latitude: 44.79615045913336, longitude: 20.38434476324621 },
      { latitude: 44.79509391202396, longitude: 20.384427478896963 },
      { latitude: 44.795856975765616, longitude: 20.38806696752997 },
      { latitude: 44.79615045913336, longitude: 20.39079658400473 },
      { latitude: 44.797177639166016, longitude: 20.390134858798728 },
      { latitude: 44.80213719402421, longitude: 20.38872869273597 },
      { latitude: 44.80357509181753, longitude: 20.387984252246348 },
    ],
    initialRegion: {
      latitude: 44.80417333751853,
      longitude: 20.37895302084618,
      latitudeDelta: 0.025,
      longitudeDelta: 0.025,
    },
  },
  {
    km: 10,
    scenery: 'City',
    favourite: false,
    routeName: 'Crveni Krst',
    description: '',
    coordinates: [
      { latitude: 44.79144111583479, longitude: 20.469210700653633 },
      { latitude: 44.79007479988447, longitude: 20.469999735233372 },
      { latitude: 44.78943312539712, longitude: 20.472004029752146 },
      { latitude: 44.78459470914076, longitude: 20.484786390264134 },
      { latitude: 44.78409181576508, longitude: 20.4955976809149 },
      { latitude: 44.78341977557088, longitude: 20.5013418531263 },
      { latitude: 44.788292103425334, longitude: 20.499513358289615 },
      { latitude: 44.7915399510111, longitude: 20.49771435944781 },
      { latitude: 44.79326459584653, longitude: 20.495347255301258 },
      { latitude: 44.795549110859326, longitude: 20.490013381542223 },
      { latitude: 44.79622100982828, longitude: 20.48963464494395 },
      { latitude: 44.796355388683246, longitude: 20.48995025877585 },
      { latitude: 44.79906529546946, longitude: 20.490833977505154 },
      { latitude: 44.80362578152419, longitude: 20.480200278490685 },
      { latitude: 44.80270763547961, longitude: 20.479253436995002 },
      { latitude: 44.800960878272, longitude: 20.477233508470867 },
      { latitude: 44.8004905884494, longitude: 20.476160421442422 },
      { latitude: 44.79609985625024, longitude: 20.477485999536388 },
      { latitude: 44.79513679660991, longitude: 20.47799098166742 },
      { latitude: 44.79482323884007, longitude: 20.478148788583365 },
      { latitude: 44.79345700295862, longitude: 20.478243472732935 },
      { latitude: 44.79265098430593, longitude: 20.47321648152023 },
      { latitude: 44.79144111583479, longitude: 20.469210700653633 },
    ],
    initialRegion: {
      latitude: 44.79261730790052,
      longitude: 20.48539964585979,
      latitudeDelta: 0.031,
      longitudeDelta: 0.031,
    },
  },
];

export default db;
