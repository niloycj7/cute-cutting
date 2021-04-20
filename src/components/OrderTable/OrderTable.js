import React from "react"
import Dropdown from "react-dropdown"
import "react-dropdown/style.css"

const OrderTable = ({ order }) => {
    const options = ["pending", "ongoing", "done"]
    const handleStatus = (e) => {
        const info = { email: order.email, status: e.value }
        fetch(`https://stark-waters-06893.herokuapp.com/changeStatus`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(info),
        })
            .then((res) => res.json())
            .then((data) => console.log(data))
    }
    return (
        <tr>
            <td>{order.email}</td>
            <td>{order.serviceName}</td>
            <td>{order.date}</td>
            <td>
                <Dropdown
                    options={options}
                    onChange={handleStatus}
                    value={order.status}
                />
            </td>
        </tr>
    )
}

export default OrderTable
