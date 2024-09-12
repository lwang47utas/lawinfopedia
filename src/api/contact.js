// 公共接口
import service from '@/libs/request'

/**
 * 获取最新时间
 * @param area
 * @param dataType
 */
export function contactUser (data) {
  return service({
    url: '/companyWebsiteApi/user/save',
    data,
    method: 'post'
  })
}
