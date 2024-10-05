// import React, { Component } from 'react'

// export default class ClassState extends Component {
//     state = {
//         name: 'Naved',
//         class: 'BCA',
//         number: this.props.number
//     }
//     render() {
//         return (
//             <div>
//                 <h1>State With Class Componenet</h1>
//                 <h2>{this.state.name} {this.state.class}</h2>
//                 <h3>{this.state.number}</h3>
//             </div>
//         )
//     }
// }



// import React, { Component } from 'react'

// class ClassState extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//                     name: 'Naved',
//                     class: 'BCA',
//                     number: this.props.number
//                 }
//     }
//   render() {
//     return (
//       <div>
//         <h1>State With Class Componenet with Constructor</h1>
//         <h2>{this.state.name}</h2>
//         <h2>{this.state.class}</h2>
//         <h2>{this.state.number}</h2>
//       </div>
//     )
//   }
// }

// export default ClassState;



import React, { Component } from 'react'

export default class ClassState extends Component {
  constructor(){
    super();
    this.state={
      data:'Naved'
    }
  }
  updateData(){
    // this.setState({data:'awwaltech'})
    this.setState((state, props)=>{
      console.log(state)
    })
  }
  render() {
    return (
      <div>
        <h1>
          State With Class Componenet
        </h1>
        <h2>{this.state.data}</h2>
        <button onClick={()=>this.updateData()}>Update</button>
      </div>
    )
  }
}
