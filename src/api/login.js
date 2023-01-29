import request from '@/utils/request'

//登录方法 gateway /auth 前缀
export function login(username,password){
    return request({
        url: '/auth/login',
        headers: {
          isToken: false
        },
        method: 'post',
        data: { username, password }
    })
}

//获取验证码
export function getCodeImg(){
    return request({
        url: '/code',
        headers: {
        isToken: false
        },
        method: 'get',
        timeout: 20000
    })
}
