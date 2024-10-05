import React, { Component } from 'react'

export default class Lifting extends Component {
  render() {
    return (
      <div><h1>{this.props.name}</h1></div>
    )
  }
}



// App.js Code

// import React, { Component } from 'react'
// import Lifting from './Lifting State Up/Lifting'

// export default class App extends Component {
//   state = {
//     name: "Naved"
//   }
//   render() {
//     return (
//       <div>
//         <Lifting name={this.state.name} />
//       </div>
//     )
//   }
// }