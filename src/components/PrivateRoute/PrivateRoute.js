import React, { useContext } from "react"
import { Redirect, Route } from "react-router"
import { LoginContext } from "../../contexts/LoginContext"

const PrivateRoute = ({ children, ...rest }) => {
    const { user } = useContext(LoginContext)
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute
