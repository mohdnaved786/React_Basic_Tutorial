import React, { Component } from 'react'
import { MyContext } from '../App'

export default class Context extends Component {
  render() {
    return (
      <div>
        <h3>Context Component</h3>
        <MyContext.Consumer>
            {({data, handleClick}) => (<div>
                <h4>Name : {data.name} Value: {data.value}</h4>
            <button onClick={handleClick}>Change Value</button>
            </div>)}
        </MyContext.Consumer>
      </div>
    )
  }
}



// How to use Context Api in one file

// import React from 'react';
// const MyContext = React.createContext();
// export const Provider = MyContext.Provider;
// export const Consumer = MyContext.Consumer;




// App.js code 

// import React, { Component } from 'react';
// // import Context from "./Context Api in React JS/Context"
// import User from './Context Api in React JS/User';
// export const MyContext = React.createContext();

// export default class App extends Component {
//   state = {
//     name: "naved",
//     value: 10
//   };
//   handleClickContext = () =>{
//     this.setState({value: this.state.value + 1})
//   }
//   render() {
//     const contextValue = {
//       data: this.state,
//       handleClick: this.handleClickContext
//     }
//     return (
//       <MyContext.Provider value={contextValue}>
//         {/* <Context /> */}
//         <User />
//       </MyContext.Provider>
//     )
//   }
// }