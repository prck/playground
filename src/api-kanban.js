import axios from 'axios'

axios.defaults.headers.common['Accepts'] = 'application/json'

const instance = axios.create({
  baseURL: "http://localhost:3000"
})

export default instance