// import { appRegistry } from './../../shared/registry/'

// // check at the fetch level if the request succeeded
// const fetchHandler = res => {
//   if (res.ok) {
//     return res.json()
//   }
//   throw Error(res)
// }

// // check at our app level (middleware returns a truthy success property)
// const checkSuccess = res => {
//   if (res.status === 'success') {
//     return res
//   }
// }

// const fetchErrorHandler = res => {
//   const history = appRegistry.getObject('history')
//   if (res.status === 401) {
//     history.push('/unauthorized')
//   }
//   return Promise.reject(res)
// }

// const getToken = () => window.localStorage.getItem('token')
// const createHeaders = (url, isMultipart = false) => {
//   const headers = new Headers()
//   const token = getToken()
//   if (token) {
//     headers.set('Authorization', `Bearer ${token}`)
//   }
//   headers.set('Pragma', 'no-cache')
//   headers.set('Cache-Control', 'no-cache')
//   headers.set('Accept', 'application/json')
//   if (isMultipart) {
//     // headers.set('Content-Type', 'multipart/form-data'); set automatically
//   } else {
//     headers.set('Content-Type', 'application/json')
//   }
//   return new Headers(headers) // Object.assign({}, this.defaultHeaders, headers);
// }

// class Http {
//   constructor(baseUrl) {
//     this.defaultOptions = {
//       headers: null,
//       mode: 'cors',
//       cache: 'default',
//     }
//     this.baseUrl = baseUrl || ''
//   }

//   createOptions(url, options, isMultipart) {
//     const headers = createHeaders(url, isMultipart)
//     const mergedOptions = Object.assign({}, this.defaultOptions, options)
//     mergedOptions.headers = headers
//     return mergedOptions
//   }

//   get(url, queryParams, options = {}) {
//     const esc = encodeURIComponent
//     let qs
//     let newUrl
//     if (queryParams) {
//       qs = Object.keys(queryParams)
//         .map(k => `${esc(k)}=${esc(queryParams[k])}`)
//         .join('&')
//       newUrl = `${this.baseUrl}${url}?${qs}`
//     } else {
//       newUrl = `${this.baseUrl}${url}`
//     }
//     const getOptions = { method: 'GET' }
//     options = Object.assign({}, options, getOptions)
//     const optionsWithHeaders = this.createOptions(url, options)
//     return fetch(newUrl, optionsWithHeaders)
//       .then(fetchHandler)
//       .then(checkSuccess)
//       .catch(e => fetchErrorHandler(e))
//   }

//   post(url, body, options = {}) {
//     const postOptions = { method: 'POST', body: JSON.stringify(body) }
//     options = Object.assign({}, options, postOptions)
//     const optionsWithHeaders = this.createOptions(url, options)
//     console.log('from post', `${this.baseUrl}${url}`, optionsWithHeaders);
//     return fetch(`${this.baseUrl}${url}`, optionsWithHeaders)
//       .then(fetchHandler)
//       .then(checkSuccess)
//       .catch(e => fetchErrorHandler(e))
//   }

//   put(url, body, options = {}) {
//     const putOptions = { method: 'PUT', body: JSON.stringify(body) }
//     options = Object.assign({}, options, putOptions)
//     const optionsWithHeaders = this.createOptions(url, options)
//     return fetch(`${this.baseUrl}${url}`, optionsWithHeaders)
//       .then(fetchHandler)
//       .then(checkSuccess)
//       .catch(e => fetchErrorHandler(e))
//   }

//   del(url, options = {}) {
//     const deleteOptions = { method: 'DELETE' }
//     options = Object.assign({}, options, deleteOptions)
//     const optionsWithHeaders = this.createOptions(url, options)
//     return fetch(`${this.baseUrl}${url}`, optionsWithHeaders)
//       .then(fetchHandler)
//       .then(checkSuccess)
//       .catch(e => fetchErrorHandler(e))
//   }

//   handleMultipart(url, obj, file, method, options = {}) {
//     const formData = new FormData()
//     if (obj) Object.keys(obj).forEach(key => formData.append(key, obj[key]))
//     formData.append('file', file)
//     const postOptions = { method, body: formData }
//     options = Object.assign({}, options, postOptions)
//     const optionsWithHeaders = this.createOptions(url, options, true)
//     return fetch(`${this.baseUrl}${url}`, optionsWithHeaders)
//       .then(fetchHandler)
//       .then(checkSuccess)
//       .catch(e => fetchErrorHandler(e))
//   }
// }

