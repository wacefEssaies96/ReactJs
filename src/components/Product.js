import Card from "react-bootstrap/Card";
import { Component, useState, useEffect } from 'react';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Product(props) {

  const [product, setProduct] = useState(props.product)
  const [likes, setLikes] = useState(props.product.like)

  const like = () => {
    setLikes(likes + 1);
  }
  useEffect(() => { console.log("Likes Update") }, [])

  return (
    <Card style={{ width: '18rem' }} className={likes > 5 && 'bestProduct'}>
      <Card.Img variant="top" src={require("../assets/images/" + product.img)} height="200" width="50" />
      <Card.Body>
        <Card.Title><Link to={`/products/${product.id}`}>{product.name}</Link></Card.Title>
        <Card.Text>
          {product.description}
        </Card.Text>
        <Card.Text>
          Price :{product.price}
        </Card.Text>
        <Card.Text>
          Quantity :{product.quantity}
        </Card.Text>
        <Card.Text>
          Likes :{likes}
        </Card.Text>
        <Button variant="primary" onClick={like}>Like</Button>
        <Button variant="primary" onClick={() => props.buyFunction(product)} disabled={product.quantity <= 0}>Buy</Button>

      </Card.Body>
    </Card>);

}

export default Product;
