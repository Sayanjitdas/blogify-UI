import { useState } from 'react';
import { Link,useHistory } from 'react-router-dom';
import './Login.css'
import { login } from '../../apiservices';

export default function Login() {

    const history = useHistory()
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [spinner, setSpinner] = useState(false);

    const userNameHandler = (e) => {
        setUsernameError(false)
        setUsername(e.target.value)
    }

    const passwordNameHandler = (e) => {
        setPasswordError(false)
        setPassword(e.target.value)
    }

    const loginHandler = async (e) => {
        e.preventDefault()
        setSpinner(true)
        console.log(username, password)

        if (username && password) {
            //api call hook
            let response = await login(username, password)
            if (response.error) {
                setUsernameError(true)
                setPasswordError(true)
                setSpinner(false)
            } else {
                setSpinner(false)
                console.log(response.token)
                //call to update context api service for the app
                
                history.replace('/')
            }
        } else {
            setUsernameError(true)
            setPasswordError(true)
            setSpinner(false)
        }

    }

    return (
        <div className="container-lg">

            <div className="row justify-content-center align-items-center minimum-height">
                <div className="col-12 col-md-8 col-lg-6 position-relative">
                    {
                        usernameError && passwordError &&
                        <div className="alert-position d-none d-md-block">
                            <div className="alert alert-danger d-flex align-items-center alert-position-center shadow" role="alert">
                                <div>
                                    invalid username password
                                </div>
                            </div>
                        </div>
                    }
                    <div className="card shadow-sm">
                        <div className="shadow-sm card-header">
                            <h1 className="fw-bold text-muted text-center">Blogify</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={loginHandler} >
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input
                                        type="text"
                                        className={`form-control ${usernameError ? "border-danger border-2" : null}`}
                                        id="username"
                                        onChange={userNameHandler}
                                    />
                                </div>
                                <div>
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className={`form-control ${passwordError ? "border-danger border-2" : null}`}
                                        id="password"
                                        onChange={passwordNameHandler}

                                    />
                                </div>
                                <div className="d-grid col-md-3 mx-auto mt-4">
                                    <button type="submit" className="btn btn-success shadow-sm">
                                        {spinner ?
                                            <>
                                                <span className="m-2">Loging in</span>
                                                <span className="spinner-border spinner-border-sm text-light"></span>
                                            </> : `Login`}
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer align-items-center">
                            <p className="text-muted my-0 d-inline">Don't have an account?</p><Link className="btn btn-link mb-1" to="/signup">Sign up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
