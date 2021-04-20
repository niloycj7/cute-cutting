import { css } from "@emotion/core"
import firebase from "firebase"
import React, { createContext, useEffect, useState } from "react"
import ClipLoader from "react-spinners/ClipLoader"
import { auth } from "../firebaseSettings/firebase.config"

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`
export const LoginContext = createContext()
const LoginProvider = (props) => {
    let [color, setColor] = useState("#ffffff")
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const saveLoginSession = auth.onAuthStateChanged((user) => {
            setUser(user)
            setLoading(false)
        })
        return saveLoginSession
    }, [])
    const signUpWithGoogle = () => {
        const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
        return auth.signInWithPopup(googleAuthProvider)
    }
    const logout = () => {
        return auth.signOut()
    }
    const value = { user: user, signUpWithGoogle, logout }
    return (
        <>
            {loading ? (
                <div
                    style={{ height: "100vh" }}
                    className="d-flex justify-content-center align-items-center"
                >
                    <ClipLoader
                        color={color}
                        loading={loading}
                        css={override}
                        size={50}
                    />
                </div>
            ) : (
                <LoginContext.Provider value={value}>
                    {loading === false && props.children}
                </LoginContext.Provider>
            )}
        </>
    )
}

export default LoginProvider
