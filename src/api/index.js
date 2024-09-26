// 公共接口
import service from '@/libs/request'

/**
 * 获取推荐猫狗
 */
export function random (params) {
  return service({
    url: '/web/pet/random',
    params,
    method: 'get'
  })
}
/**
 * 获取推荐文章
 */
export function articleRandom (data) {
  const params = {
    ...data,
    language: localStorage.getItem('lawLanguage') || 'en'
  }
  return service({
    url: '/web/pet/getLawyerArticle',
    params,
    method: 'get'
  })
}
/**
 * 获取事务所所需类型
 */
export function getType () {
  const params = {
    language: localStorage.getItem('lawLanguage') || 'en'
  }
  return service({
    url: '/web/pet/getLawyerType',
    params,
    method: 'get'
  })
}
/**
 * 类型筛选列表
 */
export function queryPet (data) {
  return service({
    url: '/web/pet/queryPet',
    data,
    method: 'post'
  })
}
/**
 * 获取宠物详细信息
 */
export function petDetails (params) {
  return service({
    url: '/web/pet/petDetails',
    params,
    method: 'get'
  })
}
/**
 * 获取文章类型列表
 */
export function petArticleType (params) {
  return service({
    url: '/web/pet/petArticleType',
    params,
    method: 'get'
  })
}
/**
 * 获取文章列表
 */
export function getArticle (data) {
  const params = {
    ...data,
    language: localStorage.getItem('lawLanguage') || 'en'
  }
  return service({
    url: '/web/pet/getLawyerArticle',
    params,
    method: 'get'
  })
}
/**
 * 获取文章详情
 */
export function petArticle (params) {
  return service({
    url: '/web/pet/getArticleDetails',
    params,
    method: 'get'
  })
}

/**
 * 获取事务所详情
 */
export function getLawyerInformation (data) {
  const params = {
    ...data,
    language: localStorage.getItem('lawLanguage') || 'en'
  }
  return service({
    url: '/web/pet/getLawyerInformation',
    params,
    method: 'get'
  })
}
/**
 * 搜索
 */
export function getQuery (data) {
  const params = { language: localStorage.getItem('lawLanguage') || 'en', ...data }
  return service({
    url: '/web/pet/getQuery',
    params,
    method: 'get'
  })
}
