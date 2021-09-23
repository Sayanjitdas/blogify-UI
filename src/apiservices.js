
export const login = async (username,password) => {
    try{
        let response = await fetch('http://localhost:8000/accounts/login/',{
            method:"POST",
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username,password})
        })

        if(response.status === 200){
            response = await response.json()
            return response;
        }
        return {
            "error": "invalid username password"
        }
        
    }
    catch(err){
        console.log(err)
        return {
            "error":err
        }
    }
}

export const signup = async (data) => {
    try{
        let response = await fetch('http://localhost:8000/accounts/signup/',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
        if(response.status===201){
            response = await response.json()
            return response
        }else{
            return {
                "error":"unable to create user"
            }
        }
    }catch(err){
        console.log(err)
        return {
            "error": err
        }
    }
}

export const articleList = async () => {
    try{
        let response = await fetch('http://localhost:8000/api/v1/',{
            method: 'GET',
            headers: {
                'Content-Type':'application/json'
            }
        })
        if(response.status===200){
            response = await response.json()
            return response
        }else{
            return {
                "error":"unable to fetch articles"
            }
        }
    }catch(err){
        console.log(err)
        return {
            "error":err
        }
    }

} 


export const createArticle = async (token,data) => {
    try{
        let response = await fetch('http://localhost:8000/api/v1/create-post/',{
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Token ${token}`

            },
            body:JSON.stringify(data)
        })
        if(response.status===201){
            response = await response.json()
            return response
        }else{
            return {
                "error":"unable to create article"
            }
        }
    }catch(err){
        console.log(err)
        return {
            "error":err
        }
    }

} 

export const articleDetails = async (slug,token) => {
    try{
        let response = await fetch(`http://localhost:8000/api/v1/${slug}/`,{
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'Authorization': `Token ${token}`
            }
        })
        if(response.status===200){
            response = await response.json()
            return response
        }else{
            return {
                "error":"unable to fetch articles"
            }
        }
    }catch(err){
        console.log(err)
        return {
            "error":err
        }
    }
}

export const userDetails = async (token) => {
    try{
        let response = await fetch(`http://localhost:8000/accounts/obtain-user-details/`,{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Token ${token}`
            }
        })
        if(response.status===200){
            response = await response.json()
            return response
        }else{
            return {
                "error":"unable to fetch articles"
            }
        }
    }catch(err){
        console.log(err)
        return {
            "error":err
        }
    }
}

export const updateUserDetails = async (token,form) => {
    try{
        let response = await fetch(`http://localhost:8000/accounts/obtain-user-details/`,{
            method: 'PUT',
            headers: {
                'Authorization': `Token ${token}`
            },
            body: form
        })
        if(response.status===201){
            response = await response.json()
            return response
        }else{
            return {
                "error":"unable to fetch articles"
            }
        }
    }catch(err){
        console.log(err)
        return {
            "error":err
        }
    }
}