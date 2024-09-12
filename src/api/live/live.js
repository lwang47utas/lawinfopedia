// 公共接口
import service from '@/libs/request'

/**
 * 获取Q&A 分类别
 * @param area
 * @param dataType
 */
export function newLive () {
  return service({
    url: '/companyWebsiteApi/live/list',
    method: 'get'
  })
}
