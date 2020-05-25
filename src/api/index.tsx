import axios from 'axios'

const URL_PROD = `http://35.232.22.228:1337/api/v2/`

export default axios.create({
    baseURL: URL_PROD
})
