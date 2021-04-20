import React from "react"
import pic1 from "../../../images/pic1.jpg"

const HeaderMain = () => {
    return (
        <main
            style={{ height: "600px" }}
            className="row d-flex align-items-center"
        >
            <div className="col-md-4 offset-md-1">
                <h1 style={{ color: "#3A4256" }}>
                    When you look good <br /> you feel good.
                </h1>
                <p className="text-secondary">
                    At our mens grooming salon we offer the very best in men's
                    hair cuts delivered by expert mens hairdressers
                </p>
                <button className="button-main">GET BOOKING</button>
            </div>
            <div className="col-md-6">
                <img src={pic1} alt="" className="img-fluid" />
            </div>
        </main>
    )
}

export default HeaderMain
