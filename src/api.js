// Note: api base url set in package.json proxy
const API_BASE = '';

export const info = () => apiGet('/info').then((r) => r.response);
export const datasets = () => apiGet('/datasets').then((r) => r.response);
export const filteringTerms = () =>
  apiGet('/filtering_terms').then((r) => r.filteringTerms);
export const variants = (body) =>
  apiPost('/g_variants', body).then((r) => r.response);
export const biosamples = (body) =>
  apiPost('/biosamples', body).then((r) => r.response);
export const individuals = (body) =>
  apiPost('/individuals', body).then((r) => r.response);
export const cohorts = () => apiPost('/cohorts', {}).then((r) => r.response);

// ** note **: /g_variants/{id}/individuals and /g_variants/{id}/biosamples incorrectly swapped in api

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
