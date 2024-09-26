
// 公共接口
import service from '@/libs/request'

/**
 * 获取案件和地区类型
 */
export function getLawyerArticleType (params) {
  return service({
    url: '/web/articleJson/getAllLawyerArticleType',
    params,
    method: 'get'
  })
}
/**
 * 获取案件或地区类型列表
 */
export function getLegalIssuesAndStates (params) {
  return service({
    url: '/web/articleJson/getLegalIssuesAndStates',
    params,
    method: 'get'
  })
}
/**
 * 根据法律查所有地区，根据地区查所有法律
 */
export function getLawyerState (params) {
  return service({
    url: '/web/articleJson/getLawyerState',
    params,
    method: 'get'
  })
}
/**
 * 根据法律查所有地区，根据地区查所有法律
 */
export function getIdPetArticle (params) {
  return service({
    url: '/web/articleJson/getIdPetArticle',
    params,
    method: 'get'
  })
}
/**
 * 最近问答5篇
 */
export function getLawyerRecommend (params) {
  return service({
    url: '/web/articleJson/getLawyerRecommend',
    params,
    method: 'get'
  })
}
/**
 * 最近回答的和常见问题
 */
export function getRC () {
  return service({
    url: '/web/articleJson/getRC',
    method: 'get'
  })
}
