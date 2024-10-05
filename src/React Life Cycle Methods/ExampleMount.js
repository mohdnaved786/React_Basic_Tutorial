import React, { Component } from 'react'

export default class ExampleMount extends Component {
    // constructor(props){
    //     super(props)
    //     console.log("==>", props)
    // }
  render() {
    return (
      <div><h1>{this.props.name}</h1></div>
    )
  }
}
