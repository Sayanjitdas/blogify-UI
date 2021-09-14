export const StoreUserAuthData = (token,username) => {
    if(localStorage.getItem('token')){
        localStorage.removeItem('token')
        localStorage.removeItem('username')
    }
    localStorage.setItem('token',token)
    localStorage.setItem('username',username)
}

export const GetUserAuthData = () => {
    if(localStorage.getItem('token')){
        return [localStorage.getItem('token'),localStorage.getItem('username')]
    }else{
        return [null,null]
    }
}

export const RemoveUserAuthData = () => {
    if(localStorage.getItem('token')){
        localStorage.removeItem('token')
        localStorage.removeItem('username')
    }
}