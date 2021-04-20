import React, { useEffect, useState } from "react"
import { Route, Switch } from "react-router"
import { LoginContext } from "../../contexts/LoginContext"
import AddReview from "../AddReview/AddReview"
import AddService from "../AddService/AddService"
import DashNav from "../DashNav/DashNav"
import MakeAdmin from "../MakeAdmin/MakeAdmin"
import ManageService from "../ManageService/ManageService"
import OrderList from "../OrderList/OrderList"

const Dashboard = () => {
    const { user } = React.useContext(LoginContext)
    const [userInfo, setUserInfo] = useState(null)
    useEffect(() => {
        fetch(
            `https://stark-waters-06893.herokuapp.com/addUser/?email=${
                user.email
            }&admin=${false}`
        )
            .then((res) => res.json())
            .then((data) => setUserInfo(data))
    }, [user])
    const [orders, setOrders] = useState([])
    useEffect(() => {
        fetch("https://stark-waters-06893.herokuapp.com/orders")
            .then((res) => res.json())
            .then((data) => setOrders(data))
    }, [])
    return (
        <>
            <DashNav userInfo={userInfo}></DashNav>
            <Switch>
                <Route exact path="/dashboard">
                    <OrderList orders={orders}></OrderList>
                </Route>
                <Route path="/dashboard/addReview">
                    <AddReview />
                </Route>
                <Route path="/dashboard/addService">
                    <AddService></AddService>
                </Route>
                <Route path="/dashboard/makeAdmin">
                    <MakeAdmin setUserInfo={setUserInfo}></MakeAdmin>
                </Route>
                <Route path="/dashboard/manageService">
                    <ManageService></ManageService>
                </Route>
            </Switch>
        </>
    )
}

export default Dashboard
