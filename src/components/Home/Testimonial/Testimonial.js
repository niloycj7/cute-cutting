import React from "react"

const Testimonial = (props) => {
    const { name, email, comments } = props.testimonial
    return (
        <div className="card shadow-sm">
            <div className="card-body">
                <p className="card-text text-center fw-bold">{name}</p>
                <p className="card-text text-center">{email}</p>
            </div>
            <div className="card-footer">
                <div>
                    <h6 className="text-primary">{comments}</h6>
                    <p className="m-0">Dhaka , Bangladesh</p>
                </div>
            </div>
        </div>
    )
}

export default Testimonial
