import React, { useEffect, useState } from "react"
import ServiceDetail from "../ServiceDetail/ServiceDetail"

const Services = () => {
    const [serviceData, setServiceData] = useState([])
    useEffect(() => {
        fetch("https://stark-waters-06893.herokuapp.com/services")
            .then((res) => res.json())
            .then((data) => setServiceData(data))
    }, [])
    return (
        <section id="work" className="services-container mt-5">
            <div className="text-center">
                <h5 style={{ color: "red" }}>OUR SERVICES</h5>
                <h2 style={{ color: "green" }}>Services We Provide</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 pt-5">
                    {serviceData.map((service) => (
                        <ServiceDetail
                            deleteService={false}
                            service={service}
                        ></ServiceDetail>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
