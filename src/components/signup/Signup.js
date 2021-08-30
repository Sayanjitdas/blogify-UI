import './signup.css'
import { Link,useHistory } from 'react-router-dom'
import { useState } from 'react'

export default function Signup() {

    const history = useHistory()
    const [firstname, setFirstname] = useState(null)
    const [lastname, setLastname] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [completion,setCompletion] = useState(0)  
    const [passwordError,setPasswordError] = useState(false)
    
    const inputHandler = (e,inputType) => {
        switch(inputType){
            case 'firstname':
                setFirstname(e.target.value)
            break
            case 'lastName':
                setLastname(e.target.value)
            break
            case 'email':
                setEmail(e.target.value)
            break
            case 'password':
                setPassword(e.target.value)
            break
            case 'passwordConfirm':
                setConfirmPassword(e.target.value)
            break
            default:
                console.log("invalid input case")
        }
    }

    const signupHandler = (e) => {
        e.preventDefault()
        setCompletion(20)
        if(email && password && confirmPassword){
            setCompletion(40)
            if(password === confirmPassword){
                setCompletion(60)
                //api call mimic
                setTimeout(() => {
                    console.log(firstname,lastname,email)
                    setCompletion(100)
                    history.replace('/login')
                },1000)

            }else{
                console.log("here....")
                setPasswordError(true)
                setCompletion(0)
            }
        }

    }

    return (
        <div className="container-lg">
            <div className="row justify-content-center align-items-center signup">
                <div className="col-12 col-md-6">
                    <div className="card">
                        <div className="card-header shadow-sm">
                            <h1 className="fw-bold text-muted text-center">Blogify</h1>
                        </div>
                        <div className="progress" style={{height: '2px'}}>
                            <div className="progress-bar bg-success" role="progressbar" style={{width:`${completion}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="card-body">
                            <form onSubmit={signupHandler}>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="firstName" className="form-label">First Name</label>
                                        <input 
                                            id="firstName" 
                                            type="text" 
                                            className="form-control" 
                                            onChange={(e) => inputHandler(e,'firstName')}
                                            />
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <label htmlFor="lastName" className="form-label">Last Name</label>
                                        <input 
                                            id="lastName" 
                                            type="text" 
                                            className="form-control" 
                                            onChange={(e) => inputHandler(e,'lastName')}
                                            />
                                    </div>
                                </div>
                                <div className="my-3">
                                    <label htmlFor="email" className="form-label">Email *</label>
                                    <input 
                                        id="email" 
                                        type="text" 
                                        className="form-control" 
                                        onChange={(e) => inputHandler(e,'email')}
                                        required />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="password" className="form-label">Password *</label>
                                    <input 
                                        id="password" 
                                        type="password" 
                                        className={`form-control ${passwordError ? 'border-danger border-2': null}`} 
                                        onChange={(e) => inputHandler(e,'password')}
                                        required />
                                </div>
                                <div className="my-3">
                                    <label htmlFor="confirmPassword" className="form-label">Confirm Password *</label>
                                    <input 
                                        id="confirmPassword" 
                                        type="password" 
                                        className={`form-control ${passwordError ? 'border-danger border-2': null}`} 
                                        onChange={(e) => inputHandler(e,'passwordConfirm')}
                                        required />
                                </div>
                                <div className="d-grid col-md-3 mx-auto">
                                    <button type="submit" className="btn btn-success shadow-sm">Sign Up</button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer align-items-center">
                            <p className="text-muted my-0 d-inline">Already have an account?</p><Link className="btn btn-link mb-1" to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
