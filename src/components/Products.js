import React from "react";
import Product from "./Product";
import productList from "../products.json"
import { Col } from "react-bootstrap";

export default class Products extends React.Component {

    render() {
        return (
            <Col md={4}>
                {productList.map((item, index) => <Product key={index} product={item}></Product>)}
            </Col>
        )
    }
}