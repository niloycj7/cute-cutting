import React, { useContext } from "react"
import { useHistory, useLocation } from "react-router"
import { LoginContext } from "../../contexts/LoginContext"
import google from "../../images/google.svg"

const Login = () => {
    const { signUpWithGoogle } = useContext(LoginContext)
    const history = useHistory()
    const location = useLocation()
    let { from } = location.state || { from: { pathname: "/" } }
    const handleSignIn = async () => {
        try {
            await signUpWithGoogle()
            history.replace(from)
        } catch {
            alert("Failed To Login!")
        }
    }
    return (
        <div>
            <div
                className="w-100 text-center d-flex flex-column justify-content-center align-items-center"
                style={{ height: "90vh" }}
            >
                <h2 className="text-center fw-bolder mb-5">
                    Please Login To Continue!
                </h2>
                <img
                    onClick={handleSignIn}
                    style={{
                        height: "100px",
                        width: "100px",
                    }}
                    src={google}
                    alt=""
                />
            </div>
        </div>
    )
}

export default Login
