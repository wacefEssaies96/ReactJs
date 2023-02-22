
import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";

function Product(props) {
    const [{ likes }, setLikes] = useState(props.product.like)

    function addLikes() {
        setLikes(props.product.like += 1)
    }
    return (
        <Card className={props.product.like > 5 ? 'flex best-product' : 'flex'}>
            <Card.Header>
                <Card.Img src={require('../assets/images/' + props.product.img)}></Card.Img>
            </Card.Header>
            <Card.Body >
                <Card.Title>Title : {props.product.name}</Card.Title>
                <p>Description : {props.product.description}</p>
                <p>Quantity : {props.product.quantity}</p>
                <p>Price : {props.product.price} DT</p>
                <p>Likes : {props.product.like}</p>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-around">
                <Button onClick={addLikes}>Like</Button>
                <Button variant="info" onClick={props.buy} disabled={props.product.quantity === 0}>Buy</Button>
            </Card.Footer>
        </Card>
    )

}
export default Product;