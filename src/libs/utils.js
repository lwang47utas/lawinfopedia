// 存放一些基础的公用函数
import moment from 'moment'
// import * as L from 'leaflet'
import Cookies from 'js-cookie'
import { articleRandom, random } from '@/api/index'

// cookie保存的天数 7

export const TOKEN_KEY = 'token'

export const setUserid = (id) => {
  Cookies.set('xz_id', id, { expires: 7 })
}

// 获取token
export const getToken = () => {
  const token = localStorage.getItem('hn_token')
  if (token && token !== 'undefined') {
    return token
  } else {
    return false
  }
}

// 获取推荐宠物列表
export const getMoreList = () => {
  return new Promise((resolve, reject) => {
    random().then(response => {
      resolve(response.data)
    })
  })
}
// 获取推荐文章列表
export const getPetArticleList = () => {
  return new Promise((resolve, reject) => {
    articleRandom({ type: 1 }).then(response => {
      resolve(response.data.lawyerArticleTypeDTOList)
    })
  })
}

// 将format格式的时间 转为 date对象
export const timeToDate = (time, format) => {
  const f = format || 'YYYYMMDDHHmm'
  return moment(time, f).toDate()
}

// 将date对象 转为 format格式的时间
export const timeToString = (time, format) => {
  const f = format || 'YYYYMMDDHHmm'
  return moment(time).format(f)
}

export const timeToUtc = (time, format) => {
  const f = format || 'YYYYMMDDHHmm'
  return moment(time, f).valueOf()
}

// 将时间轴向后拼贴,默认传入时间格式,传出格式为YYYYMMDDHHmm,
// 初始时间，时间间隔，拼贴数量，时间间隔单位，输出格式，输入格式
export const getTimeListAfter = (time, interval, length, unit, format, format2) => {
  var start = time
  var list = []
  var f = format || 'YYYYMMDDHHmm'
  var f2 = format2 || 'YYYYMMDDHHmm'
  var u = unit || 'minutes'
  for (let i = 0; i < length; i++) {
    var item = moment(start, f2).add(interval, u).format(f)
    list.push(item)
    start = item
  }
  return list
}

// 将时间轴向前拼贴,默认传入时间格式,传出格式为YYYYMMDDHHmm,
// 初始时间，时间间隔，拼贴数量，时间间隔单位，输出格式，输入格式
export const getTimeListBefor = (time, interval, length, unit, format, format2) => {
  var start = time
  var list = []
  var f = format || 'YYYYMMDDHHmm'
  var f2 = format2 || 'YYYYMMDDHHmm'
  var u = unit || 'minutes'
  list.push(start)// 第一个为输入值
  for (let i = 0; i < length - 1; i++) {
    var item = moment(start, f2).subtract(interval, u).format(f)
    list.push(item)
    start = item
  }
  return list.reverse()
}

// 返回逗号拼接的边界,输入为map的getbounds返回
export const getLoc = (b) => {
  return b._southWest.lat +
    ',' +
    b._southWest.lng +
    ',' +
    b._northEast.lat +
    ',' +
    b._northEast.lng
}

// 将时间加8小时  YYYYMMDDHHmm格式输出
export const addEight = (time, format) => {
  var f = format || 'YYYYMMDDHHmm'
  return moment(time, f).add(8, 'hours').format(f)
}

// 将时间减8小时  YYYYMMDDHHmm格式输出
export const subEight = (time, format) => {
  var f = format || 'YYYYMMDDHHmm'
  return moment(time, f).subtract(8, 'hours').format(f)
}

// 将时间减24小时  YYYYMMDDHHmm格式输出
export const subOneDay = (time, format) => {
  var f = format || 'YYYYMMDDHHmm'
  return moment(time, f).subtract(23, 'hours').format(f)
}

// 将时间加任意分钟  YYYYMMDDHHmm格式输出
export const addmin = (time, num, format) => {
  var f = format || 'YYYYMMDDHHmm'
  return moment(time, f).add(num, 'minutes').format('YYYYMMDDHHmm')
}
// 将时间加任意分钟  YYYYMMDDHHmm格式输出
export const subhour = (time, num, format, format2, unit) => {
  var f = format || 'YYYYMMDDHHmm'
  var f2 = format2 || 'YYYYMMDDHHmm'
  var u = unit || 'hours'
  return moment(time, f2).subtract(num, u).format(f)
}
// 将时间加任意小时  format格式输出 format2为输入时间格式
export const addhour = (time, num, format, format2, unit) => {
  var f = format || 'YYYYMMDDHHmm'
  var f2 = format2 || 'YYYYMMDDHHmm'
  var u = unit || 'hours'
  return moment(time, f2).add(num, u).format(f)
}

