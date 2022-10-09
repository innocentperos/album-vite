import axios from "axios"

const local ='http://localhost:8000'
const remote ='http://192.168.43.50:8000'

export const URI = local;

const instance = axios.create({
  baseURL: `${URI}/api/`,
  timeout: 10000,
  headers: buildHeaders()
});

function buildHeaders(){
  let headers = {}
  let authorization = localStorage.getItem("token")
  if(authorization){
    headers["Authorization"] = 'Token '+authorization
  }
  
  return headers;
}

export default instance;
