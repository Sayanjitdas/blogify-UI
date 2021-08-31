import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom"

export default function Navbar() {

    const location = useLocation()

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
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Features</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Pricing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
                                </li>
                            </ul>
                        </div>
                    </>
                : null}
            </div>
        </nav>
    )
}
