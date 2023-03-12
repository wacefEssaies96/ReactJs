import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card } from "react-bootstrap";
import { useParams } from 'react-router-dom';
import { getProduct } from '../services/api';

function ProductDetails() {
    const param = useParams();
    
    const [product, setProduct] = useState({});
    useEffect(() => {
      getProductFunction();
     
    }, []);
  
    const getProductFunction = async () => {
      const response = await getProduct(param.id);
      setProduct(response.data);
      console.log(response.data)
    };
    
  return (
    <Container style={{ marginTop: "30px" }}>
       {product.id !== undefined ? <Row>
          <Col md={4}>
            <Card.Img
              variant="top"
              src={require("../assets/images/" + product.img)}
              alt="Product Img"
              height="300"
            />
          </Col>
          <Col md={8}>
          <Row>
          <Col md={12}>
            <h1>{product.name}</h1>
            </Col>
            </Row>
            <Row>
            <Col md={12}>
            <h5>Description : </h5>
            </Col>
            <Col>
            <p style={{ marginLeft: "50px"}}>
            {product.description}
            </p>
            </Col>
            </Row>
            <Row>
            <Col md={12}>
            <h5>Price :</h5>
            </Col>
            <Col>
            <p style={{ marginLeft: "50px"}}>{product.price} DT</p>

            </Col>
            <Col md={12}>
            <h5>Quantity :</h5>
            </Col>
            <Col>
            <p style={{ marginLeft: "50px"}}>{product.quantity}</p>

            </Col>
            </Row>
            <Row>
            <Col md={12}>
            <h5>Likes : </h5>
            </Col>
            <Col>
            <p style={{ marginLeft: "50px"}}>{product.like}</p>
            </Col>
            </Row>
          </Col>
        </Row> : <p> Product does not exist </p>}
      </Container>
  )
}

export default ProductDetails