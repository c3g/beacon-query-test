
// note: api base url set in package.json proxy

// start with separate GET and POST calls with minimal error handling, 
// I can make it pretty later

const apiGet = async (route) => {
    return (fetch(`${route}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
      .then((res) => res.json())
      .then((json) => {  
        console.log({ apiGetResults: json });
        return json;
      })
      .catch((err) => console.log(err)))
}


 const apiPost = async (route, body) => {
    return (fetch(`${route}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then((res) => res.json())
      .then((json) => {  
        console.log({ apiPostResults: json });
        return json;
      })
      .catch((err) => console.log(err)))
}


module.exports = { apiGet, apiPost }