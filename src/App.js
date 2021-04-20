import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Dashboard from "./components/Dashboard/Dashboard"
import Home from "./components/Home/Home/Home"
import Login from "./components/Login/Login"
import PrivateRoute from "./components/PrivateRoute/PrivateRoute"
import LoginProvider from "./contexts/LoginContext"

const App = () => {
    return (
        <div>
            <Router>
                <LoginProvider>
                    <Switch>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route  path="/login">
                            <Login></Login>
                        </Route>
                        <PrivateRoute path="/dashboard">
                            <Dashboard />
                        </PrivateRoute>
                    </Switch>
                </LoginProvider>
            </Router>
        </div>
    )
}

export default App
