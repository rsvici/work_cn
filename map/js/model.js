/*
 * @Descripttion: 
 * @version: 
 * @Author: rsvici
 * @Date: 2019-01-31 11:40:32
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2019-10-21 16:52:54
 */
// 添加模型
map.plugin(['AMap.GltfLoader'], function () {
  console.log(1);
  var gltfObj = new AMap.GltfLoader()
  // 虹桥艺术中心
  var urlHqyszx = './gltf/hqyszx.gltf'
  var positionHqyszx = {
    position: new AMap.LngLat(121.404011, 31.211685),
    scale: 16,
    height: -13,
    scene: 0,
  }
  gltfObj.load(urlHqyszx, function (gltfCity) {
    gltfCity.setOption(positionHqyszx)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 百盛优客
  var urlBsyk = './gltf/bsyk.gltf'
  var positionBsyk = {
    position: new AMap.LngLat(121.40326, 31.210697),
    scale: 70,
    height: 0,
    scene: 0,
  }
  gltfObj.load(urlBsyk, function (gltfCity) {
    gltfCity.setOption(positionBsyk)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(190)
    object3Dlayer.add(gltfCity)
  })

  // 汇金百货
  var urlHjbh = './gltf/hjbh.gltf'
  var positionHjbh = {
    position: new AMap.LngLat(121.405055, 31.211506),
    scale: 20,
    height: -20,
    scene: 0,
  }
  gltfObj.load(urlHjbh, function (gltfCity) {
    gltfCity.setOption(positionHjbh)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(10)
    object3Dlayer.add(gltfCity)
  })

  // 巴黎春天
  var urlBlct = './gltf/blct.gltf'
  var positionBlct = {
    position: new AMap.LngLat(121.402032, 31.21175),
    scale: 100,
    height: -35,
    scene: 0,
  }
  gltfObj.load(urlBlct, function (gltfCity) {
    gltfCity.setOption(positionBlct)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(10)
    object3Dlayer.add(gltfCity)
  })

  // 尚嘉中心
  var urlSjzx = './gltf/sjzx.gltf'
  var positionSjzx = {
    position: new AMap.LngLat(121.40706, 31.205765),
    scale: 55,
    height: 0,
    scene: 0,
  }
  gltfObj.load(urlSjzx, function (gltfCity) {
    gltfCity.setOption(positionSjzx)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(195)
    object3Dlayer.add(gltfCity)
  })

  // 临空soho
  var urlLksoho = './gltf/lksoho.gltf'
  var positionLksoho = {
    position: new AMap.LngLat(121.352153, 31.221989),
    scale: 170,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlLksoho, function (gltfCity) {
    gltfCity.setOption(positionLksoho)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 金光绿庭广场
  var urlJglt = './gltf/jglt.gltf'
  var positionJglt = {
    position: new AMap.LngLat(121.40263, 31.208855),
    scale: 90,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlJglt, function (gltfCity) {
    gltfCity.setOption(positionJglt)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(13)
    object3Dlayer.add(gltfCity)
  })

  // 高岛屋
  var urlGdw = './gltf/gdw.gltf'
  var positionGdw = {
    position: new AMap.LngLat(121.403279, 31.197769),
    scale: 80,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlGdw, function (gltfCity) {
    gltfCity.setOption(positionGdw)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(18)
    object3Dlayer.add(gltfCity)
  })

  // 南丰城
  var urlNfc = './gltf/nfc.gltf'
  var positionNfc = {
    position: new AMap.LngLat(121.408059, 31.207468),
    scale: 95,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlNfc, function (gltfCity) {
    gltfCity.setOption(positionNfc)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(13)
    object3Dlayer.add(gltfCity)
  })

  // 华宁国际广场
  var urlHngj = './gltf/hngj.gltf'
  var positionHngj = {
    position: new AMap.LngLat(121.422457, 31.217483),
    scale: 30,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlHngj, function (gltfCity) {
    gltfCity.setOption(positionHngj)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(-2)
    object3Dlayer.add(gltfCity)
  })

  // 世贸商城
  var urlSmsc = './gltf/smsc.gltf'
  var positionSmsc = {
    position: new AMap.LngLat(121.400663, 31.201772),
    scale: 110,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlSmsc, function (gltfCity) {
    gltfCity.setOption(positionSmsc)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(-17)
    object3Dlayer.add(gltfCity)
  })

  // 环东华·智尚园
  var urlHdh = './gltf/hdh.gltf'
  var positionHdh = {
    position: new AMap.LngLat(121.418081, 31.203118),
    scale: 40,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlHdh, function (gltfCity) {
    gltfCity.setOption(positionHdh)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(21)
    object3Dlayer.add(gltfCity)
  })

  // 来福士广场
  var urlLfs = './gltf/lfs.gltf'
  var positionLfs = {
    position: new AMap.LngLat(121.41456, 31.216612),
    scale: 88,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlLfs, function (gltfCity) {
    gltfCity.setOption(positionLfs)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(13)
    object3Dlayer.add(gltfCity)
  })

  // 上海国际舞蹈中心
  var urlGjwdzx = './gltf/gjwdzx.gltf'
  var positionGjwdzx = {
    position: new AMap.LngLat(121.394363, 31.19928),
    scale: 90,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlGjwdzx, function (gltfCity) {
    gltfCity.setOption(positionGjwdzx)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(160)
    object3Dlayer.add(gltfCity)
  })

  // 刘海粟美术馆
  var urlLhs = './gltf/lhs.gltf'
  var positionLhs = {
    position: new AMap.LngLat(121.419218, 31.209644),
    scale: 38,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlLhs, function (gltfCity) {
    gltfCity.setOption(positionLhs)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(160)
    object3Dlayer.add(gltfCity)
  })

  // 国际体操中心
  var urlGjtczx = './gltf/gjtczx.gltf'
  var positionGjtczx = {
    position: new AMap.LngLat(121.413935, 31.213508),
    scale: 90,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlGjtczx, function (gltfCity) {
    gltfCity.setOption(positionGjtczx)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })


  // 上生新所
  var urlssxs = './gltf/ssxs.gltf'
  var positionssxs = {
    position: new AMap.LngLat(121.427961, 31.208541),
    scale: 109,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlssxs, function (gltfCity) {
    gltfCity.setOption(positionssxs)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 上海银星皇冠假日酒店
  var urlyxhg = './gltf/yxhg.gltf'
  var positionyxhg = {
    position: new AMap.LngLat(121.429514, 31.202803),
    scale: 38,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlyxhg, function (gltfCity) {
    gltfCity.setOption(positionyxhg)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(10)
    object3Dlayer.add(gltfCity)
  })

  // 中山公园
  var urlzsgy = './gltf/zsgy.gltf'
  var positionzsgy = {
    position: new AMap.LngLat(121.418388, 31.221646),
    scale: 118,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlzsgy, function (gltfCity) {
    gltfCity.setOption(positionzsgy)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 缤谷广场
  var urlbggc = './gltf/bggc.gltf'
  var positionbggc = {
    position: new AMap.LngLat(121.387616, 31.214272),
    scale: 140,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlbggc, function (gltfCity) {
    gltfCity.setOption(positionbggc)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(14)
    object3Dlayer.add(gltfCity)
  })

  // 长宁图书馆
  var urlcntsg = './gltf/cntsg.gltf'
  var positioncntsg = {
    position: new AMap.LngLat(121.388569, 31.214999),
    scale: 77,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlcntsg, function (gltfCity) {
    gltfCity.setOption(positioncntsg)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(15)
    object3Dlayer.add(gltfCity)
  })

  // 龙之梦购物中心
  var urlgzmgw = './gltf/lzmgw.gltf'
  var positionlzmgw = {
    position: new AMap.LngLat(121.416623, 31.219152),
    scale: 142,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlgzmgw, function (gltfCity) {
    gltfCity.setOption(positionlzmgw)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 龙之梦万丽酒店
  var urllzmwl = './gltf/lzmwl.gltf'
  var positionlzmwl = {
    position: new AMap.LngLat(121.416623, 31.219152),
    scale: 142,
    height: 0,
    scene: 0
  }
  gltfObj.load(urllzmwl, function (gltfCity) {
    gltfCity.setOption(positionlzmwl)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 上海影城
  var urlshyc = './gltf/shyc.gltf'
  var positionshyc = {
    position: new AMap.LngLat(121.429600, 31.202800),
    scale: 36,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlshyc, function (gltfCity) {
    gltfCity.setOption(positionshyc)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(8)
    object3Dlayer.add(gltfCity)
  })



  // 宋庆龄纪念馆
  var urlsqlgj = './gltf/sqlgj.gltf'
  var positionsqlgj = {
    position: new AMap.LngLat(121.410518, 31.195099),
    scale: 160,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlsqlgj, function (gltfCity) {
    gltfCity.setOption(positionsqlgj)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 长宁文化艺术中心
  var urlcnwhys = './gltf/cnwgys.gltf'
  var positioncnwhys = {
    position: new AMap.LngLat(121.387819, 31.205851),
    scale: 52,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlcnwhys, function (gltfCity) {
    gltfCity.setOption(positioncnwhys)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 天山公园
  var urltsgy = './gltf/2/tsgy.gltf'
  var positiontsgy = {
    position: new AMap.LngLat(121.415586, 31.210077),
    scale: 168,
    height: 0,
    scene: 0
  }
  gltfObj.load(urltsgy, function (gltfCity) {
    gltfCity.setOption(positiontsgy)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 育音堂
  var urltyyt = './gltf/2/yyt.gltf'
  var positionyyt = {
    position: new AMap.LngLat(121.415586, 31.210077),
    scale: 168,
    height: 0,
    scene: 0
  }
  gltfObj.load(urltyyt, function (gltfCity) {
    gltfCity.setOption(positionyyt)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })


  // 长宁区工人文化宫
  var urltcnqgr = './gltf/2/cnqgr.gltf'
  var positioncnqgr = {
    position: new AMap.LngLat(121.425838, 31.219466),
    scale: 40,
    height: 0,
    scene: 0
  }
  gltfObj.load(urltcnqgr, function (gltfCity) {
    gltfCity.setOption(positioncnqgr)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })


  // 长宁区少年儿童图书馆
  var urlettsg = './gltf/2/ettsg.gltf'
  var positionettsg = {
    position: new AMap.LngLat(121.426645, 31.219051),
    scale: 26,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlettsg, function (gltfCity) {
    gltfCity.setOption(positionettsg)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })


  // 星空广场
  var urlxkgc = './gltf/2/xkgc.gltf'
  var positionexkgc = {
    position: new AMap.LngLat(121.392423, 31.20068),
    scale: 98,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlxkgc, function (gltfCity) {
    gltfCity.setOption(positionexkgc)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })


  //  虹桥郁锦香宾馆
  var urlhqyjx = './gltf/2/hqyjx.gltf'
  var positionehqyjx = {
    position: new AMap.LngLat(121.410744, 31.203886),
    scale: 140,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlhqyjx, function (gltfCity) {
    gltfCity.setOption(positionehqyjx)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 虹桥锦江大酒店
  var urlhqjj = './gltf/2/hqjj.gltf'
  var positionehqjj = {
    position: new AMap.LngLat(121.405538, 31.203441),
    scale: 72,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlhqjj, function (gltfCity) {
    gltfCity.setOption(positionehqjj)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 上海扬子江万丽大酒店
  var urlyzjwl = './gltf/2/yzjwl.gltf'
  var positioneyzjwl = {
    position: new AMap.LngLat(121.4061, 31.202916),
    scale: 70,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlyzjwl, function (gltfCity) {
    gltfCity.setOption(positioneyzjwl)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 上海龙之梦大酒店
  var urlshlzm = './gltf/2/shlzm.gltf'
  var positioneshlzm = {
    position: new AMap.LngLat(121.430406, 31.210812),
    scale: 64,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlshlzm, function (gltfCity) {
    gltfCity.setOption(positioneshlzm)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })


  // 上海万豪虹桥大酒店
  var urlwhhq = './gltf/2/whhq.gltf'
  var positionewhhq = {
    position: new AMap.LngLat(121.376455, 31.191361),
    scale: 120,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlwhhq, function (gltfCity) {
    gltfCity.setOption(positionewhhq)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 虹桥公园
  var urlhqgy = './gltf/2/hqgy.gltf'
  var positionehqgy = {
    position: new AMap.LngLat(121.405602, 31.206114),
    scale: 81,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlhqgy, function (gltfCity) {
    gltfCity.setOption(positionehqgy)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 上海国际展览中心
  var urlgjzlzx = './gltf/2/gjzlzx.gltf'
  var positionegjzlzx = {
    position: new AMap.LngLat(121.403979, 31.203214),
    scale: 81,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlgjzlzx, function (gltfCity) {
    gltfCity.setOption(positionegjzlzx)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })



  // 延安中学
  var urlyazx = './gltf/2/yazx.gltf'
  var positioneyazx = {
    position: new AMap.LngLat(121.38047, 31.209344),
    scale: 156,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlyazx, function (gltfCity) {
    gltfCity.setOption(positioneyazx)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 延安中学体育馆
  var urlyazxtyg = './gltf/2/yazxtyg.gltf'
  var positioneyazxtyg = {
    position: new AMap.LngLat(121.38047, 31.209344),
    scale: 156,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlyazxtyg, function (gltfCity) {
    gltfCity.setOption(positioneyazxtyg)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 新泾公园
  var urlxjgy = './gltf/2/xjgy.gltf'
  var positionexjgy = {
    position: new AMap.LngLat(121.36213, 31.217141),
    scale: 78,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlxjgy, function (gltfCity) {
    gltfCity.setOption(positionexjgy)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 上海动物园
  var urlshdwy = './gltf/2/shdwy.gltf'
  var positioneshdwy = {
    position: new AMap.LngLat(121.363453, 31.192614),
    scale: 440,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlshdwy, function (gltfCity) {
    gltfCity.setOption(positioneshdwy)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })


  // 东华创意园
  var urldhcyy = './gltf/2/dhcyy.gltf'
  var positiondhcyy = {
    position: new AMap.LngLat(121.417569, 31.203627),
    scale: 38,
    height: 0,
    scene: 0
  }
  gltfObj.load(urldhcyy, function (gltfCity) {
    gltfCity.setOption(positiondhcyy)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 德必易园
  var urldbyy = './gltf/2/dhcyy.gltf'
  var positiondbyy = {
    position: new AMap.LngLat(121.420472, 31.215676),
    scale: 80,
    height: 0,
    scene: 0
  }
  gltfObj.load(urldbyy, function (gltfCity) {
    gltfCity.setOption(positiondbyy)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 创邑SPACE源
  var urlcyspace = './gltf/2/cyspace.gltf'
  var positioncyspace = {
    position: new AMap.LngLat(121.416875, 31.211363),
    scale: 57,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlcyspace, function (gltfCity) {
    gltfCity.setOption(positioncyspace)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 创邑·河
  var urlcyhe = './gltf/2/cyhe.gltf'
  var positioncyhe = {
    position: new AMap.LngLat(121.409928, 31.221962),
    scale: 62,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlcyhe, function (gltfCity) {
    gltfCity.setOption(positioncyhe)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 上海时尚园 问题
  var urlshssx = './gltf/2/shssx.gltf'
  var positionshssx = {
    position: new AMap.LngLat(121.408869, 31.211006),
    scale: 105,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlshssx, function (gltfCity) {
    gltfCity.setOption(positionshssx)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })


  // 上海天山广场凯悦嘉轩酒店 问题
  var urlkyjd = './gltf/2/kyjd.gltf'
  var positionkyjd = {
    position: new AMap.LngLat(121.408326, 31.209465),
    scale: 66,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlkyjd, function (gltfCity) {
    gltfCity.setOption(positionkyjd)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })



  // 弘基创邑国际园
  var urlhjcygyy = './gltf/2/hjcygyy.gltf'
  var positionhjcygyy = {
    position: new AMap.LngLat(121.428362, 31.218161),
    scale: 66,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlhjcygyy, function (gltfCity) {
    gltfCity.setOption(positionhjcygyy)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 民俗文化中心
  var urlmswh = './gltf/2/mswh.gltf'
  var positionmswh = {
    position: new AMap.LngLat(121.37221, 31.216587),
    scale: 74,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlmswh, function (gltfCity) {
    gltfCity.setOption(positionmswh)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })

  // 幸福里
  var urlxfl = './gltf/2/xfl.gltf'
  var positionxfl = {
    position: new AMap.LngLat(121.430403, 31.204359),
    scale: 74,
    height: 0,
    scene: 0
  }
  gltfObj.load(urlxfl, function (gltfCity) {
    gltfCity.setOption(positionxfl)
    gltfCity.rotateX(90)
    gltfCity.rotateY(0)
    gltfCity.rotateZ(0)
    object3Dlayer.add(gltfCity)
  })







})