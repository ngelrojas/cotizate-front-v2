import axios from 'axios'

const URL_PROD = `http://35.225.59.226:9000/api/v1/upload/images`
//const URL_PROD = `http://127.0.0.1:9000/api/v1/`

export default axios.create({
    baseURL: URL_PROD
})
