import React, {Component} from "react";

class Children extends Component{
    render(){
        return(
            <div>
                <h1>JSX Children Component Example</h1>
                <h2>{this.props.children}</h2>
            </div>
        )
    }
}

export default Children;