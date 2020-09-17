import axios from 'axios'

const URL_PROD = `http://35.226.214.154:1337/api/v2/`
// const URL_PROD = `http://127.0.0.1:1337/api/v2/`

export default axios.create({
    baseURL: URL_PROD
})
