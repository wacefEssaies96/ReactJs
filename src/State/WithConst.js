import React from "react";


export class WithConst extends React.Component {

constructor(props){
    super(props)
    this.state = {
        etat1 :"chaine ",
        etat2 : 0
    }
}

render(){
    return (<div>


       <h1>{this.state.etat1}</h1>  <h1>{this.state.etat2}</h1> 
    </div>)
}
}