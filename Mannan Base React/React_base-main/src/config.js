//temporary base url
//export const BASE_URL = `https://hagl-dev.bitcotapps.com`;
export const BASE_URL = () => {
  let url;
  if (process.env.REACT_APP_ENV === 'development') {
    url = `https://jsonplaceholder.typicode.com`
  }
  if (process.env.REACT_APP_ENV === 'staging') {
    url = `https://jsonplaceholder.typicode.com`
  }
  if (process.env.REACT_APP_ENV === 'production') {
    url = `https://jsonplaceholder.typicode.com`
  }
  return url;
};
export const API_SUB = "/api";
export const API_VIRSION = "/v1";