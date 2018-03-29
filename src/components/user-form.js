import React, { Component } from 'react'

class UserForm extends Component {
    state = {
        user: ''
    }

    render() {
        return (
            <div>
                User: <input value = {this.state.user} onChange = {this.handleChange}/>
            </div>
        )
    }

    handleChange = ev => {
        if (ev.target.value.length > 10) return this.setState({
            user: ''
        })

        this.setState({
            user: ev.target.value
        })
    }
}

export default UserForm