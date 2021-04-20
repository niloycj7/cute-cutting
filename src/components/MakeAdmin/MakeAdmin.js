import React from "react"
import { Card, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"

const MakeAdmin = ({ setUserInfo }) => {
    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        fetch(
            `https://stark-waters-06893.herokuapp.com/addUser/?email=${
                data.email
            }&admin=${true}`
        )
            .then((res) => res.json())
            .then((data) => setUserInfo(data))
    }
    return (
        <section
            style={{ height: "90vh" }}
            className="d-flex justify-content-center align-items-center ms-5"
        >
            <Card className="p-5">
                <Card.Body>
                    <Form name="login-form" onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group>
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                className="border60"
                                {...register("name")}
                                placeholder="name"
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                className="border60"
                                {...register("email")}
                                placeholder="email"
                                required
                            ></Form.Control>
                        </Form.Group>
                        <button
                            type="submit"
                            className="btn w-100 button-main mt-3"
                        >
                            ADD AS ADMIN
                        </button>
                    </Form>
                </Card.Body>
            </Card>
        </section>
    )
}

export default MakeAdmin
