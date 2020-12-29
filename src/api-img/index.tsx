import axios from 'axios'

// const URL_PROD = `http://8.vps.confiared.com:16593`
const URL_PROD = `http://127.0.0.1:8000`

export default axios.create({
    baseURL: URL_PROD
})