// 将时间格式输出
export const timeFormat = (time, format, format2) => {
  var f = format || 'YYYY-MM-DD HH:mm'
  var f2 = format2 || 'YYYYMMDDHHmm'
  return moment(time, f2).format(f)
}

// 获取二次样条B曲线
export const getQuadricBSplineFactor = function (k, t) {
  if (k === 0) return Math.pow(t - 1, 2) / 2
  if (k === 1) return (-2 * Math.pow(t, 2) + 2 * t + 1) / 2
  if (k === 2) return Math.pow(t, 2) / 2
  return 0
}

// 获取曲线绘制点，用于强对流的绘制
export const getQBSplinePoints = function (points) {
  if (points.length <= 2) {
    return points
  }
  var n = 2
  var bSplinePoints = []
  var m = points.length - n - 1
  bSplinePoints.push(points[0])
  for (var i = 0; i <= m; i++) {
    for (var t = 0; t <= 1; t += 0.05) {
      var x = 0
      var y = 0
      for (var k = 0; k <= n; k++) {
        var factor = getQuadricBSplineFactor(k, t)
        x += factor * points[i + k][0]
        y += factor * points[i + k][1]
      }
      bSplinePoints.push([x, y])
    }
  }
  return bSplinePoints
}

// 获取预报格点的抽希
export function getlevel (zoom, max) {
  // var max = 13;
  var level
  if (zoom > max) {
    level = 1
  } else {
    level = Math.pow(2, max - zoom)
  }
  return level.toFixed(0)
}

// 获取自动站抽希用到的cell
export function getCell (zz) {
  var cell
  var zoom = Math.floor(zz)
  switch (zoom) {
    case 3:
      cell = 5
      break
    case 4:
      cell = 3
      break
    case 5:
      cell = 2.3
      break
    case 6:
      cell = 1.5
      break
    case 7:
      cell = 1.0
      break
    case 8:
      cell = 0.4
      break
    case 9:
      cell = 0.2
      break
    default:
      cell = 0.1
      break
  }
  return cell
}

// 根据风向获取中文方向
export function getDirection (angel) {
  if (angel < 22.5) {
    return '北风'
  } else if (angel < 67.5) {
    return '东北风'
  } else if (angel < 112.5) {
    return '东风'
  } else if (angel < 157.5) {
    return '东南风'
  } else if (angel < 202.5) {
    return '南风'
  } else if (angel < 247.5) {
    return '西南风'
  } else if (angel < 292.5) {
    return '西风'
  } else if (angel < 337.5) {
    return '西北风'
  } else if (angel < 360.5) {
    return '北风'
  }
}

