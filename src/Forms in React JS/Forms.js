// React Controlled Component with Input

// import React, { Component } from 'react'

// export default class Forms extends Component {
//     state = {
//         value: ""
//     };
//     handleChange = e =>{
//         // console.log(e.target.value);
//         this.setState({value: e.target.value.toUpperCase().substr(0, 10)});
//     }
//     render() {
//         return (
//             <div>
//                 <form>
//                     <h1>Controlled By React</h1>
//                     <input type="text" value =  {this.state.value}  onChange={this.handleChange}/>
//                 </form>
//             </div>
//         )
//     }
// }

// React Controlled Component with Textarea


// import React, { Component } from 'react'

// export default class Forms extends Component {
//     state = {
//         value: ""
//     };
//     changeData = e =>{
//         console.log(e.target.value);
//         this.setState({value: e.target.value})
//     }
//   render() {
//     return (
//       <div>
//         <form>
//             <textarea value={this.state.value} onChange={this.changeData} />
//         </form>
//       </div>
//     )
//   }
// }


// import React, { Component } from 'react'

// export default class Forms extends Component {
//     state = {
//         name: "naved",
//         password: "12345"
//     };
//     change = (e) =>{
//         // this.setState({[e.target.name] : e.target.value})
//         // console.log([e.target.name])
//         const value = e.target.name === "password" ? e.target.value.toUpperCase().substr(0,5) : e.target.value;
//         this.setState({[e.target.name] : value})
//     }
//   render() {
//     return (
//       <div>
//         <form>
//             <label>
//                 Name : <input type="text" name="name" value={this.state.name} onChange={this.change} />
//             </label>
//             <br />
//             <br />
//             <label>
//                 Password : <input type="text" name="password" value={this.state.password} onChange={this.change} />
//             </label>
//         </form>
//       </div>
//     )
//   }
// }



// import React, { Component } from 'react'

// export default class Forms extends Component {
//     state = {
//         name: "",
//         password: ""
//     };
//     change = (e) =>{
//         this.setState({[e.target.name] : e.target.value})
//     };
//     handleSubmit = e =>{
//         console.log(e.target[1].value)
//         e.preventDefault()
//     }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleSubmit}>
//             <label>
//                 Name : <input type="text" name="name" value={this.state.name} onChange={this.change} />
//             </label>
//             <br />
//             <br />
//             <label>
//                 Password : <input type="text" name="password" value={this.state.password} onChange={this.change} />
//             </label>
//             <br />
//             <br />
//             <input type="submit" value="Submit" />
//         </form>
//       </div>
//     )
//   }
// }