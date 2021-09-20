import { useLocation,useHistory } from "react-router-dom"
import { Link,NavLink } from "react-router-dom"
import { useContext, useEffect,useState } from 'react';
import { GlobalContext } from '../context/context';
import { RemoveUserAuthData } from "../context/localstorage";

export default function Navbar() {

    const location = useLocation()
    const history = useHistory()

    const globalData = useContext(GlobalContext)
    const [isAuthenticated,setAuthenticated]= useState(globalData.auth.authenticated)
    
    useEffect(() => {
        setAuthenticated(globalData.auth.authenticated)
    },[globalData.auth.authenticated,])

    const logoutHandler = () => {
        RemoveUserAuthData()
        globalData.token.setToken(null)
        globalData.userData.setUser(null)
        globalData.auth.setAuthenticated(false)
        history.replace('/')
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-success fixed-top shadow-sm">
            <div className="container-fluid">
                <Link className="navbar-brand mb-0 h1" to="/">Blogify</Link>
                {
                    location.pathname !== "/signup" && location.pathname !== "/login" ?
                    <>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav text-sm-center">
                                {isAuthenticated ? 
                                <li className="nav-item">
                                    <span className="nav-link text-white fw-light fst-italic disabled" aria-current="page">{globalData.userData.user}</span>
                                </li>
                                :
                                null
                                }
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" exact to="/" activeClassName="active">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/create-post" activeClassName="active">Create Post</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/profile" activeClassName="active">Profile</NavLink>
                                </li>
                                <li className="nav-item">
                                    {isAuthenticated ?
                                         <button className="btn btn-sm btn-warning nav-link mx-md-2" onClick={logoutHandler}><span className="text-muted">Logout</span></button>
                                         :
                                         <Link className="btn btn-sm btn-warning nav-link mx-md-2" to="/login"><span className="text-muted">Login</span></Link>
                                    }                    
                                </li>
                            </ul>
                        </div>
                    </>
                : null}
            </div>
        </nav>
    )
}
