
// Note: api base url set in package.json proxy
const API_BASE = ''


export const info = () => apiGet("/info").then(r => r.response)


// Helpers

export function apiGet(route) {
  return fetch(`${API_BASE}${route}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then(res => res.json())
}


export function apiPost(route, body) {
  return fetch(`${API_BASE}${route}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
  .then(res => res.json())
}
