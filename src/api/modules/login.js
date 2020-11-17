
import { get } from '../index.js'

import Mock from 'mockjs'

function fetchLogin(data) {
    return get({
        url: '/login',
        data: data
    })
}

Mock.mock('/login', {
    userInfo: {
        id: 1,
        name: "小强",
    },
    status: 'success'
})


export {
    fetchLogin
}