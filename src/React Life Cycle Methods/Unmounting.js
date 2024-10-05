import React, { Component } from 'react'

export default class Unmounting extends Component {
    componentDidMount(){
        console.log("Mounted Called!")
    }
  render() {
    return (
      <div>Unmounting</div>
    )
  }
}



// App js code 
// import React, { Component } from 'react'
// import Unmounting from './React Life Cycle Methods/Unmounting'
// export default class App extends Component {
//   componentDidMount(){
//     console.log("App Mounted")
//   }
//   componentWillUnmount(){
//     console.log("App Unmounted")
//   }
//   render() {
//     return (
//       <div>
//         <Unmounting />
//       </div>
//     )
//   }
// }
