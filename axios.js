import axios from "axios"

const local ='localhost'
const remote ='192.168.43.167'
const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  timeout: 10000,
});

export default instance;
