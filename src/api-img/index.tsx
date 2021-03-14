import axios from 'axios'

//const URL_PROD = `http://8.vps.confiared.com:16593`
// const URL_PROD = `http://localhost:16593/`
const URL_PROD = `http://9.vps.confiared.com:16610`
    
export default axios.create({
    baseURL: URL_PROD
})
