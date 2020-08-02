import axios from 'axios';
import { API_ROUTE } from '../helper/api-routes';

const defaultHeaders = {
  Accept: 'application/json',
  'Cache-Control': 'no-cache',
  Pragma: 'no-cache'
};

Object.freeze(defaultHeaders);

const defaultOptions = {
  baseURL: API_ROUTE,
  headers: defaultHeaders
};

class HttpService {
  constructor (options) {
    if (options) {
      this.axios = axios.create(options);
      return this;
    }

    if (!HttpService.instance) {
      HttpService.instance = this;
      console.log('HttpService - init');
      this.axios = axios.create(defaultOptions);
    }

    return HttpService.instance;
  }

  request (async, method, url, params = null, data = null, successCb = null, errorCb = null, headers = null, responseType = null, paramsSerializer = null) {
    method = method.toLowerCase();
    const request = this.axios.request({
      url,
      data,
      params,
      method,
      headers,
      responseType,
      paramsSerializer
    });
    return async ? request : request.then(successCb).catch(errorCb);
  }

  get (url, params, successCb = null, errorCb = null, headers = null, paramsSerializer = null, responseType = null) {
    const async = !successCb || !errorCb;
    return this.request(async, 'get', url, params, null, successCb, errorCb, headers, responseType, paramsSerializer);
  }

  post (url, data, successCb = null, errorCb = null, headers = null, params = null, paramsSerializer = null, responseType = null) {
    const async = !successCb || !errorCb;
    return this.request(async, 'post', url, params, data, successCb, errorCb, headers, responseType, paramsSerializer);
  }

  put (url, data, successCb = null, errorCb = null, headers = null) {
    const async = !successCb || !errorCb;
    return this.request(async, 'put', url, null, data, successCb, errorCb, headers);
  }

  patch (url, data, successCb = null, errorCb = null, headers = null) {
    const async = !successCb || !errorCb;
    return this.request(async, 'patch', url, null, data, successCb, errorCb, headers);
  }

  delete (url, data = {}, successCb = null, errorCb = null) {
    const async = !successCb || !errorCb;
    return this.request(async, 'delete', url, null, data, successCb, errorCb);
  }
}

const http = new HttpService();
Object.freeze(http);

export default http;

export {
  http,
  HttpService,
  defaultHeaders
};
