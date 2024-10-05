// import React, { Component } from 'react'

// export default class List extends Component {
//   render() {
//     const arr = [10,20,30,40]
//     const myArr = arr.map(val=>{
//         console.log("===>", val)
//         return <li name="Naved">{val * 2}</li>
//     })
//     console.log("Old Array==>", arr);
//     console.log("New Array==>", myArr)
//     return (
//       <div>
//         <h1>List In React JS</h1>
//         <ul>
//             {myArr}
//         </ul>
//       </div>
//     )
//   }
// }


// import React, { Component } from 'react'

// export default class List extends Component {
//     render() {
//         const arr = [10, 20, 30, 40];
//         return (
//             <ul>{
//                 arr.map((num) => { return <li>{num}</li> })
//             }</ul>
//         )
//     }
// }

// import React, { Component } from 'react'

// export default class List extends Component {
//     render() {
//        const arr =  this.props.numbers;
//         return (
//             <ul>{
//                 arr.map((num) => <li>{num}</li>)
//             }</ul>
//         )
//     }
// }

// App.js code

// import React from "react";
// import List from "./List in React JS/List";

// function App() {
//   const arrValues = [10,20,30,40];
//   return (
//     <div>
//     < List numbers={arrValues} />
//     </div>
//   );
// }

// export default App;

// import React, { Component } from 'react'

// export default class List extends Component {
//     state = {
//         users: [
//             { id: 101, name: "Naved", password: "90976" },
//             { id: 102, name: "Rehan", password: "787645" },
//             { id: 103, name: "Ayan", password: "450987" }
//         ],
//     }
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.users[0].id}</h1>
//                 <h1>{this.state.users[0].name}</h1>
//                 <h1>{this.state.users[0].password}</h1>
//                 <h1>{this.state.users[1].id}</h1>
//                 <h1>{this.state.users[1].name}</h1>
//                 <h1>{this.state.users[1].password}</h1>
//                 <h1>{this.state.users[2].id}</h1>
//                 <h1>{this.state.users[2].name}</h1>
//                 <h1>{this.state.users[2].password}</h1>
//             </div>
//         )
//     }
// }


import React, { Component } from 'react'

export default class List extends Component {
    state = {
        users: [
            { id: 101, name: "Naved", password: "90976" },
            { id: 102, name: "Rehan", password: "787645" },
            { id: 103, name: "Ayan", password: "450987" }
        ],
    };
    render() {
        const newUsers = this.state.users.map((user)=>{
        console.log(user);
        return(
            <h1>ID: {user.id} Name: {user.name} Password: {user.password}</h1>
        )
        })
        return (
            <div>
                {newUsers}
            </div>
        )
    }
}
