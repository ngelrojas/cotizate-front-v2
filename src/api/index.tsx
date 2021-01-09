import axios from 'axios'

// const URL_PROD = `http://9.vps.confiared.com:16610/api/v2/`
 const URL_PROD = `http://127.0.0.1:8000/api/v2/`

export default axios.create({
    baseURL: URL_PROD
})
