import request from '@/utils/request'

//登录方法
export function login(username,password){
    return request({
        url: '/login',
        headers: {
          isToken: false
        },
        method: 'post',
        data: { username, password }
    })
}
