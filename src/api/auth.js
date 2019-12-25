import request from './request';
export function login({username,password}){
    return request.post('/api/auth/signIn',{
        username,password
    }).then(res=> res.data)
    .then (data => {
        localStorage.setItem('auths',data.token)
    });
}