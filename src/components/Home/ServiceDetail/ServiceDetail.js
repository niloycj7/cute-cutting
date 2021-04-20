import { CardElement, Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React, { useContext } from "react"
import { Form } from "react-bootstrap"
import ReactModal from "react-modal"
import { useHistory } from "react-router"
import { LoginContext } from "../../../contexts/LoginContext"
ReactModal.setAppElement("#root")
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx")
const ServiceDetail = ({ service, deleteService }) => {
    const [modalIsOpen, setIsOpen] = React.useState(false)
    const history = useHistory()
    const handleDeleteService = () => {
        fetch(
            `https://stark-waters-06893.herokuapp.com/deleteService/${service._id}`
        )
            .then((res) => res.json())
            .then((data) => console.log(data))
    }
    const { user } = useContext(LoginContext)

    const customStyles = {
        content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    }
    function openModal() {
        setIsOpen(true)
    }

    function afterOpenModal() {}

    function closeModal() {
        setIsOpen(false)
    }
    const handleOrder = (e) => {
        if (user) {
            e.preventDefault()
            const newOrder = {
                email: user.email,
                serviceName: service.name,
                date: new Date(),
                status: "pending",
            }
            fetch("https://stark-waters-06893.herokuapp.com/addOrder", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(newOrder),
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    closeModal()
                })
        } else {
            history.replace("/login")
        }
    }
    return (
        <div className="col-md-4 text-center border p-4">
            <ReactModal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center text-uppercase text-secondary px-5">
                    Book This Service Now
                </h2>
                <Form className="p-5 w-100">
                    <Form.Group
                        controlId="formPlaintextEmail"
                        className="mb-2 text-center w-100 d-block"
                    >
                        <Form.Label column sm="2">
                            Email
                        </Form.Label>
                        <Form.Control
                            plaintext
                            readOnly
                            defaultValue={user?.email}
                        />
                    </Form.Group>
                    <Elements stripe={stripePromise}>
                        <CardElement
                            options={{
                                style: {
                                    base: {
                                        fontSize: "16px",
                                        color: "#424770",
                                        "::placeholder": {
                                            color: "#aab7c4",
                                        },
                                    },
                                    invalid: {
                                        color: "#9e2146",
                                    },
                                },
                            }}
                        />
                    </Elements>
                    <button
                        type="submit"
                        onClick={handleOrder}
                        className="button-main mt-4"
                    >
                        Book Now
                    </button>
                </Form>
            </ReactModal>
            <img style={{ height: "100px" }} src={service.image} alt="" />
            <h5 className="mt-3 mb-3">{service.name}</h5>
            <h5 className="mt-1 text-center text-secondary mb-1">{service.price}</h5>
            <p className="text-secondary">{service.description}</p>
            {deleteService === true ? (
                <button
                    onClick={handleDeleteService}
                    className="button-main text-center"
                >
                    Delete Service
                </button>
            ) : (
                <button onClick={openModal} className="button-main text-center">
                    Book Service
                </button>
            )}
        </div>
    )
}

export default ServiceDetail
