import React, { Component } from 'react'
import Context from "./Context"

export default class User extends Component {
    render() {
        return (
            <div>
                <h3>User Component</h3>
                <Context />
            </div>
        )
    }
}
