const fetch = require('isomorphic-fetch')
const url = process.env.REACT_APP_API
const toJSON = res => res.json()

module.exports = function () {
  const get = (model, id) => fetch(`${url}/${model}/${id}`).then(toJSON)
  const list = model => fetch(`${url}/${model}`).then(toJSON)
  const put = (model, id, doc) => fetch(`${url}/${model}/${id}`,{
    method: 'put',
    body: JSON.stringify(doc),
    headers: {
      'content-type': 'application/json'
    }
  })
  return {
    get,
    list,
    put
  }
}
