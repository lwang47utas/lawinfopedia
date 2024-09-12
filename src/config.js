
// // 接口请求的URL
// export const APPURL =
//     process.env.NODE_ENV === 'development' ? 'http://120.55.183.73/' : 'http://120.55.183.73/'
export const APPURL =
  process.env.NODE_ENV === 'development' ? 'http://120.55.183.73/' : 'https://api.ttsnews.com/'
// 图片转发的url
export const PNGURL = process.env.NODE_ENV === 'development' ? '/glimg' : 'http://10.85.222.17:3002/'
// 地图url
export const GEOURL = process.env.NODE_ENV === 'development' ? 'http://221.122.67.145:8323/' : 'http://10.85.222.16:8323/'
export const GEOURL2 = process.env.NODE_ENV === 'development' ? 'http://221.122.67.145:8323/' : 'http://10.85.222.16:8323/'
export const GEOURL3 = process.env.NODE_ENV === 'development' ? 'http://221.122.67.145:8889/' : 'http://10.85.222.16:8889/'