export function getCurvePoints (points, tension, isClosed, numOfSegments) {
  // use input value if provided, or use a default value
  var pts = []
  for (let i = 2; i < points.length - 3; i += 2) {
    pts.push(points[i][0])
    pts.push(points[i][1])
  }
  tension = (typeof tension !== 'undefined') ? tension : 0.1
  isClosed = isClosed || true // 闭合
  numOfSegments = numOfSegments || 15 // 细化，越大约弯曲

  var _pts = []
  var res = [] // clone array
  var x
  var y // our x,y coords
  var t1x
  var t2x
  var t1y
  var t2y // tension vectors
  var c1
  var c2
  var c3
  var c4 // cardinal points
  var st
  var t
  var i // steps based on num. of segments

  // clone array so we don't change the original
  //
  _pts = pts.slice(0)

  if (isClosed) {
    _pts.unshift(pts[pts.length - 1])
    _pts.unshift(pts[pts.length - 2])
    _pts.unshift(pts[pts.length - 1])
    _pts.unshift(pts[pts.length - 2])
    _pts.push(pts[0])
    _pts.push(pts[1])
  } else {
    _pts.unshift(pts[1]) // copy 1. point and insert at beginning
    _pts.unshift(pts[0])
    _pts.push(pts[pts.length - 2]) // copy last point and append
    _pts.push(pts[pts.length - 1])
  }

  // ok, lets start..

  // 1. loop goes through point array
  // 2. loop goes through each segment between the 2 pts + 1e point before and after
  for (i = 2; i < (_pts.length - 4); i += 2) {
    for (t = 0; t <= numOfSegments; t++) {
      // calc tension vectors
      t1x = (_pts[i + 2] - _pts[i - 2]) * tension
      t2x = (_pts[i + 4] - _pts[i]) * tension

      t1y = (_pts[i + 3] - _pts[i - 1]) * tension
      t2y = (_pts[i + 5] - _pts[i + 1]) * tension

      // calc step
      st = t / numOfSegments

      // calc cardinals
      c1 = 2 * Math.pow(st, 3) - 3 * Math.pow(st, 2) + 1
      c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2)
      c3 = Math.pow(st, 3) - 2 * Math.pow(st, 2) + st
      c4 = Math.pow(st, 3) - Math.pow(st, 2)

      // calc x and y cords with common control vectors
      x = c1 * _pts[i] + c2 * _pts[i + 2] + c3 * t1x + c4 * t2x
      y = c1 * _pts[i + 1] + c2 * _pts[i + 3] + c3 * t1y + c4 * t2y

      // store points in array
      res.push(x)
      res.push(y)
    }
  }
  const arr = []
  for (i = 2; i < res.length - 1; i += 2) {
    arr.push([res[i], res[i + 1]])
  }
  return arr
}

export function getCurvePointsLine (points, tension, isClosed, numOfSegments) {
  // use input value if provided, or use a default value
  var pts = []
  for (let i = 0; i < points.length; i++) {
    pts.push(points[i][0])
    pts.push(points[i][1])
  }
  tension = (typeof tension !== 'undefined') ? tension : 0.6
  isClosed = isClosed || false // 闭合
  numOfSegments = numOfSegments || 32 // 细化，越大约平滑

  var _pts = []
  var res = [] // clone array
  var x
  var y // our x,y coords
  var t1x
  var t2x
  var t1y
  var t2y // tension vectors
  var c1
  var c2
  var c3
  var c4 // cardinal points
  var st
  var t
  var i // steps based on num. of segments

  // clone array so we don't change the original
  //
  _pts = pts.slice(0)

  if (isClosed) {
    _pts.unshift(pts[pts.length - 1])
    _pts.unshift(pts[pts.length - 2])
    _pts.unshift(pts[pts.length - 1])
    _pts.unshift(pts[pts.length - 2])
    _pts.push(pts[0])
    _pts.push(pts[1])
  } else {
    _pts.unshift(pts[1]) // copy 1. point and insert at beginning
    _pts.unshift(pts[0])
    _pts.push(pts[pts.length - 2]) // copy last point and append
    _pts.push(pts[pts.length - 1])
  }

  // ok, lets start..

  // 1. loop goes through point array
  // 2. loop goes through each segment between the 2 pts + 1e point before and after
  for (i = 2; i < (_pts.length - 4); i += 2) {
    for (t = 0; t <= numOfSegments; t++) {
      // calc tension vectors
      t1x = (_pts[i + 2] - _pts[i - 2]) * tension
      t2x = (_pts[i + 4] - _pts[i]) * tension

      t1y = (_pts[i + 3] - _pts[i - 1]) * tension
      t2y = (_pts[i + 5] - _pts[i + 1]) * tension

      // calc step
      st = t / numOfSegments

      // calc cardinals
      c1 = 2 * Math.pow(st, 3) - 3 * Math.pow(st, 2) + 1
      c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2)
      c3 = Math.pow(st, 3) - 2 * Math.pow(st, 2) + st
      c4 = Math.pow(st, 3) - Math.pow(st, 2)

      // calc x and y cords with common control vectors
      x = c1 * _pts[i] + c2 * _pts[i + 2] + c3 * t1x + c4 * t2x
      y = c1 * _pts[i + 1] + c2 * _pts[i + 3] + c3 * t1y + c4 * t2y

      // store points in array
      res.push(x)
      res.push(y)
    }
  }
  const arr = []
  for (i = 2; i < res.length - 1; i += 2) {
    arr.push([res[i], res[i + 1]])
  }
  return arr
}

