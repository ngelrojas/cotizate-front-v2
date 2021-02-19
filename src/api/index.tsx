import axios from 'axios'

const URL_PROD = `http://165.227.203.226:1337/api/v2/`
//const URL_PROD = `http://127.0.0.1:8000/api/v2/`


export default axios.create({
    baseURL: URL_PROD
})
