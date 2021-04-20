import React, { useEffect, useState } from "react"
import aliza from "../../../images/aliza.png"
import ema from "../../../images/ema.png"
import wilson from "../../../images/wilson.png"
import Testimonial from "../Testimonial/Testimonial"
import "./Testimonials.css"

const testimonialData = [
    {
        quote:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
        name: "Wilson Harry",
        from: "California",
        img: wilson,
    },
    {
        quote:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
        name: "Ema Gomez",
        from: "California",
        img: ema,
    },
    {
        quote:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic non architecto nobis, adipisci recusandae repellat accusantium consequuntur, qui nisi deserunt blanditiis mollitia, illo! ",
        name: "Aliza Farari",
        from: "California",
        img: aliza,
    },
]

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch("https://stark-waters-06893.herokuapp.com/reviews")
            .then((res) => res.json())
            .then((data) => setReviews(data))
    }, [])
    return (
        <section id="reviews" className="testimonials my-5 py-5">
            <div className="container">
                <div className="section-header">
                    <h5 className="text-primary text-uppercase">Testimonial</h5>
                    <h1>
                        What Our Users <br /> Says{" "}
                    </h1>
                </div>
                <div className="card-deck mt-5">
                    {reviews.map((testimonial) => (
                        <Testimonial
                            testimonial={testimonial}
                            key={testimonial.name}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials
