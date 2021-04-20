import { faUpload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import axios from "axios"
import React, { useContext, useState } from "react"
import { Card, Form } from "react-bootstrap"
import { useForm } from "react-hook-form"
import { LoginContext } from "../../contexts/LoginContext"

const AddService = () => {
    const { user } = useContext(LoginContext)
    const { register, handleSubmit } = useForm()
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState(null)
    const handleImage = (e) => {
        setLoading(true)
        const imgData = new FormData()
        imgData.set("key", "5ba34ded420c00506f3690f403da3ff8")
        imgData.append("image", e.target.files[0])
        axios.post("https://api.imgbb.com/1/upload", imgData).then((res) => {
            setImage(res?.data?.data?.display_url)
            setLoading(false)
        })
    }
    const onSubmit = async (data) => {
        setLoading(true)
        const newService = {
            ...data,
            image,
        }
        await fetch("https://stark-waters-06893.herokuapp.com/add-a-service", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(newService),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            })
        setLoading(false)
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
                            <Form.Label>Service Name</Form.Label>
                            <Form.Control
                                autoFocus
                                type="text"
                                className="border60"
                                {...register("name")}
                                placeholder="Enter your service type"
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                className="border60"
                                {...register("description")}
                                placeholder="Enter Description"
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label>Price</Form.Label>
                            <Form.Control
                                type="text"
                                className="border60"
                                {...register("price")}
                                placeholder="Enter Price"
                                required
                            ></Form.Control>
                        </Form.Group>
                        <Form.Group className="mt-3">
                            <Form.Label>Choose Service Photo</Form.Label>
                            <Form.File
                                type="file"
                                className="border60"
                                onChange={handleImage}
                                required
                            ></Form.File>
                        </Form.Group>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn w-100 button-main mt-3"
                        >
                            <FontAwesomeIcon icon={faUpload} /> ADD SERVICE
                        </button>
                    </Form>
                </Card.Body>
            </Card>
        </section>
    )
}

export default AddService
