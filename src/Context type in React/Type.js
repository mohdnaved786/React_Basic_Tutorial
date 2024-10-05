import React, { Component } from 'react'
import { MyContext } from '../App'

export default class Type extends Component {
    componentDidMount = () =>{
        console.log(this.context)
    }
  render() {
    const {name, value} = this.context.data;
    return (
      <div>
        <h3>Context Component</h3>
        {/* <MyContext.Consumer>
            {({data, handleClick}) => (<div>
                <h4>Name : {data.name} Value: {data.value}</h4>
            <button onClick={handleClick}>Change Value</button>
            </div>)}
        </MyContext.Consumer> */}
      </div>
    )
  }
}



// How to use Context Api in one file

// import React from 'react';
// const MyContext = React.createContext();
// export const Provider = MyContext.Provider;
// export const Consumer = MyContext.Consumer;