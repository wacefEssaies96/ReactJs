import { Component } from 'react';

class Updating extends Component {
    constructor(props) {
        super(props);
    }
    state = { likes:0 }
    static getDerivedStateFromProps(props,state) {
        console.log(props)
        console.log("From derived State")
        return null;
    }
    shouldComponentUpdate(props,state){
        if(state.likes > 2){
            console.log(state.likes)
            console.log("not updating")
            return false;
        }else {
            return true;
        }
    }

    getSnapshotBeforeUpdate(prevProps,PrevState){
        console.log(prevProps);
        console.log(PrevState);
        return {prevProps,PrevState}
    }
    componentDidUpdate(){
        console.log("I m updated")
    }
    addLikes = () => {
        //console.log(this);
        this.setState((oldState)=>({ likes:oldState.likes + 1}))
    }
    render() {
        console.log("From render") 
        return ( <><h1>Update</h1>{this.state.likes}
        <button onClick={this.addLikes}>Like</button>
        </> );
    }
}
 
export default Updating;