import React, { useEffect, useState } from "react"
import { Table } from "react-bootstrap"
import OrderTable from "../OrderTable/OrderTable"
const OrderList = ({orders}) => {
    
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Email</th>
                    <th>Service Name</th>
                    <th>Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    orders.map(order => <OrderTable order={order} />)
                }
            </tbody>
        </Table>
    )
}

export default OrderList
