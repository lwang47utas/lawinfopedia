// 公共接口
import service from '@/libs/request'

/**
 * 获取最新时间
 * @param area
 * @param dataType
 */
export function newslist () {
  return service({
    url: '/companyWebsiteApi/news/list',
    method: 'get'
  })
}

/**
 * 获取所有新闻
 * @param area
 * @param dataType
 */
export function newsList () {
  return service({
    url: '/companyWebsiteApi/news/homePage',
    method: 'get'
  })
}
/**
 * 获取新闻详情
 * @param area
 * @param dataType
 */
export function newsMessage (params) {
  return service({
    url: '/companyWebsiteApi/news/newDetailed',
    method: 'get',
    params
  })
}
