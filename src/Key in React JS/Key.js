import React, { Component } from 'react'

export default class Key extends Component {
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
            <h1 key={user.id}>ID: {user.id} Name: {user.name} Password: {user.password}</h1>
        )
        })
        return (
            <div>
                {newUsers}
            </div>
        )
    }
}