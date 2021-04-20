import React, { useEffect, useState } from "react"
import ServiceDetail from "../Home/ServiceDetail/ServiceDetail"

const ManageService = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://stark-waters-06893.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setServices(data))
    }, [services])
    return (
        <section id="work" className="services-container mt-5">
            <div className="text-center">
                <h2 style={{ color: "green" }}>Services You want to delete</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {services.map((service) => (
                        <ServiceDetail
                            deleteService={true}
                            service={service}
                        ></ServiceDetail>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ManageService
