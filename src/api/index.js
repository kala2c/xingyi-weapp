import { request } from '../utils/request'
const domain = 'http://xingyi.test/'
// const domain = '/'


export const getCourseList = query => request(query, domain + "api/course/list")
export const getCategoryList = query => request(query, domain + "api/category/list")
export const getCourse = query => request(query, domain + "api/course/course")

export default {
  getCourseList,
  getCategoryList,
  getCourse
}