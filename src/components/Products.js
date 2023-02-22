import React from "react";
import Product from "./Product";
import productList from "../products.json"
import { Alert, Col, Container, Row } from "react-bootstrap";

export default class Products extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openalert: false,
            alertbienvenue: true
        }

    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({ alertbienvenue: false })
        }, 3000)
    }
    buy = () => {
        if (!this.state.openalert) {
            this.setState({ openalert: !this.state.openalert })
            setTimeout(() => {
                this.setState({ openalert: !this.state.openalert })
            }, 2000)
        }
    };
    render() {
        return (
            <div>
                {this.state.alertbienvenue && (<Alert variant="success">
                    <Alert.Heading>Hey, Welcome to Our Shop <b>MyStrore</b></Alert.Heading>
                    Thank you for choosing our strore, we hope you enjoy your shopping experience!
                    <hr />
                </Alert>)}
                <Container>
                    <Row>
                        <Col className="d-flex">
                            {productList.map((item, index) => <Product
                                key={index}
                                product={item}
                                buy={this.buy}></Product>)}
                        </Col>
                    </Row>
                </Container>
                {this.state.openalert && (<Alert variant="info">
                    You bought an item !
                </Alert>)}

            </div>
        )
    }
}