// export default Http

import { appRegistry } from './../../shared/registry/';

// check at the fetch level if the request succeeded
const fetchHandler = (res) => {
  console.log('from fetchandkler', res);
  if (res.ok) {
    return res.json();
  }
  throw Error(res)
};

// check at our app level (middleware returns a truthy success property)
const checkSuccess = (res) => {
  if (res.success) {
    return res;
  }
};

const fetchErrorHandler = (res) => {
  console.log('from fetchErrohandkler', res);
  /*const history = appRegistry.getObject('history');
  if (res.status === 401) {
    history.push('/unauthorized');
  }*/
  return Promise.reject(res);
};

const getToken = () => window.localStorage.getItem('token');
const createHeaders = (url, isMultipart = false) => {
  const headers = new Headers();
  headers.set('Accept', 'application/json');
  if (isMultipart) {
    // headers.set('Content-Type', 'multipart/form-data'); set automatically
  } else {
    headers.set('Content-Type', 'application/json');
  }
  return new Headers(headers); // Object.assign({}, this.defaultHeaders, headers);
};

class Http {
  constructor(baseUrl) {
    this.defaultOptions = {
      headers: null,
      mode: 'cors',
      cache: 'default',
    };
    this.baseUrl = baseUrl || '';
  }

  createOptions(url, options, isMultipart) {
    const headers = createHeaders(url, isMultipart);
    const mergedOptions = Object.assign({}, this.defaultOptions, options);
    mergedOptions.headers = headers;
    return mergedOptions;
  }

  get(url, queryParams, options = {}) {
    const esc = encodeURIComponent;
    let qs;
    let newUrl;
    if (queryParams) {
      qs = Object.keys(queryParams).map(k => `${esc(k)}=${esc(queryParams[k])}`).join('&');
      newUrl = `${this.baseUrl}${url}?${qs}`;
    } else {
      newUrl = `${this.baseUrl}${url}`;
    }
    const getOptions = { method: 'GET' };
    options = Object.assign({}, options, getOptions);

    const optionsWithHeaders = this.createOptions(url, options);
    console.log('from get',newUrl, optionsWithHeaders);
    return fetch(newUrl, optionsWithHeaders)
      .then(fetchHandler)
      .then(checkSuccess)
      .catch(e => fetchErrorHandler(e));
  }

  post(url, body, options = {}) {
    const postOptions = { method: 'POST', body: JSON.stringify(body) };
    options = Object.assign({}, options, postOptions);
    const optionsWithHeaders = this.createOptions(url, options);
    console.log('from post', `${this.baseUrl}${url}`, optionsWithHeaders);
    return fetch(`${this.baseUrl}${url}`, optionsWithHeaders)
      .then(fetchHandler)
      .then(checkSuccess)
      .catch(e => fetchErrorHandler(e));
  }

  put(url, body, options = {}) {
    const putOptions = { method: 'PUT', body: JSON.stringify(body) };
    options = Object.assign({}, options, putOptions);
    const optionsWithHeaders = this.createOptions(url, options);
    return fetch(`${this.baseUrl}${url}`, optionsWithHeaders)
      .then(fetchHandler)
      .then(checkSuccess)
      .catch(e => fetchErrorHandler(e));
  }

  del(url, options = {}) {
    const deleteOptions = { method: 'DELETE' };
    options = Object.assign({}, options, deleteOptions);
    const optionsWithHeaders = this.createOptions(url, options);
    return fetch(`${this.baseUrl}${url}`, optionsWithHeaders)
      .then(fetchHandler)
      .then(checkSuccess)
      .catch(e => fetchErrorHandler(e));
  }

  handleMultipart(url, file, method, options = {}) {
    const formData = new FormData();
    formData.append('UploadedImage', file);
    const postOptions = { method, body: formData };
    options = Object.assign({}, options, postOptions);
    const optionsWithHeaders = this.createOptions(url, options, true);
    return fetch(`${this.baseUrl}${url}`, optionsWithHeaders)
      .then(fetchHandler)
      .then(checkSuccess)
      .catch(e => fetchErrorHandler(e));
  }

}

export default Http;

