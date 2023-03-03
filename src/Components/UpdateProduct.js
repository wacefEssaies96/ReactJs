import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { editProduct, getProductById } from "../services/api";

export default function UpdateProduct() {
    const [product, setProduct] = useState({
        "name": "",
        "price": "",
        "img": "",
        "like": 0,
        "quantity": "",
        "description": ""
    })
    const navigate = useNavigate()
    const params = useParams();


    const handleOnChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    const handleOnChangeFile = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.files[0].name })
    }

    useEffect(() => {
        getProductById(params.id)
            .then((res) => {
                setProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const update = (e) => {
        e.preventDefault()
        editProduct(params.id ,product).then(() => navigate('/products/list'))
    }

    return (
        <Container style={{ marginTop: "30px" }}>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control defaultValue={product.name} onChange={(e) => handleOnChange(e)} name="name" as="textarea" type="text" placeholder="Enter the name" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control defaultValue={product.description} onChange={(e) => handleOnChange(e)} name="description" type="text" placeholder="Enter the product description" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Price</Form.Label>
                    <Form.Control defaultValue={product.price} onChange={(e) => handleOnChange(e)} name="price" type="number" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control defaultValue={product.quantity} onChange={(e) => handleOnChange(e)} name="quantity" type="number" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control defaultValue={product.img} onChange={(e) => handleOnChangeFile(e)} name="img" type="file" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={update}>
                    update Product
                </Button>
                <Button variant="gray" type="reset">
                    Reset
                </Button>
            </Form>
        </Container>
    )
}