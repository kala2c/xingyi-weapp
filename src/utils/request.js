import { getToken } from './token'

export const request = async function(query, url, method) {
  let token = getToken()
  let response
  query = query || {}
  await uni.request({
    url,
    method,
    header: {'Authorization': 'bearer '+token},
    data: query.data || {}
  }).then(res => {
    response = res[1]
  }).catch(res => {
    console.log(res)
  })
  return response
}


export default {}