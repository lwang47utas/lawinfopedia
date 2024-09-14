// 公共接口
import service from '@/libs/request'

/**
 * 州
 */
export function getState (params) {
  return service({
    url: '/web/pet/getLawyerState',
    params,
    method: 'get'
  })
}
/**
 * 详细列表
 */
export function getIcon (params) {
  return service({
    url: '/web/pet/getIcon',
    params,
    method: 'get'
  })
}
/**
 * 区
 */
export function getArea (params) {
  return service({
    url: '/web/pet/getLawyerArea',
    params,
    method: 'get'
  })
}
/**
 * 医院州
 */
export function getHospital (params) {
  return service({
    url: '/web/hospital/getHospital',
    params,
    method: 'get'
  })
}
/**
 * 详细信息
 */
export function getHospitalInformation (params) {
  return service({
    url: '/web/hospital/getHospitalInformation',
    params,
    method: 'get'
  })
}
/**
 * 区
 */
export function getHospitalArea (params) {
  return service({
    url: '/web/hospital/getHospitalArea',
    params,
    method: 'get'
  })
}
/**
 * 详细信息
 */
export function getInformation (data) {
  const params = {
    ...data,
    language: localStorage.getItem('language') || 'es'
  }
  return service({
    url: '/web/pet/getLawyerInformation',
    params,
    method: 'get'
  })
}
