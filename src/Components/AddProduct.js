import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../services/api";

export default function AddProduct() {
    const [product, setProduct] = useState({
        "name": "",
        "price": "",
        "img": "",
        "like": 0,
        "quantity": "",
        "description": ""
    })
    const navigate = useNavigate()

    const handleOnChange = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.value })
        console.log(product);
    }
    const handleOnChangeFile = (e) => {
        setProduct({ ...product, [e.target.name]: e.target.files[0].name })
        console.log(product)
    }

    const add = (e) => {
        e.preventDefault()
        addProduct(product).then(()=>navigate('/products/list'))
    }

    return (
        <Container style={{ marginTop: "30px" }}>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control onChange={(e) => handleOnChange(e)} name="name" as="textarea" type="text" placeholder="Enter the name" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Description</Form.Label>
                    <Form.Control onChange={(e) => handleOnChange(e)} name="description" type="text" placeholder="Enter the product description" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Price</Form.Label>
                    <Form.Control onChange={(e) => handleOnChange(e)} name="price" type="number" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control onChange={(e) => handleOnChange(e)} name="quantity" type="number" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Image</Form.Label>
                    <Form.Control onChange={(e) => handleOnChangeFile(e)} name="img" type="file" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={add}>
                    Add Product
                </Button>
                <Button variant="gray" type="reset">
                    Save
                </Button>
            </Form>
        </Container>
    )
}