export function getCurvePointsLine2 (points, tension, isClosed, numOfSegments) {
  // use input value if provided, or use a default value
  var pts = []
  for (let i = 0; i < points.length; i++) {
    pts.push(points[i][0])
    pts.push(points[i][1])
  }
  tension = (typeof tension !== 'undefined') ? tension : 0.6
  isClosed = isClosed || false // 闭合
  numOfSegments = numOfSegments || 32 // 细化，越大约平滑

  var _pts = []
  var res = [] // clone array
  var x
  var y // our x,y coords
  var t1x
  var t2x
  var t1y
  var t2y // tension vectors
  var c1
  var c2
  var c3
  var c4 // cardinal points
  var st
  var t
  var i // steps based on num. of segments

  // clone array so we don't change the original
  //
  _pts = pts.slice(0)

  if (isClosed) {
    _pts.unshift(pts[pts.length - 1])
    _pts.unshift(pts[pts.length - 2])
    _pts.unshift(pts[pts.length - 1])
    _pts.unshift(pts[pts.length - 2])
    _pts.push(pts[0])
    _pts.push(pts[1])
  } else {
    _pts.unshift(pts[1]) // copy 1. point and insert at beginning
    _pts.unshift(pts[0])
    _pts.push(pts[pts.length - 2]) // copy last point and append
    _pts.push(pts[pts.length - 1])
  }

  // ok, lets start..

  // 1. loop goes through point array
  // 2. loop goes through each segment between the 2 pts + 1e point before and after
  for (i = 2; i < (_pts.length - 4); i += 2) {
    for (t = 0; t <= numOfSegments; t++) {
      // calc tension vectors
      t1x = (_pts[i + 2] - _pts[i - 2]) * tension
      t2x = (_pts[i + 4] - _pts[i]) * tension

      t1y = (_pts[i + 3] - _pts[i - 1]) * tension
      t2y = (_pts[i + 5] - _pts[i + 1]) * tension

      // calc step
      st = t / numOfSegments

      // calc cardinals
      c1 = 2 * Math.pow(st, 3) - 3 * Math.pow(st, 2) + 1
      c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2)
      c3 = Math.pow(st, 3) - 2 * Math.pow(st, 2) + st
      c4 = Math.pow(st, 3) - Math.pow(st, 2)

      // calc x and y cords with common control vectors
      x = c1 * _pts[i] + c2 * _pts[i + 2] + c3 * t1x + c4 * t2x
      y = c1 * _pts[i + 1] + c2 * _pts[i + 3] + c3 * t1y + c4 * t2y

      // store points in array
      res.push(x)
      res.push(y)
    }
  }
  const arr = []
  for (i = 2; i < res.length - 1; i += 2) {
    arr.push([res[i + 1], res[i]])
  }
  return arr
}

