export function getWindDirect(angles) {
  // let angle, angles, direct
  // angle = Math.atan2(u, v)
  // angles = 180 + (angle * 180) / Math.PI
  let direct
  // if (angles < 0) {
  //   angles = angles + 360
  // }
  if (angles > 11.25 && angles <= 33.75) {
    direct = '北东北风'
  } else if (angles > 33.75 && angles <= 56.25) {
    direct = '东北风'
  } else if (angles > 56.25 && angles <= 78.75) {
    direct = '东东北风'
  } else if (angles > 78.75 && angles <= 101.25) {
    direct = '东风'
  } else if (angles > 101.25 && angles <= 123.75) {
    direct = '东东南风'
  } else if (angles > 123.75 && angles <= 146.25) {
    direct = '东南风'
  } else if (angles > 146.25 && angles <= 168.75) {
    direct = '南东南风'
  } else if (angles > 168.75 && angles <= 191.25) {
    direct = '南风'
  } else if (angles > 191.25 && angles <= 213.75) {
    direct = '南西南风'
  } else if (angles > 213.75 && angles <= 236.25) {
    direct = '西南风'
  } else if (angles > 236.25 && angles <= 258.75) {
    direct = '西西南风'
  } else if (angles > 258.75 && angles <= 281.25) {
    direct = '西风'
  } else if (angles > 281.25 && angles <= 303.75) {
    direct = '西西北风'
  } else if (angles > 303.75 && angles <= 326.25) {
    direct = '西北风'
  } else if (angles > 326.25 && angles <= 348.75) {
    direct = '北西北风'
  } else {
    direct = '北风'
  }
  return direct
}

export function getWindLevel(speed) {
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

export function getAqiLevel(val) {
  let str
  if (val > 0 && val <= 50) {
    str = '优'
  } else if (val > 50 && val <= 100) {
    str = '良'
  } else if (val > 100 && val <= 150) {
    str = '轻微污染'
  } else if (val > 150 && val <= 200) {
    str = '轻度污染'
  } else if (val > 200 && val <= 300) {
    str = '中度污染'
  } else if (val > 300) {
    str = '重度污染'
  }
  return str
}

export function getWeatherDis(val) {
  let wea
  if (val == 0 || val == 1) {
    wea = "晴天"
  } else if (val == 2) {
    wea = "多云"
  } else if (val == 3) {
    wea = "阴天"
  } else if (val == 4 || val == 5 || val == 10 || val == 28) {
    wea = '雾霾'
  } else if (val > 40 && val < 49) {
    wea = "雾霾"
  } else if (val > 6 && val < 9) {
    wea = '沙尘'
  } else if (val > 30 && val < 35) {
    wea = '沙尘'
  } else if (val == 13 || val == 29) {
    wea = '雷暴'
  } else if (val > 91 && val < 99) {
    wea = '雷暴'
  } else if (val >= 89 && val <= 90) {
    wea = '冰雹'
  } else if (val >= 20 && val <= 24) {
    wea = '小雨'
  } else if (val >= 50 && val <= 59) {
    wea = '小雨'
  } else if (val >= 60 && val <= 61) {
    wea = '小雨'
  } else if (val == 66) {
    wea = '小雨'
  } else if (val >= 62 && val <= 63) {
    wea = '中雨'
  } else if (val == 67) {
    wea = '中雨'
  } else if (val >= 64 && val <= 65) {
    wea = '大雨'
  } else if (val >= 68 && val <= 69) {
    wea = '雨夹雪'
  } else if (val >= 76 && val <= 79) {
    wea = '雨夹雪'
  } else if (val == 84) {
    wea = '雨夹雪'
  } else if (val >= 70 && val <= 71) {
    wea = '小雪'
  } else if (val >= 72 && val <= 73) {
    wea = '中雪'
  } else if (val >= 74 && val <= 75) {
    wea = '大雪'
  } else if (val == 25) {
    wea = '阵雨'
  } else if (val >= 80 && val <= 83) {
    wea = '阵雨'
  } else if (val == 26 || val == 38 || val == 39) {
    wea = '阵雪'
  }
  return wea
}