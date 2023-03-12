import {Component} from "react";
class ClassComponent extends Component {
    // constructor(props){
    //     super(props)
    //     //props.title="Hello from child"
    //     console.log(this.state)
    //     //this.state={likes:0,state1:this.props.title,'state2':'Hello from Child'}
    //     this.addLikes = this.addLikes.bind(this)
    // }
    state = {likes:0,state1:this.props.title,state2:"Hello from Child"}
    //methode attachée
    addLikes () {
        //console.log(this);
        this.setState((oldState)=>({...oldState,likes:oldState.likes + 1}))
    }
    sayHello(){
        console.log("Hello");
    }
    render(){
        return (<><p>{this.props.title}</p>
        <p>{this.state.state1}</p>
        <p> {this.state.state2}</p>
        <p> {this.state.likes}</p>
        <button onClick={this.addLikes}>Like</button>
        <button onClick={this.sayHello}>Say Hello</button>
        </>)
    }
      
}

export default ClassComponent;