export function getCurve (ps, isClosed, scale, reverse) {
  scale = scale || 0.6// scale为角度，一般用0.6
  isClosed = isClosed || false // 默认不闭合
  reverse = reverse || false // 默认不翻转

  var points = []// 存放转换后的标准格式点集
  var res = []// 存放返回的结果
  // 存放控制点 一条线段两个控制点
  var extrapoints = []
  for (let i = 0; i < ps.length; i++) {
    points.push({
      x: ps[i][0],
      y: ps[i][1]
    })
  }
  var len = points.length
  var middles = []
  // 生成中点
  for (let i = 0; i < len; i++) {
    // if(isClosed)
    const nexti = (i + 1) % len // 后一个点
    const x = (points[i].x + points[nexti].x) / 2.0
    const y = (points[i].y + points[nexti].y) / 2.0
    middles.push({
      x: x,
      y: y
    })
  }

  // 平移中点
  for (let i = 0; i < len; i++) {
    const nexti = (i + 1) % len // 后一个点
    const backi = (i + len - 1) % len // 前一个点
    const midinmid = {
      x: '',
      y: ''
    }
    midinmid.x = (middles[i].x + middles[backi].x) / 2.0
    midinmid.y = (middles[i].y + middles[backi].y) / 2.0
    var offsetx = points[i].x - midinmid.x
    var offsety = points[i].y - midinmid.y
    var extraindex = 2 * i
    extrapoints[extraindex] = {
      x: '',
      y: ''
    }
    extrapoints[extraindex].x = middles[backi].x + offsetx
    extrapoints[extraindex].y = middles[backi].y + offsety
    // 朝 points[i]方向收缩
    var addx = (extrapoints[extraindex].x - points[i].x) * scale
    var addy = (extrapoints[extraindex].y - points[i].y) * scale
    extrapoints[extraindex].x = points[i].x + addx
    extrapoints[extraindex].y = points[i].y + addy

    var extranexti = (extraindex + 1) % (2 * len)
    extrapoints[extranexti] = {
      x: '',
      y: ''
    }
    extrapoints[extranexti].x = middles[i].x + offsetx
    extrapoints[extranexti].y = middles[i].y + offsety
    // 朝 originPoint[i]方向收缩
    addx = (extrapoints[extranexti].x - points[i].x) * scale
    addy = (extrapoints[extranexti].y - points[i].y) * scale
    extrapoints[extranexti].x = points[i].x + addx
    extrapoints[extranexti].y = points[i].y + addy
  }

  var controlPoint = []
  // 生成4控制点，产生贝塞尔曲线
  if (!isClosed) {
    for (let i = 0; i < len - 1; i++) {
      controlPoint[0] = points[i]
      const extraindex = 2 * i
      controlPoint[1] = extrapoints[extraindex + 1]
      const extranexti = (extraindex + 2) % (2 * len)
      controlPoint[2] = extrapoints[extranexti]
      const nexti = (i + 1) % len
      controlPoint[3] = points[nexti]
      let u = 1
      while (u >= 0) {
        const px = bezier3funcX(u, controlPoint)
        const py = bezier3funcY(u, controlPoint)
        // u的步长决定曲线的疏密
        u -= 0.005
        let tempP
        if (reverse) {
          tempP = [py, px]
        } else {
          tempP = [px, py]
        }
        // 存入曲线点
        res.push(tempP)
      }
    }
  } else {
    for (let i = 0; i < len; i++) {
      controlPoint[0] = points[i]
      const extraindex = 2 * i
      controlPoint[1] = extrapoints[extraindex + 1]
      const extranexti = (extraindex + 2) % (2 * len)
      controlPoint[2] = extrapoints[extranexti]
      const nexti = (i + 1) % len
      controlPoint[3] = points[nexti]
      let u = 1
      while (u >= 0) {
        const px = bezier3funcX(u, controlPoint)
        const py = bezier3funcY(u, controlPoint)
        // u的步长决定曲线的疏密
        u -= 0.005
        let tempP
        if (reverse) {
          tempP = [py, px]
        } else {
          tempP = [px, py]
        }
        // 存入曲线点
        res.push(tempP)
      }
    }
  }
  return res
}

// 三次贝塞尔曲线
function bezier3funcX (uu, controlP) {
  const part0 = controlP[0].x * uu * uu * uu
  const part1 = 3 * controlP[1].x * uu * uu * (1 - uu)
  const part2 = 3 * controlP[2].x * uu * (1 - uu) * (1 - uu)
  const part3 = controlP[3].x * (1 - uu) * (1 - uu) * (1 - uu)
  return part0 + part1 + part2 + part3
}

function bezier3funcY (uu, controlP) {
  const part0 = controlP[0].y * uu * uu * uu
  const part1 = 3 * controlP[1].y * uu * uu * (1 - uu)
  const part2 = 3 * controlP[2].y * uu * (1 - uu) * (1 - uu)
  const part3 = controlP[3].y * (1 - uu) * (1 - uu) * (1 - uu)
  return part0 + part1 + part2 + part3
}

// 设置divicon
// export function divIcon (html, classname) {
//   return L.divIcon({
//     className: classname,
//     iconAnchor: [0, 0], // [a,b]a越大越向左 b越大越向上
//     html: '<div>' + html + '</div>'
//   })
// }

// 验证是否为数字
export function isNumber (value) {
  var patrn = /^(-)?\d+(\.\d+)?$/
  if (patrn.exec(value) == null || value === '') {
    return false
  } else {
    return true
  }
}

// 用于对象排序
export function compare (key, style) {
  return function (value1, value2) {
    var val1 = value1[key]
    var val2 = value2[key]
    if (style === 0) { // 0表示从小到大排序
      return val1 - val2
    } else { // 默认从大到小排序
      return val2 - val1
    }
  }
}

// 用于判断数据是否为undefind null 999999
export function isUndefind (val) {
  if (val !== 0 && (typeof val === 'undefined' || val > 999990 || !val || val < -9999)) {
    return false
  } else {
    return true
  }
}

