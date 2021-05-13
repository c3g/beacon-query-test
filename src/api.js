// Note: api base url set in package.json proxy
const API_BASE = '';

export const info = () => apiGet('/info').then((r) => r.response);
export const variants = (body) =>
  apiPost('/g_variants', body).then((r) => r.response);
export const biosamples = (body) =>
  apiPost('/biosamples', body).then((r) => r.response);
export const individuals = (body) =>
  apiPost('/individuals', body).then((r) => r.response);

// ** note **: two endpoints appear to be incorrectly swapped in the api:
// /g_variants/{id}/individuals should return all individuals with the particular variant given by the id
// this doesn't work, though... instead it returns all *biosamples* with this variant
// similarly /g_variants/{id}/biosamples returns, instead of biosamples, a set of *individuals*
// so for now we'll swap the routes back here so at least the rest of our code reads correctly

export const individualsByVariantId = (id, body) =>
  apiPost(`/g_variants/${id}/biosamples`, body).then((r) => r.response);
export const biosamplesByVariantId = (id, body) =>
  apiPost(`/g_variants/${id}/individuals`, body).then((r) => r.response);

// Helpers

export function apiGet(route) {
  return fetch(`${API_BASE}${route}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json());
}

export function apiPost(route, body) {
  return fetch(`${API_BASE}${route}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then((res) => res.json());
}
