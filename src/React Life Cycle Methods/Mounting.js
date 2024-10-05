// step 1 ==> Constructor Method 
// step 2 ==> 

// import React, { Component } from 'react'

// export default class Mounting extends Component {
//     constructor(props){
//         super(props)
//         console.log("Constructor Called")
//         console.log(props)
//     }
//   render() {
//     return (
//       <div>
//         <h1>Mounting in React JS</h1>
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'
import ExampleMount from "./ExampleMount"

export default class Mounting extends Component {
    constructor(props){
        super(props)
        console.log("Constructor Called")
        console.log(props);
        this.state = {
            roll: "101"
        };
    }
    static getDerivedStateFromProps(props, state){
        console.log("App = Get Derived Called")
        console.log(props, state)
        return null;
    }
    componentDidMount(){
        console.log("Compo. did mount called")
    }
  render() {
    return (
      <div>
        <h1>Mounting in React JS</h1>
        <ExampleMount name="NAved" />
      </div>
    )
  }
}