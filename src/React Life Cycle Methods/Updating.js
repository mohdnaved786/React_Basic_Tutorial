import React, { Component } from 'react'

export default class Updating extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mroll: this.props.roll
        };
    }

    static getDerivedStateFromProps(props, state){
        console.log("Ho Gaya")
       if(props.roll !== state.mroll){
        return {mroll: props.roll}
       }
       return null
    }
    shouldComponentUpdate(nextProps, nextState){
        if(this.state.mroll < 107){
            console.log("Should component update");
            console.log(nextProps, nextState)
            return true;
        }
        console.log(nextProps, nextState)
        return false
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("opopop===> it runs before update")
        console.log(prevProps, prevState)
        return 45;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("kllkl===> it runs after update")
        console.log(prevProps, prevState, snapshot)
    }
    render() {
        return (
            <div>
                <h1>Updating in React JS</h1>
                <h1>{this.state.mroll}</h1></div>
        )
    }
}


// APP JS Code

// import React, { Component } from 'react'
// import Updating from './React Life Cycle Methods/Updating'

// export default class App extends Component {
//   constructor(){
//     super();
//     this.state = {
//       roll: 101
//     };
//   }
//   clickHandle = () =>{
//     console.log("Button Clicked");
//     this.setState({roll: this.state.roll + 1})
//   };
//   render() {
//     return (
//       <div>
//         <Updating roll={this.state.roll} />
//         <button onClick={this.clickHandle}>Change</button>
//       </div>
//     )
//   }
// }