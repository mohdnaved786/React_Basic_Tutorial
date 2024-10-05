import React, {Component} from "react";

class ClassProps extends Component{
    render(){
        return(
            <div>
                <h1>Props with Class Component</h1>
                <h2>{this.props.name} || {this.props.title}</h2>
            </div>
        )
    }
}

export default ClassProps;