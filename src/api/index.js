import axios from 'axios'



function get({
    url,
    data
} = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, {
            params: data
        }).then(res => {
            resolve(res)
        }).catch(error => {
            reject(error)
        })
    })
}

export {
    get
}