
const {
  PUBLIC_API_URL,
  PUBLIC_PROJECT_TOKEN
} = import.meta.env

const DEFAULT_PARAMS = {
  project_token: PUBLIC_PROJECT_TOKEN
}

function transformObjectToParams (params) {
  const urlParams = new URLSearchParams({})

  return objectToParams(urlParams, params)
}

function objectToParams (URLParams, objectParams) {
  const entries = Object.entries(objectParams)

  entries.forEach(([key, value]) => {
    if (value) {
      if (Array.isArray(value)) {
        value.forEach(item => {
          URLParams.append(`${key}[]`, item)
        })
      } else {
        URLParams.set(key, value)
      }
    } else {
      URLParams.delete(key)
    }
  })

  return URLParams
}

export default async function makeAPIRequest (url, params = {}) {
  const paramsString = '?' + transformObjectToParams({ 
    ...params,
    ...DEFAULT_PARAMS
  })

  const urlRequest = PUBLIC_API_URL + url + paramsString
  const response = await fetch(urlRequest).then(response  => response.json())
  console.log(urlRequest)

  return response
} 
