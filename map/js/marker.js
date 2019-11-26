/*
 * @Descripttion: 
 * @version: 
 * @Author: rsvici
 * @Date: 2019-01-31 11:40:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-10-24 17:58:59
 */
// 标识点
if (getQueryString('endsouth')) {

} else {
  // 虹桥艺术中心
  var hqyszxMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.40396, 31.211692],
    height: 290,
  })
  hqyszxMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-30, 31),
    content: "<div class='info1'>虹桥艺术中心</div>",
  })

  // 百盛优客
  var baskMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.40326, 31.210697],
    height: 610,
  })
  baskMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-40, 31),
    content: "<div class='info1'>百盛优客城市广场</div>",
  })

  // 汇金百货
  var hjbhMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.405055, 31.211506],
    height: 340,
  })
  hjbhMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-20, 31),
    content: "<div class='info1'>汇金百货</div>",
  })

  // 巴黎春天
  var blctMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.402042, 31.21171],
    height: 360,
  })
  blctMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-20, 31),
    content: "<div class='info1'>巴黎春天</div>",
  })

  // 尚嘉中心
  var sjzxMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.40682, 31.205660],
    height: 1200,
  })
  sjzxMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-20, 31),
    content: "<div class='info1'>尚嘉中心</div>",
  })

  // 临空soho
  var lksohoMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.352153, 31.221989],
    height: 500,
  })
  lksohoMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-20, 31),
    content: "<div class='info1'>凌空SOHO</div>",
  })

  // 金虹桥国际中心
  var jgltgcMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.40303, 31.208895],
    height: 1500,
  })
  jgltgcMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-35, 31),
    content: "<div class='info1'>金虹桥国际中心</div>",
  })


  // 高岛屋
  var gdwMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.403279, 31.197769],
    height: 1300,
  })
  gdwMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-10, 31),
    content: "<div class='info1'>高岛屋</div>",
  })

  // 南丰城
  var nfcMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.408059, 31.207468],
    height: 1000,
  })
  nfcMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-10, 31),
    content: "<div class='info1'>南丰城</div>",
  })

  // 华宁国际广场
  var hngjMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.422457, 31.217483],
    height: 1000,
  })
  hngjMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-30, 31),
    content: "<div class='info1'>华宁国际广场</div>",
  })

  // 上海世贸商城
  var smscMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.400663, 31.201772],
    height: 700,
  })
  smscMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-30, 31),
    content: "<div class='info1'>上海世贸商城</div>",
  })

  // 环东华·智尚园
  var hdhMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.418001, 31.203068],
    height: 300,
  })
  hdhMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-30, 31),
    content: "<div class='info1'>环东华·智尚源</div>",
  })

  // 来福士广场
  var lfsMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.41456, 31.216612],
    height: 600,
  })
  lfsMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-25, 31),
    content: "<div class='info1'>来福士广场</div>",
  })

  // 上海国际舞蹈中心
  var gjwdzxMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.394363, 31.19928],
    height: 450,
  })
  gjwdzxMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-40, 31),
    content: "<div class='info1'>上海国际舞蹈中心</div>",
  })

  // 刘海粟美术馆
  var lhsMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.419218, 31.209644],
    height: 350,
  })
  lhsMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-30, 31),
    content: "<div class='info1'>刘海粟美术馆</div>",
  })

  // 上海国际体操中心
  var gjtczxMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.413935, 31.213508],
    height: 550,
  })
  gjtczxMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-40, 31),
    content: "<div class='info1'>上海国际体操中心</div>",
  })

  // 上生新所
  var ssxsMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.427945, 31.208519],
    height: 550,
  })
  ssxsMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-20, 31),
    content: "<div class='info1'>上生新所</div>",
  })

  // 上海银星皇冠假日酒店
  var yxhgMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.429514, 31.202803],
    height: 950,
  })
  yxhgMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-40, 31),
    content: "<div class='info1'>银星皇冠假日酒店</div>",
  })

  // 中山公园
  var zsgyMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.418388, 31.221646],
    height: 550,
  })
  zsgyMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-20, 31),
    content: "<div class='info1'>中山公园</div>",
  })

  // 缤谷广场
  var bggcMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.387616, 31.214272],
    height: 550,
  })
  bggcMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-20, 31),
    content: "<div class='info1'>缤谷广场</div>",
  })

  // 长宁图书馆
  var cntsgMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.388569, 31.214999],
    height: 850,
  })
  cntsgMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-25, 31),
    content: "<div class='info1'>长宁图书馆</div>",
  })

  // 龙之梦购物中心
  var lzmgwMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.416623, 31.219152],
    height: 800,
  })
  lzmgwMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-35, 31),
    content: "<div class='info1'>龙之梦购物中心</div>",
  })

  // 龙之梦万丽酒店
  var lzmgwMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.4171, 31.219152],
    height: 2100,
  })
  lzmgwMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-35, 31),
    content: "<div class='info1'>龙之梦万丽酒店</div>",
  })

  // 上海影城
  var shycMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.429497, 31.202700],
    height: 400,
  })
  shycMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-20, 31),
    content: "<div class='info1'>上海影城</div>",
  })


  // 宋庆龄纪念馆
  var sqlgjMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.410518, 31.195099],
    height: 500,
  })
  sqlgjMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-30, 31),
    content: "<div class='info1'>宋庆龄纪念馆</div>",
  })

  // 长宁文化艺术中心
  var cnwhysMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.387819, 31.205851],
    height: 600,
  })
  cnwhysMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-40, 31),
    content: "<div class='info1'>长宁文化艺术中心</div>",
  })



  // 天山公园
  var tsgyMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.415586, 31.210077],
    height: 600,
  })
  tsgyMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-20, 31),
    content: "<div class='info1'>天山公园</div>",
  })

  // 育音堂 问题
  var yytMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.416773, 31.209064],
    height: 600,
  })
  yytMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-10, 31),
    content: "<div class='info1'>育音堂</div>",
  })

  // 长宁区工人文化宫
  var cnqgrMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.425838, 31.219466],
    height: 600,
  })
  cnqgrMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-40, 31),
    content: "<div class='info1'>长宁区工人文化宫</div>",
  })

  // 长宁区少年儿童图书馆
  var ettsgMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.426645, 31.219051],
    height: 600,
  })
  ettsgMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-50, 31),
    content: "<div class='info1'>长宁区少年儿童图书馆</div>",
  })


  // 星空广场
  var xkgcMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.392423, 31.20068],
    height: 600,
  })
  xkgcMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-20, 31),
    content: "<div class='info1'>星空广场</div>",
  })

  // 虹桥郁锦香宾馆
  var hqyjxMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.410744, 31.203886],
    height: 600,
  })
  hqyjxMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-35, 31),
    content: "<div class='info1'>虹桥郁锦香宾馆</div>",
  })

  // 虹桥锦江大酒店
  var hqjjMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.405538, 31.203441],
    height: 600,
  })
  hqjjMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-35, 31),
    content: "<div class='info1'>虹桥锦江大酒店</div>",
  })

  // 上海扬子江万丽大酒店
  var yzjwlMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.4061, 31.202916],
    height: 600,
  })
  yzjwlMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-50, 31),
    content: "<div class='info1'>上海扬子江万丽大酒店</div>",
  })



  // 上海龙之梦大酒店
  var shlzmMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.430406, 31.210812],
    height: 600,
  })
  shlzmMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-40, 31),
    content: "<div class='info1'>上海龙之梦大酒店</div>",
  })

  // 上海万豪虹桥大酒店
  var whhqMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.376455, 31.191361],
    height: 600,
  })
  whhqMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-45, 31),
    content: "<div class='info1'>上海万豪虹桥大酒店</div>",
  })

  // 虹桥公园
  var hqgyMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.405602, 31.206114],
    height: 600,
  })
  hqgyMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-20, 31),
    content: "<div class='info1'>虹桥公园</div>",
  })


  // 上海国际展览中心
  var gjzlzxMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.403979, 31.203214],
    height: 600,
  })
  gjzlzxMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-40, 31),
    content: "<div class='info1'>上海国际展览中心</div>",
  })


  // 上海延安中学
  var yazxMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.38047, 31.209344],
    height: 600,
  })
  yazxMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-30, 31),
    content: "<div class='info1'>上海延安中学</div>",
  })

  // 上海延安中学体育馆
  var yazxtygMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.38133, 31.210605],
    height: 600,
  })
  yazxtygMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-35, 31),
    content: "<div class='info1'>延安中学体育馆</div>",
  })


  // 新泾公园
  var xjgyMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.36213, 31.217141],
    height: 600,
  })
  xjgyMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-20, 31),
    content: "<div class='info1'>新泾公园</div>",
  })

  // 上海动物园
  var shdwyMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.363453, 31.192614],
    height: 600,
  })
  shdwyMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-25, 31),
    content: "<div class='info1'>上海动物园</div>",
  })

  // 东华创意园
  var dhcyyMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.417569, 31.203627],
    height: 600,
  })
  dhcyyMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-25, 31),
    content: "<div class='info1'>东华创意园</div>",
  })

  // 德必易园
  var dbyyMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.420472, 31.215676],
    height: 600,
  })
  dbyyMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-20, 31),
    content: "<div class='info1'>德必易园</div>",
  })

  // 创邑SPACE源
  var cyspaceMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.416875, 31.211363],
    height: 600,
  })
  cyspaceMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-35, 31),
    content: "<div class='info1'>创邑SPACE源</div>",
  })

  // 创邑·河
  var cyheMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.409928, 31.221962],
    height: 600,
  })
  cyheMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-18, 31),
    content: "<div class='info1'>创邑·河</div>",
  })

  // 上海时尚园
  var shsxsMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.408869, 31.211006],
    height: 600,
  })
  shsxsMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-25, 31),
    content: "<div class='info1'>上海时尚园</div>",
  })

  // 上海天山广场凯悦嘉轩酒店
  var kyjdMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.408326, 31.209465],
    height: 600,
  })
  kyjdMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-40, 31),
    content: "<div class='info1'>上海凯悦嘉轩酒店</div>",
  })

  // 弘基创邑国际园
  var hjcygyyMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.428362, 31.218161],
    height: 600,
  })
  hjcygyyMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-35, 31),
    content: "<div class='info1'>弘基创邑国际园</div>",
  })

  // 民俗文化中心
  var mswhMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.37221, 31.216587],
    height: 600,
  })
  mswhMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-30, 31),
    content: "<div class='info1'>民俗文化中心</div>",
  })


  // 幸福里
  var xflMarker = new AMap.Marker({
    map: map,
    icon: './imgs/icon.png',
    position: [121.430403, 31.204359],
    height: 600,
  })
  xflMarker.setLabel({
    //修改label相对于maker的位置
    offset: new AMap.Pixel(-15, 31),
    content: "<div class='info1'>幸福里</div>",
  })





  // 自定义事件
  // 虹桥艺术中心
  function showInfoMxinhongqiao() {
    window.location.href =
      `../#/shopinfo?shopItemId=3`
  }
  hqyszxMarker.on('click', showInfoMxinhongqiao)

  // 百盛优客
  function showInfoMbaskMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=10`
  }
  baskMarker.on('click', showInfoMbaskMarker)

  // 汇金百货
  function showInfoMhjbhMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=13`
  }
  hjbhMarker.on('click', showInfoMhjbhMarker)

  // 巴黎春天
  function showInfoMblctMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=16`
  }
  blctMarker.on('click', showInfoMblctMarker)

  // 尚嘉中心
  function showInfoMsjzxMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=11`
  }
  sjzxMarker.on('click', showInfoMsjzxMarker)

  // 临空soho
  function showInfoMlksohoMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=17`
  }
  lksohoMarker.on('click', showInfoMlksohoMarker)

  // 金光绿庭广场
  function showInfoMjgltgcMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=12`
  }
  jgltgcMarker.on('click', showInfoMjgltgcMarker)

  // 高岛屋
  function showInfoMgdwMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=18`
  }
  gdwMarker.on('click', showInfoMgdwMarker)

  // 南丰城
  function showInfoMnfcMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=9`
  }
  nfcMarker.on('click', showInfoMnfcMarker)

  // 华宁国际广场
  function showInfoMhngjMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=4`
  }
  hngjMarker.on('click', showInfoMhngjMarker)

  // 上海世贸商城
  function showInfoMsmscMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=14`
  }
  smscMarker.on('click', showInfoMsmscMarker)

  // 环东华·智尚园
  function showInfoMhdhMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=6`
  }
  hdhMarker.on('click', showInfoMhdhMarker)

  // 来福士广场
  function showInfoMlfsMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=15`
  }
  lfsMarker.on('click', showInfoMlfsMarker)

  // 上海国际舞蹈中心
  function showInfoMgjwdzxMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=8`
  }
  gjwdzxMarker.on('click', showInfoMgjwdzxMarker)

  // 刘海粟美术馆
  function showInfoMlhsMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=2`
  }
  lhsMarker.on('click', showInfoMlhsMarker)


  // 上海国际体操中心
  function showInfoMgjtczxMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=7`
  }
  gjtczxMarker.on('click', showInfoMgjtczxMarker)

  // 上生新所
  function showInfoMgssxsMarker() {
    window.location.href =
      `../#/shopinfo?shopItemId=5`
  }
  ssxsMarker.on('click', showInfoMgssxsMarker)


  // 上海银星皇冠假日酒店
  yxhgMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=19'
  })

  // 中山公园
  zsgyMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=20'
  })

  // 缤谷广场
  bggcMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=21'
  })

  // 长宁图书馆
  cntsgMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=22'
  })
  // 龙之梦购物中心
  lzmgwMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=23'
  })
  // 龙之梦万丽酒店
  lzmgwMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=24'
  })
  // 上海影城
  shycMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=25'
  })
  // 宋庆龄纪念馆
  sqlgjMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=26'
  })
  // 长宁文化艺术中心
  cnwhysMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=28'
  })
  // 天山公园
  tsgyMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=29'
  })
  // 育音堂
  yytMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=30'
  })
  // 长宁区工人文化宫
  cnqgrMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=31'
  })
  // 长宁区少年儿童图书馆
  ettsgMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=32'
  })
  // 星空广场
  xkgcMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=33'
  })
  // 虹桥郁锦香宾馆
  hqyjxMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=34'
  })
  // 虹桥锦江大酒店
  hqjjMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=35'
  })
  // 上海扬子江万丽大酒店
  yzjwlMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=36'
  })
  // 上海龙之梦大酒店
  shlzmMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=37'
  })
  // 上海万豪虹桥大酒店
  whhqMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=38'
  })
  // 虹桥公园
  hqgyMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=39'
  })
  // 上海国际展览中心
  gjzlzxMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=40'
  })
  // 上海延安中学
  yazxMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=41'
  })
  // 上海延安中学体育馆
  yazxtygMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=42'
  })
  // 新泾公园
  xjgyMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=43'
  })
  // 上海动物园
  shdwyMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=44'
  })
  // 东华创意园
  dhcyyMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=45'
  })
  // 德必易园
  dbyyMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=46'
  })

  // 创邑SPACE源
  cyspaceMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=47'
  })
  // 创邑·河
  cyheMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=48'
  })
  // 上海时尚园
  shsxsMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=49'
  })
  // 上海天山广场凯悦嘉轩酒店
  kyjdMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=59'
  })
  // 弘基创邑国际园
  hjcygyyMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=51'
  })
  // 民俗文化中心
  mswhMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=52'
  })
  // 幸福里
  xflMarker.on('click', function () {
    window.location.href =
      '../#/shopinfo?shopItemId=53'
  })




}