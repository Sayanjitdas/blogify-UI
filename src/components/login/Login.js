import { useState } from 'react';
import './Login.css'

export default function Login() {

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

    const loginHandler = (e) => {
        e.preventDefault()
        setSpinner(true)
        console.log(username, password)

        if (username && password) {
            //api call hook
            setTimeout(() => {
                if (username !== 'john') {
                    setUsernameError(true)
                }
                if (password !== 'john123') {
                    setPasswordError(true)
                }
                setSpinner(false)
            }, 1000)
        }else{
            setUsernameError(true)
            setPasswordError(true)
            setSpinner(false)
        }

    }

    return (
        <div className="container-lg">
            <div className="row justify-content-center align-items-center login">
                <div className="col-12 col-md-8 col-lg-6 ">
                    <div className="card">
                        <div className="shadow-sm card-header">
                            <h1 className="fw-bold text-muted text-center">Blogify</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={loginHandler} >
                                <div className="mb-3">
                                    <label className="form-label">Email/Username</label>
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
                            <p className="text-muted my-0 d-inline">Don't have an account?</p><a className="btn btn-link mb-1" href="/">Sign up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
