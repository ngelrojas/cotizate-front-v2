import axios from 'axios'

const URL_PROD = `http://165.227.203.226:9001/api/v1/`
// const URL_PROD = `http://localhost:8081/api/v1/`

export default axios.create({
    baseURL: URL_PROD
})