import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { LoginContext } from "../../../contexts/LoginContext"

const Navbar = () => {
    const { user, logout } = useContext(LoginContext)
    return (
        <nav className="navbar navbar-expand-lg navbar-light pt-4">
            <div className="container-fluid">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link
                                className="nav-btn ms-5 active text-white"
                                aria-current="page"
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-btn ms-5 text-white" href="#work">
                                Work
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-btn ms-5 text-white"
                                to="/dashboard"
                            >
                                Dashboard
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a
                                className="nav-btn ms-5 text-white"
                                href="#reviews"
                            >
                                Reviews
                            </a>
                        </li>
                        {user ? (
                            <li className="nav-item">
                                <Link
                                    className="nav-btn ms-5 text-white"
                                    to="/"
                                    onClick={logout}
                                >
                                    Log Out
                                </Link>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link
                                    className="nav-btn ms-5 text-white"
                                    to="/login"
                                >
                                    Sign In
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