// 取小数位，不补0
export function getFixed (val, num) {
  if (isNumber(val)) {
    return parseFloat(val.toFixed(num || 2))
  } else {
    return val
  }
}

// 减法运算
export function floatSub (arg1, arg2) {
  var r1, r2, m, n
  try {
    r1 = arg1.toString().split('.')[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split('.')[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  // 动态控制精度长度
  n = (r1 >= r2) ? r1 : r2
  return ((arg1 * m - arg2 * m) / m).toFixed(n)
}

// 加法运算

// 判断风力等级
export function getWindLevel (speed) {
  // let speed, speedStr
  // speed = Math.sqrt(Math.pow(u, 2) + Math.pow(v, 2))
  let level
  if (speed > 0 && speed < 0.2) {
    // 0
    level = 0
  } else if (speed >= 0.2 && speed < 1.5) {
    // 1
    level = 1
  } else if (speed >= 1.5 && speed < 3.3) {
    // 2
    level = 2
  } else if (speed >= 3.3 && speed < 5.4) {
    // 3
    level = 3
  } else if (speed >= 5.4 && speed < 7.9) {
    // 4
    level = 4
  } else if (speed >= 7.9 && speed < 10.7) {
    // 5
    level = 5
  } else if (speed >= 10.7 && speed < 13.8) {
    // 6
    level = 6
  } else if (speed >= 13.8 && speed < 17.1) {
    // 7
    level = 7
  } else if (speed >= 17.1 && speed < 20.7) {
    // 8
    level = 8
  } else if (speed >= 20.7 && speed < 24.4) {
    // 9
    level = 9
  } else if (speed >= 24.4 && speed < 28.4) {
    // 10
    level = 10
  } else if (speed >= 28.4 && speed < 32.6) {
    // 11
    level = 11
  } else if (speed >= 32.6 && speed < 36.9) {
    // 12
    level = 12
  } else {
    level = 13
  }
  return level
}

// 16进制颜色转为rgb
export function colorRgb (val) {
  // 16进制颜色值的正则
  var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/
  // 把颜色值变成小写
  var color = val.toLowerCase()
  if (reg.test(color)) {
    // 如果只有三位的值，需变成六位，如：#fff => #ffffff
    if (color.length === 4) {
      var colorNew = '#'
      for (let i = 1; i < 4; i += 1) {
        colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1))
      }
      color = colorNew
    }
    // 处理六位的颜色值，转为RGB
    var colorChange = []
    for (let i = 1; i < 7; i += 2) {
      colorChange.push(parseInt('0x' + color.slice(i, i + 2)))
    }
    // return "RGB(" + colorChange.join(",") + ")";
    return colorChange
  } else {
    return color
  }
}

// 取出两个数组中不同的元素，产生一个新数组
export function getArrDifference (arr1, arr2) {
  return arr1.concat(arr2).filter(function (v, i, arr) {
    return arr.indexOf(v) === arr.lastIndexOf(v)
  })
}

// 将对象数组按某个key值分组
export function mapData (data, key) {
  var beforeData = data // 将dataArr赋值给beforeData  也可直接操作dataArr
  const tempArr = []
  const afterData = []// 新数组
  beforeData.forEach(item => {
    if (tempArr.indexOf(item[key]) === -1) {
      tempArr.push(item[key])
      afterData.push([item])
    } else {
      const index = tempArr.indexOf(item[key])
      afterData[index].push(item)
    }
  })
  return afterData
}

// 将对象数组构成的数组按某个key值分组
export function mapDataArr (data, key) {
  // var beforeData = data;      //将dataArr赋值给beforeData  也可直接操作dataArr
  // let tempArr = [];
  const nameobj = {}
  data.forEach(item => {
    item.forEach(e => {
      if (e[key] in nameobj) {
        //
      } else {
        nameobj[e[key]] = []
      }
    })
  })
  // console.log(nameobj)
  const afterData = []// 新数组
  for (let i = 0; i < data.length; i++) {
    for (const name in nameobj) {
      nameobj[name].push(data[i].find((item) => {
        return item[key] === name
      }))
    }
  }
  for (const name in nameobj) {
    afterData.push(nameobj[name])
  }
  // console.log(afterData)
  return afterData
}

// 防抖
let timer = null

export function fangdou (fun, time) {
  if (timer) {
    clearTimeout(timer)
  }
  timer = setTimeout(fun, time)
}
