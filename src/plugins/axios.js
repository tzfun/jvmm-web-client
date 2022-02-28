import axios from "axios"
import qs from "qs"

const Axios = axios.create()

Axios.interceptors.request.use(config => {
    if (config.data instanceof FormData) {
        return config
    } else {
        config.data = qs.stringify(config.data)
        return config
    }
})

Axios.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject(error)
})

export default Axios