import axios from 'axios'
import config from './config'
import {isNull, omitBy} from 'lodash'

const http = async (method, service, endpoint, options) => {
  const {url, key} = config[service]
  const params = options && options.params ? options.params : {}

  return await axios[method](
    `${url}${endpoint}`,
    {
      params: omitBy({
        key,
        ...params
      }, isNull),
      ...options
    }
  )
}

export default {
  get: http.bind(this, 'get'),
  post: http.bind(this, 'post'),
  put: http.bind(this, 'put'),
  delete: http.bind(this, 'delete'),
}