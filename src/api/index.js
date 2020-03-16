import { request } from '../utils/request'
const domain = 'http://xingyi.test/'
// export const domain = '/'

export const loginApi = domain + 'api/login'
export const registerApi = domain + 'api/register'

export const getCourseList = query => request(query, domain + "api/course/list")
export const getCategoryList = query => request(query, domain + "api/category/list")
export const getCourse = query => request(query, domain + "api/course/course")
export const getUserInfo = query => request(query, domain + "api/user/info")

export default {
  getCourseList,
  getCategoryList,
  getCourse,
  getUserInfo
}