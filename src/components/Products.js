import React, { useEffect, useState } from "react";
import Product from "./Product";
import productList from "../products.json"
import { Alert, Col, Container, Row } from "react-bootstrap";

function Products() {

    const [{ openalert }, setOpenAlert] = useState({ openalert: false })
    const [{ alertbienvenue }, setAlertBienvenue] = useState({ alertbienvenue: true })

    function buy(prod) {
        prod.quantity--
        if (!openalert) {
            setOpenAlert({ openalert: true })
        }
    };
    useEffect(() => {
        setTimeout(() => {
            setOpenAlert({ openalert: false })
        }, 2000)
    }, [openalert])
    useEffect(() => {
        setTimeout(() => {
            setAlertBienvenue({ alertbienvenue: false })
        }, 3000)
    })
    return (
        <div>
            {alertbienvenue && (<Alert variant="success">
                <Alert.Heading>Hey, Welcome to Our Shop <b>MyStore</b></Alert.Heading>
                Thank you for choosing our strore, we hope you enjoy your shopping experience!
                <hr />
            </Alert>)}
            <Container>
                <Row>
                    <Col className="d-flex">
                        {productList.map((item, index) => <Product
                            key={index}
                            product={item}
                            buy={() => buy(item)}
                        ></Product>)}
                    </Col>
                </Row>
            </Container>
            {openalert && (<Alert variant="info">
                You bought an item !
            </Alert>)}

        </div>
    )

}
export default Products;