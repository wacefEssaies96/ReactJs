import React from "react";




export default class Unmouting extends React.Component {
    constructor(props) {
      super(props);
     
      this.addCell = this.addCell.bind(this);
      this.removeCell = this.removeCell.bind(this);
      this.state = { likes: 0 };
    }
    removeCell() {
      this.setState((oldState) => ({
        likes: oldState.likes + -1,
      }));
    }
  
    addCell() {
      this.setState((oldState) => ({
        likes: oldState.likes + 1,
      }));
    }
  
    render() {
      return (
        <div>
          <button onClick={this.addCell}>ADD</button>
          {this.state.likes !== 0 && (
            <button onClick={this.removeCell}>REMOVE</button>
          )}
          {[...Array(this.state.likes)].map((value, index) => (
            <Cell key={index} id={index} />
          ))}
        </div>
      );
    }
  }

  class Cell extends React.Component {
   
    componentWillUnmount() {
      console.log("number " + this.props.id + " is dead");
    }
  
    render() {
      return <h1>Cell {this.props.id}</h1>;
    }
  }