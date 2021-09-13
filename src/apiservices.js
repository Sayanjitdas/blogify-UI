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
            console.log(response)
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