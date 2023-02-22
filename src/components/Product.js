
import React from "react";
import { Button, Card } from "react-bootstrap";

export default class Product extends React.Component {

    constructor(props) {
        super(props)
        this.state = props.product
        this.buy = props.buy
    }
    addLikes=()=>{
        this.setState((oldState)=>({
            like: oldState.like + 1
        }))
    }

    render() {
        return (
            <Card className="flex">
                <Card.Header>
                    <Card.Img src={require('../assets/images/' + this.state.img)}></Card.Img>
                </Card.Header>
                <Card.Body>
                    <Card.Title>Title : {this.state.name}</Card.Title>
                    <p>Description : {this.state.description}</p>
                    <p>Price : {this.state.price} DT</p>
                    <p>Likes : {this.state.like}</p>
                </Card.Body>
                <Card.Footer>
                    <Button onClick={this.addLikes}>Like</Button>
                    <Button onClick={this.buy} disabled={this.state.quantity === 0}>Buy</Button>
                </Card.Footer>
            </Card>
        )
    }
}