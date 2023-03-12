import { Component } from "react";

class Mounting extends Component {
    constructor(props) {
        super(props);
        console.log("From constructor");
    }
    state = {  }
    static getDerivedStateFromProps(props,state) {
        console.log(props)
        console.log("From derived State")
        return null;
    }
    componentDidMount() {
        console.log("From componentDidMount")
    }
    render() { 
        console.log("From render")
        return ( <h1>Mounting</h1> );
    }
}
 
export default Mounting;