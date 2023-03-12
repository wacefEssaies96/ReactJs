import { Component } from 'react';

class UnMounting extends Component {
    constructor(props) {
        super(props);
        this.addCell = this.addCell.bind(this);
        this.removeCell = this.removeCell.bind(this);

    }
    state = { nbCell:0 }
    addCell(){
        this.setState((oldState)=>({nbCell:oldState.nbCell+1}))
    }
    removeCell(){
        this.setState((oldState)=>({nbCell:oldState.nbCell-1}))
    }
    render() { 
        return ( <>
            <button onClick={this.addCell}>ADD</button>
            {this.state.nbCell>=1 && <button onClick={this.removeCell}>Remove</button> } 
            {[...Array(this.state.nbCell)].map((value, index) => (
            <Cell key={index} />
          ))}
        </> );
    }
}
class Cell extends Component {
    componentWillUnmount(){
        console.log("I m unmouting")
    }
    render() {
        return ( <div>CELL</div>)
    }
}
export default UnMounting;