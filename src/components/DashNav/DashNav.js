import {
    faBorderAll,
    faClipboardList,
    faHome,
    faPlusCircle,
    faUserPlus,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { LoginContext } from "../../contexts/LoginContext"

const DashNav = ({ userInfo }) => {
    const { user, logout } = useContext(LoginContext)
    return (
        <nav className="navbar navbar-expand-lg bg-primary fw-bolder text-uppercase navbar-light">
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
                            <Link className="nav-link ms-5" to="/">
                                <FontAwesomeIcon icon={faHome} /> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/dashboard"
                                className="nav-link ms-5 active"
                                aria-current="page"
                            >
                                <FontAwesomeIcon icon={faClipboardList} /> Order
                                List
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link ms-5"
                                to="/dashboard/addReview"
                            >
                                <FontAwesomeIcon icon={faUserPlus} /> Add Review
                            </Link>
                        </li>
                        {userInfo?.role === "admin" && (
                            <>
                                {" "}
                                <li className="nav-item">
                                    <Link
                                        className="nav-link ms-5"
                                        to="/dashboard/addService"
                                    >
                                        <FontAwesomeIcon icon={faPlusCircle} />{" "}
                                        Add Service
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link ms-5"
                                        to="/dashboard/makeAdmin"
                                    >
                                        <FontAwesomeIcon icon={faUserPlus} />{" "}
                                        Make Admin
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link ms-5"
                                        to="/dashboard/manageService"
                                    >
                                        <FontAwesomeIcon icon={faBorderAll} />{" "}
                                        Manage Service
                                    </Link>
                                </li>
                            </>
                        )}
                        {user ? (
                            <li className="nav-item">
                                <Link
                                    className="nav-link ms-5"
                                    to="/"
                                    onClick={logout}
                                >
                                    Log Out
                                </Link>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link
                                    className="nav-link ms-5 text-white"
                                    to="/login"
                                >
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default DashNav
